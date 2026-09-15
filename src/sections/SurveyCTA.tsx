import { Boxes, Factory, MessageSquareQuote, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { BUYER_SURVEY, SUPPLIER_SURVEY } from '../data/content';

export function SurveyCTA() {
  return (
    <section id="research" className="section research-section">
      <div className="shell">
        <Reveal className="research-section__intro">
          <div className="eyebrow eyebrow--light"><span className="eyebrow__dot" />Early research</div>
          <h2>Help us build <em>NigeriaMart.</em></h2>
          <p>We're speaking with Nigerian businesses to better understand how buyers discover suppliers and how suppliers find new customers. Your experience can directly influence what we build.</p>
        </Reveal>

        <div className="research-cards">
          <Reveal className="research-card research-card--buyer">
            <div className="research-card__top">
              <span className="research-card__type"><Boxes size={16} /> For buyers</span>
              <span className="research-card__number">01</span>
            </div>
            <h3>Do you regularly source products, materials or services for your business?</h3>
            <p>Tell us how you currently find suppliers, compare options and decide who to contact.</p>
            <div className="research-card__meta"><MessageSquareQuote size={15} /><span>Short research survey</span></div>
            <Button href={BUYER_SURVEY} external variant="dark">Take the Buyer Survey</Button>
          </Reveal>

          <Reveal delay={0.08} className="research-card research-card--supplier">
            <div className="research-card__top">
              <span className="research-card__type"><Factory size={16} /> For suppliers</span>
              <span className="research-card__number">02</span>
            </div>
            <h3>Do you manufacture, distribute or supply products to other businesses?</h3>
            <p>Help us understand how new customers find you, how inquiries are handled and what makes a lead useful.</p>
            <div className="research-card__meta"><ShieldCheck size={15} /><span>Research only — no payment required</span></div>
            <Button href={SUPPLIER_SURVEY} external variant="dark">Take the Supplier Survey</Button>
          </Reveal>
        </div>

        <Reveal className="research-note">
          <span>Why we're asking</span>
          <p>NigeriaMart is in validation, so we would rather learn from real business behavior now than pretend the marketplace already exists at scale.</p>
        </Reveal>
      </div>
    </section>
  );
}
