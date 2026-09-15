import { motion } from 'framer-motion';
import {
  ArrowRight,
  BellRing,
  Check,
  ClipboardList,
  Eye,
  MapPin,
  MessageSquareText,
  Search,
  Store,
  TrendingUp,
} from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { buyerBenefits, supplierBenefits, BUYER_SURVEY, SUPPLIER_SURVEY } from '../data/content';

function CheckList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className={light ? 'benefit-list benefit-list--light' : 'benefit-list'}>
      {items.map((item) => (
        <li key={item}><span><Check size={14} /></span>{item}</li>
      ))}
    </ul>
  );
}

function BuyerDashboard() {
  return (
    <Reveal className="audience-visual buyer-visual">
      <div className="audience-visual__topline">
        <span>BUYER WORKSPACE · CONCEPT</span>
        <div><i /> Discovery active</div>
      </div>
      <div className="buyer-search-card">
        <div className="buyer-search-card__bar"><Search size={17} /><span>Corrugated shipping cartons</span><button type="button">Search</button></div>
        <div className="buyer-search-card__filters"><span>Location: Lagos</span><span>Bulk orders</span><span>Business suppliers</span></div>
      </div>
      <div className="buyer-dashboard__body">
        <div className="buyer-dashboard__shortlist">
          <div className="mini-label">SUPPLIER SHORTLIST</div>
          {[
            ['PP', 'PrimePack Nigeria Ltd', 'Lagos', 'Packaging manufacturer'],
            ['AT', 'Atlas Trade Supply Co.', 'Ogun', 'Industrial distributor'],
            ['BP', 'BridgePoint Packaging', 'Lagos', 'Packaging supplier'],
          ].map(([initials, name, location, type]) => (
            <motion.div key={name} className="mini-supplier" whileHover={{ x: 3 }}>
              <span className="mini-supplier__avatar">{initials}</span>
              <div><strong>{name}</strong><small>{type}</small><em><MapPin size={10} /> {location}</em></div>
              <button type="button" aria-label={`Open ${name}`}><ArrowRight size={14} /></button>
            </motion.div>
          ))}
        </div>
        <div className="buyer-dashboard__request">
          <div className="mini-label">YOUR REQUIREMENT</div>
          <div className="requirement-progress"><span style={{ width: '76%' }} /></div>
          <div className="requirement-row"><ClipboardList size={15} /><div><small>Product</small><strong>Shipping cartons</strong></div></div>
          <div className="requirement-row"><Store size={15} /><div><small>Quantity</small><strong>500 units</strong></div></div>
          <div className="requirement-row"><MapPin size={15} /><div><small>Delivery</small><strong>Ikeja, Lagos</strong></div></div>
          <button className="requirement-action" type="button">Review requirement <ArrowRight size={14} /></button>
        </div>
      </div>
      <div className="audience-visual__note">Illustrative product concept</div>
    </Reveal>
  );
}

function SupplierDashboard() {
  return (
    <Reveal className="audience-visual supplier-visual">
      <div className="audience-visual__topline audience-visual__topline--dark">
        <span>SUPPLIER PROFILE · CONCEPT</span>
        <div><i /> Profile preview</div>
      </div>
      <div className="supplier-profile-head">
        <div className="supplier-profile-head__logo">NM</div>
        <div><span>EXAMPLE BUSINESS</span><h3>Northline Manufacturing</h3><p>Packaging & business supplies · Lagos</p></div>
        <button type="button">Edit profile</button>
      </div>
      <div className="supplier-metrics">
        <div><Eye size={16} /><span>Profile visibility</span><strong>Ready</strong></div>
        <div><MessageSquareText size={16} /><span>Inquiry routing</span><strong>Configured</strong></div>
        <div><BellRing size={16} /><span>Lead alerts</span><strong>Enabled</strong></div>
      </div>
      <div className="supplier-dashboard__lower">
        <div className="supplier-capabilities">
          <div className="mini-label">BUSINESS CAPABILITIES</div>
          {['Corrugated cartons', 'Custom print', 'Bulk packaging', 'Lagos delivery'].map((item) => (
            <span key={item}><Check size={12} /> {item}</span>
          ))}
          <button type="button">View profile <ArrowRight size={14} /></button>
        </div>
        <div className="supplier-inquiry-card">
          <div className="supplier-inquiry-card__top"><TrendingUp size={15} /><span>New business inquiry</span></div>
          <strong>500 shipping cartons</strong>
          <p>Ikeja · Required in 3 weeks</p>
          <div className="supplier-inquiry-card__meta"><span>Relevant category</span><span>New</span></div>
          <button type="button">Review inquiry <ArrowRight size={14} /></button>
        </div>
      </div>
      <div className="audience-visual__note audience-visual__note--dark">Illustrative product concept</div>
    </Reveal>
  );
}

export function BuyerSection() {
  return (
    <section id="buyers" className="section section--white audience-section audience-section--buyer">
      <div className="shell audience-section__layout">
        <div className="audience-copy">
          <Reveal><div className="eyebrow"><span className="eyebrow__dot" />For buyers</div></Reveal>
          <Reveal delay={0.05}><h2>Find the right supplier <em>faster.</em></h2></Reveal>
          <Reveal delay={0.1}><p>NigeriaMart aims to give business buyers a clearer way to move from “I need this” to a relevant shortlist of companies worth speaking with.</p></Reveal>
          <Reveal delay={0.15}><CheckList items={buyerBenefits} /></Reveal>
          <Reveal delay={0.2}><Button href={BUYER_SURVEY} external>I'm a Buyer</Button></Reveal>
        </div>
        <BuyerDashboard />
      </div>
    </section>
  );
}

export function SupplierSection() {
  return (
    <section id="suppliers" className="section section--forest audience-section audience-section--supplier">
      <div className="audience-section__pattern" />
      <div className="shell audience-section__layout audience-section__layout--reverse">
        <SupplierDashboard />
        <div className="audience-copy audience-copy--light">
          <Reveal><div className="eyebrow eyebrow--light"><span className="eyebrow__dot" />For suppliers</div></Reveal>
          <Reveal delay={0.05}><h2>Put your business in front of <em>more buyers.</em></h2></Reveal>
          <Reveal delay={0.1}><p>NigeriaMart is being designed to help manufacturers, wholesalers, distributors and service providers present what they do clearly and receive more relevant business conversations.</p></Reveal>
          <Reveal delay={0.15}><CheckList items={supplierBenefits} light /></Reveal>
          <Reveal delay={0.2}><Button href={SUPPLIER_SURVEY} external variant="primary">I'm a Supplier</Button></Reveal>
        </div>
      </div>
    </section>
  );
}
