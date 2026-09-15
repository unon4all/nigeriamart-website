import { ArrowDownRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export function MissionSection() {
  return (
    <section id="mission" className="section mission-section">
      <div className="shell mission-section__grid">
        <Reveal className="mission-section__label">
          <span>Our mission</span>
          <ArrowDownRight size={20} />
        </Reveal>
        <div className="mission-section__statement">
          <Reveal><h2>Make discovering reliable businesses in Nigeria as easy as <em>searching the internet.</em></h2></Reveal>
          <Reveal delay={0.08}><p>By organizing business information and supplier discovery, NigeriaMart aims to create more opportunities for businesses to find customers, suppliers and partners.</p></Reveal>
        </div>
      </div>
    </section>
  );
}
