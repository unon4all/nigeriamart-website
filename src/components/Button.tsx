import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/cn';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost';
  external?: boolean;
  className?: string;
  icon?: boolean;
};

export function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className,
  icon = true,
}: ButtonProps) {
  return (
    <a
      className={cn('btn', `btn--${variant}`, className)}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span>{children}</span>
      {icon && <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />}
    </a>
  );
}
