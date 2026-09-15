import { motion } from 'framer-motion';
import { Globe2, MessageCircle, Search, Store, Users, Share2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { useReducedMotionSafe } from '../hooks/useReducedMotionSafe';

const channels = [
  { icon: MessageCircle, label: 'WhatsApp', x: 50, y: 15 },
  { icon: Globe2, label: 'Directories', x: 23, y: 34 },
  { icon: Users, label: 'Referrals', x: 77, y: 34 },
  { icon: Share2, label: 'Social media', x: 23, y: 70 },
  { icon: Search, label: 'Search engines', x: 77, y: 70 },
  { icon: Store, label: 'Offline markets', x: 50, y: 86 },
];

export function ProblemSection() {
  const reduced = useReducedMotionSafe();
  return (
    <section id="platform" className="section section--light problem-section">
      <div className="shell">
        <div className="problem-section__layout">
          <SectionHeading
            eyebrow="The problem"
            title="Business sourcing shouldn't depend on who you already know."
            body="Nigeria's business ecosystem is active and entrepreneurial, but supplier discovery can still be scattered across conversations, search results, social pages and offline relationships."
          />
          <Reveal delay={0.08} className="fragmentation-visual">
            <div className="fragmentation-visual__caption">TODAY'S DISCOVERY PATH</div>
            <svg className="fragmentation-visual__routes" viewBox="0 0 100 100" aria-hidden="true">
              {channels.map((channel, index) => (
                <motion.line
                  key={channel.label}
                  x1="50"
                  y1="52"
                  x2={channel.x}
                  y2={channel.y}
                  stroke="rgba(8,122,85,.23)"
                  strokeWidth=".45"
                  strokeLinecap="round"
                  initial={reduced ? false : { pathLength: 0 }}
                  whileInView={reduced ? undefined : { pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.06 }}
                />
              ))}
            </svg>
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.label}
                  className="source-chip"
                  style={{ left: `${channel.x}%`, top: `${channel.y}%` }}
                  initial={reduced ? false : { opacity: 0 }}
                  whileInView={reduced ? undefined : { opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.16 + index * 0.055 }}
                >
                  <Icon size={15} /><span>{channel.label}</span>
                </motion.div>
              );
            })}
            <div className="friction-core">
              <span>Fragmented</span>
              <strong>Supplier discovery</strong>
              <small>Information lives everywhere.</small>
            </div>
          </Reveal>
        </div>

        <div className="problem-outcomes">
          {[
            ['01', 'Unclear capabilities', 'A business may be visible without making its B2B capabilities easy to understand.'],
            ['02', 'Slow comparison', 'Different channels and informal quotes make alternatives harder to compare.'],
            ['03', 'Limited reach', 'Good businesses can remain invisible outside familiar networks and local circles.'],
            ['04', 'Trust friction', 'Buyers often need more context before they feel comfortable starting a conversation.'],
          ].map(([number, title, body], index) => (
            <Reveal key={title} delay={index * 0.06} className="problem-outcome">
              <span>{number}</span><div><h3>{title}</h3><p>{body}</p></div>
            </Reveal>
          ))}
        </div>

        <Reveal className="problem-transition">
          <div><span>From scattered discovery</span><ArrowRight size={18} /></div>
          <strong>to one structured business ecosystem.</strong>
        </Reveal>
      </div>
    </section>
  );
}
