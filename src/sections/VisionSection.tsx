import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { networkCities } from '../data/content';
import { Reveal } from '../components/Reveal';
import { useReducedMotionSafe } from '../hooks/useReducedMotionSafe';

export function VisionSection() {
  const reduced = useReducedMotionSafe();
  return (
    <section className="section vision-section">
      <div className="vision-section__noise" />
      <div className="shell vision-section__layout">
        <div className="vision-copy">
          <Reveal><div className="eyebrow eyebrow--light"><span className="eyebrow__dot" />The network we're building</div></Reveal>
          <Reveal delay={0.06}><h2>Nigeria has millions of businesses.<br /><em>They should be easier to discover.</em></h2></Reveal>
          <Reveal delay={0.12}><p>NigeriaMart's ambition is to build the digital business network that helps buyers and suppliers find each other with less friction — city by city, category by category.</p></Reveal>
          <Reveal delay={0.18} className="vision-disclaimer"><span>Vision, not current coverage</span><p>The city network shown here represents the long-term product ambition. NigeriaMart is still in early validation.</p></Reveal>
        </div>

        <Reveal delay={0.08} className="vision-network">
          <div className="vision-network__label">FUTURE BUSINESS NETWORK</div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="vision-network__lines" aria-hidden="true">
            {networkCities.map((city, index) => {
              const next = networkCities[(index + 2) % networkCities.length];
              return (
                <motion.path
                  key={`${city.name}-${next.name}`}
                  d={`M ${city.x} ${city.y} Q ${(city.x + next.x) / 2} ${(city.y + next.y) / 2 - 8} ${next.x} ${next.y}`}
                  fill="none"
                  stroke="rgba(49,228,148,.26)"
                  strokeWidth=".38"
                  strokeDasharray={index % 2 ? '2 2' : undefined}
                  initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                  whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: index * 0.07 }}
                />
              );
            })}
          </svg>
          {networkCities.map((city, index) => (
            <motion.div
              key={city.name}
              className="vision-city"
              style={{ left: `${city.x}%`, top: `${city.y}%` }}
              initial={reduced ? false : { opacity: 0, scale: 0.75 }}
              whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 + index * 0.06 }}
            >
              <span><MapPin size={11} /></span><strong>{city.name}</strong>
            </motion.div>
          ))}
          <div className="vision-network__hub"><span>N</span><strong>NigeriaMart</strong><small>Business connection layer</small></div>
        </Reveal>
      </div>
    </section>
  );
}
