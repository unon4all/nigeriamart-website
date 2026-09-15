import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Search,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react';
import { categories, supplierExamples } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { cn } from '../lib/cn';

export function MarketplacePreview() {
  const [selected, setSelected] = useState('Packaging & Printing');
  const visibleCategories = categories.slice(0, 6);

  return (
    <section className="section section--mist marketplace-section">
      <div className="shell">
        <SectionHeading
          eyebrow="Product concept"
          title="A marketplace designed around how businesses actually search."
          body="The interface below is an illustrative preview of the product direction — not a live supplier directory. It shows how discovery, structured capability information and inquiries could work together."
          align="center"
        />

        <Reveal className="browser-shell">
          <div className="browser-shell__chrome">
            <div className="browser-shell__dots"><i /><i /><i /></div>
            <div className="browser-shell__address">nigeriamart / marketplace-concept</div>
            <span className="concept-pill"><Sparkles size={12} /> Illustrative preview</span>
          </div>

          <div className="browser-shell__app">
            <aside className="market-sidebar">
              <div className="market-sidebar__brand">Nigeria<strong>Mart</strong></div>
              <p>Explore categories</p>
              <div className="market-sidebar__categories">
                {visibleCategories.map((category) => {
                  const Icon = category.icon;
                  const active = category.name === selected;
                  return (
                    <button
                      key={category.name}
                      type="button"
                      className={cn('market-category', active && 'market-category--active')}
                      onClick={() => setSelected(category.name)}
                    >
                      <Icon size={16} />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
              <button className="market-sidebar__more" type="button">Explore categories <ArrowRight size={14} /></button>
            </aside>

            <div className="market-main">
              <div className="market-main__top">
                <div>
                  <span className="market-main__kicker">BUSINESS DISCOVERY</span>
                  <h3>Find suppliers for what your business needs.</h3>
                </div>
                <div className="market-main__avatar">NM</div>
              </div>

              <div className="market-search">
                <Search size={20} />
                <span>What are you looking for?</span>
                <button type="button">Search</button>
              </div>

              <div className="market-suggestions">
                <span>Popular:</span>
                {['Corrugated cartons', 'Food packaging', 'Industrial equipment', 'Logistics services'].map((item) => (
                  <button type="button" key={item}>{item}</button>
                ))}
              </div>

              <div className="market-results__header">
                <div><strong>{selected}</strong><span>Illustrative supplier results</span></div>
                <button type="button"><SlidersHorizontal size={14} /> Filters <ChevronDown size={13} /></button>
              </div>

              <div className="market-results">
                {supplierExamples.map((supplier) => (
                  <motion.article
                    key={supplier.name}
                    className="supplier-card"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="supplier-card__brand">{supplier.initials}</div>
                    <div className="supplier-card__content">
                      <div className="supplier-card__heading">
                        <div>
                          <span className="supplier-card__demo">EXAMPLE PROFILE</span>
                          <h4>{supplier.name}</h4>
                        </div>
                        <span className="supplier-card__status"><CheckCircle2 size={13} /> Concept profile</span>
                      </div>
                      <p>{supplier.type}</p>
                      <div className="supplier-card__location"><MapPin size={13} /> {supplier.location}</div>
                      <div className="supplier-card__tags">
                        {supplier.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                    <button className="supplier-card__button" type="button" aria-label={`View illustrative profile for ${supplier.name}`}>
                      View Supplier <ArrowRight size={15} />
                    </button>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="marketplace-note">
          <span>Concept only</span>
          <p>Names and profiles shown here are fictional interface examples. NigeriaMart is currently in research and validation, not operating a public supplier marketplace.</p>
        </div>
      </div>
    </section>
  );
}
