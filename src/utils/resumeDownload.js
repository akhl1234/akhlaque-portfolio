import { PROFILE } from '../data/portfolioData';

function resolveResumeUrl() {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = PROFILE.resumeUrl.replace(/^\/+/, '');
  return `${base}${cleanPath}`;
}

/**
 * Verifies whether the actual resume PDF is available at public/resume.pdf
 * before triggering a download, avoiding broken downloads if not yet uploaded.
 */
export async function handleResumeDownload(onUnavailable) {
  const url = resolveResumeUrl();
  try {
    let response = await fetch(url, { method: 'HEAD' });
    if (response.status === 405) {
      response = await fetch(url, { method: 'GET' });
    }

    const contentType = response.headers.get('content-type') || '';

    if (!response.ok || !contentType.toLowerCase().includes('pdf')) {
      if (onUnavailable) {
        onUnavailable(
          'Resume PDF is not uploaded yet. Add your actual PDF file as public/resume.pdf to enable direct download.'
        );
      }
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = PROFILE.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch {
    if (onUnavailable) {
      onUnavailable(
        'Unable to verify resume PDF. Please ensure your actual resume PDF is placed at public/resume.pdf.'
      );
    }
  }
}

/**
 * Copies text to clipboard with a textarea fallback for restricted contexts.
 */
export async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to execCommand fallback
    }
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}
