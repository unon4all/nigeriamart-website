import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { Brand } from '../components/Brand';

const WHATSAPP_URL = "https://wa.me/919305243422?text=Hello%20NigeriaMart%2C%20I%27d%20like%20to%20get%20in%20touch.";
const EMAIL = 'martfornigeria@gmail.com';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Brand light />
            <p>Connecting Nigerian businesses to opportunity.</p>
          </div>
          <div className="site-footer__links">
            <div>
              <span>Explore</span>
              <a href="#platform">Platform</a>
              <a href="#buyers">Buyers</a>
              <a href="#suppliers">Suppliers</a>
              <a href="#mission">Mission</a>
            </div>
            <div>
              <span>Contact</span>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Contact NigeriaMart on WhatsApp Business">
                <MessageCircle size={13} /> WhatsApp · +91 93052 43422 <ArrowUpRight size={12} />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email NigeriaMart">
                <Mail size={13} /> {EMAIL}
              </a>
            </div>
            <div>
              <span>Company</span>
              <a href="/nigeriamart-website/privacy.html">Privacy</a>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© <span id="current-year">{new Date().getFullYear()}</span> NigeriaMart</span>
          <span>Building Nigeria's next-generation B2B marketplace.</span>
          <span className="site-footer__status"><i /> Early-stage project</span>
        </div>
      </div>
    </footer>
  );
}
