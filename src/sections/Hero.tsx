import { motion } from 'framer-motion';
import { ArrowDown, BadgeCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { NetworkVisual } from '../components/NetworkVisual';
import { useReducedMotionSafe } from '../hooks/useReducedMotionSafe';

export function Hero() {
  const reduced = useReducedMotionSafe();
  const reveal = (delay: number) => reduced
    ? {}
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section id="top" className="hero">
      <div className="hero__noise" />
      <div className="hero__orb hero__orb--one" />
      <div className="hero__orb hero__orb--two" />
      <div className="shell hero__layout">
        <div className="hero__copy">
          <motion.h1 {...reveal(0.05)}>
            Where Nigerian businesses <em>discover, connect</em> and trade.
          </motion.h1>
          <motion.p className="hero__lede" {...reveal(0.14)}>
            NigeriaMart is building a digital B2B marketplace that helps buyers discover relevant suppliers and helps businesses become easier to find across Nigeria.
          </motion.p>
          <motion.div className="hero__eyebrow hero__eyebrow--below-copy" {...reveal(0.22)}>
            <BadgeCheck size={15} aria-hidden="true" />
            Building Nigeria's next-generation B2B marketplace
          </motion.div>
          <motion.div className="hero__actions" {...reveal(0.31)}>
            <Button href="#research" variant="primary">Join Early Access</Button>
            <Button href="#platform" variant="ghost">Explore the Vision</Button>
          </motion.div>
          <motion.div className="hero__footnote" {...reveal(0.4)}>
            <span className="hero__status"><i /> Early research & validation</span>
            <span>Built for Nigerian businesses.</span>
          </motion.div>
        </div>
        <motion.div className="hero__visual" {...reveal(0.18)}>
          <NetworkVisual />
        </motion.div>
      </div>
      <a href="#platform" className="hero__scroll" aria-label="Scroll to platform story">
        <span>Explore</span><ArrowDown size={17} />
      </a>
    </section>
  );
}
