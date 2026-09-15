import { ArrowUpRight, CircleDot, GitCompareArrows, Search, Waypoints } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const pillars = [
  { icon: Search, title: 'Discover businesses', text: 'Find relevant companies beyond your existing network.' },
  { icon: GitCompareArrows, title: 'Compare suppliers', text: 'Understand capabilities with more structure and clarity.' },
  { icon: Waypoints, title: 'Connect directly', text: 'Move from discovery to a real business conversation.' },
  { icon: CircleDot, title: 'Build relationships', text: 'Create connections that can grow beyond one enquiry.' },
];

export function TrustStrip() {
  return (
    <section className="positioning-strip" aria-label="NigeriaMart positioning">
      <div className="shell">
        <Reveal className="positioning-strip__header">
          <span>Built for Nigerian commerce.</span>
          <a href="#mission">Our mission <ArrowUpRight size={15} /></a>
        </Reveal>
        <div className="positioning-strip__grid">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 0.07} className="positioning-card">
                <div className="positioning-card__icon"><Icon size={18} /></div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
