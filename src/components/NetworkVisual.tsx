import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Boxes, Factory, PackageCheck, Truck, UsersRound } from 'lucide-react';
import brandIcon from '../assets/nigeriamart-icon.png';
import { networkCities } from '../data/content';
import { useReducedMotionSafe } from '../hooks/useReducedMotionSafe';

const cityPoints = networkCities.slice(0, 5);
const hub = { x: 50, y: 53 };

export function NetworkVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionSafe();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(smoothY, [0, 1], [3, -3]);
  const rotateY = useTransform(smoothX, [0, 1], [-4, 4]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    mouseX.set((event.clientX - bounds.left) / bounds.width);
    mouseY.set((event.clientY - bounds.top) / bounds.height);
  }

  return (
    <motion.div
      ref={ref}
      className="network-visual"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
      style={reduced ? undefined : { rotateX, rotateY, transformPerspective: 1100 }}
      role="img"
      aria-label="Concept illustration of Nigerian buyers and suppliers connecting through NigeriaMart"
    >
      <div className="network-visual__grid" />
      <div className="network-visual__halo network-visual__halo--one" />
      <div className="network-visual__halo network-visual__halo--two" />
      <div className="network-visual__label"><span />Concept network</div>

      <svg className="network-visual__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(49,228,148,.16)" />
            <stop offset="50%" stopColor="rgba(49,228,148,.8)" />
            <stop offset="100%" stopColor="rgba(229,168,35,.25)" />
          </linearGradient>
        </defs>
        {cityPoints.map((city, index) => (
          <motion.path
            key={city.name}
            d={`M ${city.x} ${city.y} Q ${(city.x + hub.x) / 2 + (index % 2 ? -6 : 6)} ${(city.y + hub.y) / 2 - 5} ${hub.x} ${hub.y}`}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0.32"
            vectorEffect="non-scaling-stroke"
            initial={reduced ? false : { pathLength: 0, opacity: 0 }}
            animate={reduced ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.45 + index * 0.12, ease: 'easeOut' }}
          />
        ))}
      </svg>

      {cityPoints.map((city) => (
        <motion.div
          key={city.name}
          className="city-node"
          style={{ left: `${city.x}%`, top: `${city.y}%` }}
          initial={reduced ? false : { opacity: 0, scale: 0.6 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 + city.delay * 0.18, duration: 0.45 }}
        >
          <span className="city-node__pulse" />
          <span className="city-node__dot" />
          <span className="city-node__name">{city.name}</span>
        </motion.div>
      ))}

      <motion.div
        className="hub-card"
        initial={reduced ? false : { opacity: 0, scale: 0.88, y: 12 }}
        animate={reduced ? undefined : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hub-card__brand">
          <img src={brandIcon} alt="" width="48" height="48" />
          <div><span>NigeriaMart</span><small>Business network</small></div>
        </div>
        <div className="hub-card__flow">
          <div><UsersRound size={16} /><span>Buyers</span></div>
          <span className="hub-card__arrow">↔</span>
          <div><Factory size={16} /><span>Suppliers</span></div>
        </div>
      </motion.div>

      <motion.div className="float-card float-card--one" animate={reduced ? undefined : { y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 5.4, ease: 'easeInOut' }}>
        <PackageCheck size={16} /><div><strong>Packaging</strong><span>Product category</span></div>
      </motion.div>
      <motion.div className="float-card float-card--two" animate={reduced ? undefined : { y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 6.1, ease: 'easeInOut', delay: 0.5 }}>
        <Truck size={16} /><div><strong>Logistics</strong><span>Service network</span></div>
      </motion.div>
      <motion.div className="float-card float-card--three" animate={reduced ? undefined : { y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 5.8, ease: 'easeInOut', delay: 0.8 }}>
        <Boxes size={16} /><div><strong>Trade</strong><span>Business demand</span></div>
      </motion.div>

      <div className="network-visual__footer">
        <span>BUYERS</span><i /><span>DISCOVERY</span><i /><span>SUPPLIERS</span>
      </div>
    </motion.div>
  );
}
