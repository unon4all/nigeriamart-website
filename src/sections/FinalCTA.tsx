import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { BUYER_SURVEY, SUPPLIER_SURVEY } from '../data/content';

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__grid" />
      <div className="shell final-cta__inner">
        <Reveal className="final-cta__copy">
          <span className="final-cta__kicker">THE VISION</span>
          <h2>The future of Nigerian B2B trade should be <em>connected.</em></h2>
          <p>Join us as we build NigeriaMart.</p>
        </Reveal>
        <Reveal delay={0.08} className="final-cta__actions">
          <Button href={BUYER_SURVEY} external variant="primary">Join as Buyer</Button>
          <Button href={SUPPLIER_SURVEY} external variant="secondary">Join as Supplier</Button>
        </Reveal>
      </div>
    </section>
  );
}
