import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Brand } from './Brand';
import { Button } from './Button';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { cn } from '../lib/cn';

const links = [
  { label: 'Platform', href: '#platform', id: 'platform' },
  { label: 'For Buyers', href: '#buyers', id: 'buyers' },
  { label: 'For Suppliers', href: '#suppliers', id: 'suppliers' },
  { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
  { label: 'Mission', href: '#mission', id: 'mission' },
];

export function Navbar() {
  const ids = useMemo(() => links.map((link) => link.id), []);
  const active = useScrollSpy(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    const firstLink = mobileNavRef.current?.querySelector<HTMLAnchorElement>('a');
    firstLink?.focus();

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className={cn('site-nav', scrolled && 'site-nav--scrolled')}>
      <div className="shell site-nav__inner">
        <Brand light />
        <nav className="site-nav__links" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.id} href={link.href} className={cn(active === link.id && 'is-active')}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="site-nav__actions">
          <Button href="#research" variant="primary" className="site-nav__cta">Join Early Access</Button>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((value: boolean) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={mobileNavRef}
            id="mobile-navigation"
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <nav className="shell mobile-nav__links" aria-label="Mobile navigation">
              {links.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                >
                  <span>0{index + 1}</span>{link.label}
                </motion.a>
              ))}
              <Button href="#research" variant="primary" className="mobile-nav__button">Join Early Access</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
