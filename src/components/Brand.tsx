import brandIcon from '../assets/nigeriamart-icon.png';
import { cn } from '../lib/cn';

type BrandProps = {
  light?: boolean;
  compact?: boolean;
  className?: string;
};

export function Brand({ light = false, compact = false, className }: BrandProps) {
  return (
    <a href="#top" className={cn('brand', className)} aria-label="NigeriaMart home">
      <img src={brandIcon} alt="" className="brand__icon" width="42" height="42" />
      {!compact && (
        <span className={cn('brand__wordmark', light && 'brand__wordmark--light')}>
          <span>Nigeria</span><strong>Mart</strong>
        </span>
      )}
    </a>
  );
}
