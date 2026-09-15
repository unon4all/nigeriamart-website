import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { workflow } from '../data/content';
import { useReducedMotionSafe } from '../hooks/useReducedMotionSafe';

export function HowItWorks() {
  const reduced = useReducedMotionSafe();
  return (
    <section id="how-it-works" className="section section--light how-section">
      <div className="shell">
        <SectionHeading
          eyebrow="How NigeriaMart works"
          title="A simpler path from business need to business connection."
          body="The experience is designed around a straightforward sequence: discover, evaluate, connect and build."
        />
        <div className="how-rail">
          <div className="how-rail__track" aria-hidden="true">
            <motion.span
              initial={reduced ? false : { scaleX: 0 }}
              whileInView={reduced ? undefined : { scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          {workflow.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08} className="how-step">
              <div className="how-step__number">{step.number}</div>
              <span className="how-step__dot" />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {index < workflow.length - 1 && <ArrowRight className="how-step__arrow" size={16} />}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
