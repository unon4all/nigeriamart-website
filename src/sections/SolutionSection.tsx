import { motion } from 'framer-motion';
import { ArrowRight, Check, CircleDot, MessagesSquare, Search, SlidersHorizontal } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { useReducedMotionSafe } from '../hooks/useReducedMotionSafe';

const stages = [
  { label: 'SEARCH', icon: Search, text: 'Start with a product, category or business need.' },
  { label: 'DISCOVER', icon: CircleDot, text: 'Surface businesses with relevant capabilities.' },
  { label: 'COMPARE', icon: SlidersHorizontal, text: 'Review options with more consistent information.' },
  { label: 'CONNECT', icon: MessagesSquare, text: 'Move into a direct, relevant business conversation.' },
  { label: 'TRADE', icon: Check, text: 'Build the relationship and complete business directly.' },
];

export function SolutionSection() {
  const reduced = useReducedMotionSafe();
  return (
    <section className="section section--dark solution-section">
      <div className="solution-section__glow" />
      <div className="shell">
        <SectionHeading
          eyebrow="The NigeriaMart idea"
          title="One marketplace. A connected business ecosystem."
          body="NigeriaMart is being designed to make business discovery structured, transparent and scalable — while keeping the first interaction simple."
          light
          align="center"
        />

        <div className="solution-flow">
          <div className="solution-flow__line" aria-hidden="true">
            <motion.span
              initial={reduced ? false : { scaleX: 0 }}
              whileInView={reduced ? undefined : { scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <Reveal key={stage.label} delay={index * 0.09} className="solution-step">
                <div className="solution-step__top">
                  <span className="solution-step__number">0{index + 1}</span>
                  <div className="solution-step__icon"><Icon size={20} /></div>
                </div>
                <h3>{stage.label}</h3>
                <p>{stage.text}</p>
                {index < stages.length - 1 && <ArrowRight className="solution-step__arrow" size={17} />}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="solution-promise">
          <span className="solution-promise__marker">N</span>
          <p><strong>A smarter discovery layer for business.</strong> Buyers find relevant options. Suppliers become more discoverable. Conversations start with better context.</p>
        </Reveal>
      </div>
    </section>
  );
}
