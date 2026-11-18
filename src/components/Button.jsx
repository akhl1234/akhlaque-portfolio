import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  target,
  rel,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[#8B5CF6] focus-visible:outline-offset-2';

  const variantStyles = {
    primary: 'btn-primary-violet',
    secondary: 'btn-secondary-violet',
    ghost:
      'text-[#C4B5FD] hover:text-[#F8FAFC] hover:bg-[#8B5CF6]/10 transition-colors duration-150',
  };

  const sizeStyles = {
    sm: 'px-3.5 py-2 text-[13px] min-h-[38px]',
    md: 'px-5 py-2.5 text-[15px] min-h-[44px]',
    lg: 'px-6 py-3 text-[15px] min-h-[48px]',
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        className={combinedClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
