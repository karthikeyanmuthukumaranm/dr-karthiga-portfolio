import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  Leaf,
  Menu,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Quote,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";

const images = {
  hero: "/manus-storage/doctor-portrait_3327fa42.png",
  consultation: "/manus-storage/consultation_226d4a54.png",
  story: "/manus-storage/patient-story_a31cca3b.png",
  care: "/manus-storage/clinic-care_062f70f8.png",
  community: "/manus-storage/care-community_07878a2d.png",
  standing: "/manus-storage/doctor-standing_28dc81f4.jpeg",
  alt: "/manus-storage/doctor-portrait-alt_277e58f1.jpeg",
  logo: "/manus-storage/evk-logo_e9a856d3.jpeg",
};

const navItems = [
  ["About", "about"],
  ["Care philosophy", "philosophy"],
  ["The clinic", "clinic"],
  ["Contact", "contact"],
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = document.getElementById(`reveal-${Math.random()}`);
    return () => void node;
  }, []);
  return (
    <div className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }} ref={(element) => {
      if (!element || visible) return;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      }, { threshold: 0.12 });
      observer.observe(element);
    }}>
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <div className="topline">
        <div className="container top-line-inner">
          <span><span className="live-dot" /> Accepting consultations in Puducherry</span>
          <a href="tel:+919035051692">Appointments: +91 90350 51692 <ArrowUpRight size={13} /></a>
        </div>
      </div>

      <header className="site-nav">
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollTo("top")} aria-label="Back to top">
            <span className="brand-mark logo-crop"><img src={images.logo} alt="EVK Siddha Clinique logo" /></span>
            <span><strong>EVK</strong><small>Siddha Clinique</small></span>
          </button>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}
          </nav>
          <div className="nav-actions">
            <a className="nav-phone" href="tel:+919035051692"><Phone size={15} /> <span>Call clinic</span></a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <MenuIcon />}</button>
          </div>
        </div>
        {menuOpen && <div className="mobile-menu">
          {navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}<ArrowUpRight size={15} /></button>)}
          <a href="tel:+919035051692">Book an appointment <ArrowUpRight size={15} /></a>
        </div>}
      </header>

      <section id="top" className="hero-section">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <Reveal><p className="eyebrow"><span className="eyebrow-line" /> Siddha physician · Puducherry</p></Reveal>
            <Reveal delay={80}><h1>Care rooted in <em>tradition.</em><br />Made personal.</h1></Reveal>
            <Reveal delay={150}><p className="hero-intro">Dr. E. Karthiga brings more than eight years of thoughtful Siddha care to every consultation at EVK Siddha Hospitals.</p></Reveal>
            <Reveal delay={220}><div className="hero-cta-row"><button className="button button-primary" onClick={() => scrollTo("contact")}>Plan a consultation <ArrowUpRight size={16} /></button><button className="text-link" onClick={() => scrollTo("about")}>Meet Dr. Karthiga <ChevronDown size={16} /></button></div></Reveal>
            <Reveal delay={290}><div className="hero-trust"><div className="avatar-stack"><img src={images.consultation} /><img src={images.story} /><img src={images.community} /></div><span>Warm, attentive care<br /><strong>for every stage of life</strong></span></div></Reveal>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><img src={images.hero} alt="Dr. E. Karthiga in a green saree" /><div className="portrait-wash" /></div>
            <div className="hero-badge"><Sparkles size={17} /><span><strong>8+</strong><small>years in practice</small></span></div>
            <div className="hero-caption"><span className="caption-rule" /> <span>Dr. E. Karthiga<br /><i>Founder, EVK Siddha Hospitals</i></span></div>
          </div>
        </div>
        <button className="scroll-cue" onClick={() => scrollTo("about")} aria-label="Scroll to about"><span>Scroll to discover</span><ChevronDown size={16} /></button>
      </section>

      <section id="about" className="intro-section section-pad">
        <div className="container intro-grid">
          <Reveal className="section-kicker"><p className="eyebrow"><span className="eyebrow-line" /> A considered approach</p><span className="section-number">01 / 04</span></Reveal>
          <Reveal delay={80} className="intro-content"><h2>Good medicine listens<br />before it <em>treats.</em></h2><p>At EVK Siddha Hospitals, every patient story starts with time, conversation and a closer look at the whole person. Dr. Karthiga’s practice blends the wisdom of the Siddha system with a calm, contemporary clinical experience.</p><button className="text-link dark-link" onClick={() => scrollTo("philosophy")}>Explore her philosophy <ArrowUpRight size={16} /></button></Reveal>
          <Reveal delay={140} className="intro-art"><div className="ink-orbit"><Leaf size={32} strokeWidth={1.2} /></div><span>Ancient wisdom.<br /><em>Human warmth.</em></span></Reveal>
        </div>
      </section>

      <section id="philosophy" className="philosophy-section section-pad">
        <div className="container">
          <Reveal className="section-heading-row"><div><p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> Care, in her words</p><h2>A gentler way<br />to feel <em>well.</em></h2></div><p className="heading-note">Personalised Siddha care for modern lives — with the patience to understand what makes you, you.</p></Reveal>
          <div className="philosophy-grid">
            <Reveal delay={80} className="statement-card"><span className="quote-mark">“</span><p>Health is not a destination. It is the small, steady relationship we build with our body every day.</p><span className="signature">— Dr. E. Karthiga</span></Reveal>
            <Reveal delay={150} className="principle-list">
              {[['01', 'Listen deeply', 'Every consultation begins with the full story — not just the symptom.'], ['02', 'Treat the whole', 'Siddha care looks at the connection between mind, body, food and rhythm.'], ['03', 'Stay alongside', 'Small, practical changes become meaningful when someone walks with you.']].map(([num, title, body]) => <div className="principle" key={num}><span className="principle-num">{num}</span><div><h3>{title}</h3><p>{body}</p></div><ArrowUpRight size={17} /></div>)}
            </Reveal>
          </div>
        </div>
      </section>

      <section id="clinic" className="clinic-section section-pad">
        <div className="container">
          <Reveal className="section-kicker"><p className="eyebrow"><span className="eyebrow-line" /> Inside the clinic</p><span className="section-number">03 / 04</span></Reveal>
          <Reveal delay={80} className="clinic-heading"><h2>A space for <em>healing</em><br />to feel human.</h2><p>From first hello to follow-up, the clinic is designed around ease, trust and the quiet confidence that you are being heard.</p></Reveal>
          <div className="gallery-grid">
            <Reveal delay={120} className="gallery-main"><img src={images.consultation} alt="Dr. Karthiga consulting with a patient" /><span>Listening is part of the medicine.</span></Reveal>
            <Reveal delay={180} className="gallery-tall"><img src={images.care} alt="EVK Siddha Hospitals clinical care" /><span>Care with clarity.</span></Reveal>
            <Reveal delay={240} className="gallery-small"><img src={images.community} alt="Dr. Karthiga with members of the community" /><span>Rooted in community.</span></Reveal>
            <Reveal delay={300} className="clinic-note"><Leaf size={22} /><p>“A clinic should feel like a place you can exhale.”</p><small>EVK Siddha Clinique, Puducherry</small></Reveal>
          </div>
        </div>
      </section>

      <section className="focus-section section-pad">
        <div className="container focus-grid">
          <Reveal className="focus-copy"><p className="eyebrow"><span className="eyebrow-line" /> Areas of care</p><h2>Traditional knowledge,<br /><em>thoughtfully applied.</em></h2><p>Dr. Karthiga offers personalised guidance through Siddha medicine, women's care and Varma therapy — always grounded in conversation and individual context.</p><button className="button button-outline" onClick={() => scrollTo("contact")}>Ask about your care <ArrowUpRight size={16} /></button></Reveal>
          <Reveal delay={120} className="focus-image"><img src={images.alt} alt="Dr. Karthiga standing in the clinic" /><div className="focus-stamp"><Leaf size={15} /> Siddha care</div></Reveal>
          <Reveal delay={200} className="focus-tags"><span>01</span><div><strong>Siddha medicine</strong><small>Whole-person wellness</small></div><span>02</span><div><strong>Women's care</strong><small>Support through every stage</small></div><span>03</span><div><strong>Varma therapy</strong><small>Traditional point-based care</small></div></Reveal>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="container contact-grid">
          <Reveal className="contact-copy"><p className="eyebrow light-eyebrow"><span className="eyebrow-line" /> Begin with a conversation</p><h2>Your next step<br />can be <em>simple.</em></h2><p>Call the clinic to ask a question or find a time that works for you. We look forward to welcoming you.</p><a className="contact-cta" href="tel:+919035051692"><span className="contact-icon"><Phone size={17} /></span><span><small>Appointments & enquiries</small><strong>+91 90350 51692</strong></span><ArrowUpRight size={20} /></a></Reveal>
          <Reveal delay={120} className="contact-details"><div className="detail"><MapPin size={20} /><div><small>Find us</small><p>Opposite Perumal Kovil<br />Pondicherry Bazaar, Puducherry</p></div></div><div className="detail"><Clock3 size={20} /><div><small>Clinic hours</small><p>Call ahead for current<br />consultation availability</p></div></div><div className="detail"><CalendarDays size={20} /><div><small>Appointment style</small><p>Personal, unhurried<br />and tailored to you</p></div></div></Reveal>
        </div>
      </section>

      <footer className="site-footer"><div className="container footer-inner"><div className="footer-logo-lockup"><img src={images.logo} alt="EVK Siddha Clinique Pondichéry logo" /></div><p>Traditional care for contemporary lives.</p><span>© {new Date().getFullYear()} EVK Siddha Hospitals</span></div></footer>
    </main>
  );
}
