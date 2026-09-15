import { Reveal } from './Reveal';
import { cn } from '../lib/cn';

export function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
  align = 'left',
  className,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <Reveal className={cn('section-heading', `section-heading--${align}`, light && 'section-heading--light', className)}>
      <div className="eyebrow"><span className="eyebrow__dot" />{eyebrow}</div>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </Reveal>
  );
}
