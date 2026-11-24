import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Package,
  Phone,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const images = {
  hero: "/images/dr-karthiga-hero-portrait.jpg",
  consultation: "/images/consultation.png",
  story: "/images/patient-story.png",
  care: "/images/clinic-care.png",
  community: "/images/care-community.png",
  standing: "/images/doctor-standing.jpeg",
  alt: "/images/dr-karthiga-hero-portrait.jpg",
  logo: "/images/evk-logo.jpeg",
  francePlaceVendome: "/images/france-paris-place-vendome.jpg",
  franceEiffelPortrait: "/images/france-eiffel-tower-portrait.jpg",
  franceEiffelNight: "/images/france-eiffel-tower-night.jpg",
  franceMap: "/images/france-map-infographic.jpg",
  awardLeader: "/images/award-innovative-leader.jpg",
  awardSparks: "/images/award-stage-sparks.jpg",
  awardPresentation: "/images/award-presentation.jpg",
  awardWalk: "/images/award-stage-walk.jpg",
  historyRating: "/images/evk-history-rating.png",
};

interface GalleryItem {
  id: string;
  category: "france" | "awards" | "clinic";
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  alt: string;
  badge: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "award-1",
    category: "awards",
    categoryLabel: "Awards & Honors",
    title: "Innovative Healthcare Leader Award",
    subtitle: "S.K.I.N. Awards 2026 · Puducherry",
    description: "Dr. E. Karthiga presented with the prestigious Innovative Healthcare Leader award trophy and Certificate of Achievement by S.K.I.N. Forum (ISO 9001:2015 Certified).",
    src: images.awardLeader,
    alt: "Dr. Karthiga holding S.K.I.N. Awards 2026 trophy and Certificate of Achievement",
    badge: "Awardee 2026",
  },
  {
    id: "award-2",
    category: "awards",
    categoryLabel: "Awards & Honors",
    title: "Grand Stage Felicitation",
    subtitle: "Excellence in Innovation & Leadership",
    description: "Celebrating landmark achievements in traditional Siddha medical practice on the grand stage with fireworks and esteemed medical dignitaries.",
    src: images.awardSparks,
    alt: "Grand celebration stage at S.K.I.N. Awards 2026",
    badge: "Grand Stage",
  },
  {
    id: "award-3",
    category: "awards",
    categoryLabel: "Awards & Honors",
    title: "Presentation with Medical Dignitaries",
    subtitle: "S.K.I.N. Healthcare Summit 2026",
    description: "Honoured by healthcare forum directors, scholars, and medical panel delegates in recognition of dedicated clinical service.",
    src: images.awardPresentation,
    alt: "Award presentation to Dr. Karthiga on stage with dignitaries",
    badge: "Felicitation",
  },
  {
    id: "award-4",
    category: "awards",
    categoryLabel: "Awards & Honors",
    title: "Service Excellence & Leadership",
    subtitle: "A Pillar in Siddha Medicine",
    description: "Dr. Karthiga walking the stage with the trophy and certificate, celebrating a decade of clinic excellence and 15+ years in practice.",
    src: images.awardWalk,
    alt: "Dr. Karthiga walking on stage holding the trophy",
    badge: "Milestone",
  },
  {
    id: "france-1",
    category: "france",
    categoryLabel: "France Trip",
    title: "Ministère de la Justice & Place Vendôme",
    subtitle: "Paris, France",
    description: "Dr. Karthiga at historic Place Vendôme in Paris, exploring classical French architecture, history, and international perspectives.",
    src: images.francePlaceVendome,
    alt: "Dr. Karthiga at Place Vendôme, Paris, France",
    badge: "Paris, France",
  },
  {
    id: "france-2",
    category: "france",
    categoryLabel: "France Trip",
    title: "Evening by the Eiffel Tower",
    subtitle: "Paris, France",
    description: "Capturing memorable moments by the illuminated Eiffel Tower at night at Champ de Mars.",
    src: images.franceEiffelPortrait,
    alt: "Dr. Karthiga at the illuminated Eiffel Tower in Paris",
    badge: "Eiffel Tower",
  },
  {
    id: "france-3",
    category: "france",
    categoryLabel: "France Trip",
    title: "Eiffel Tower Night Illumination",
    subtitle: "Paris, France",
    description: "The iconic beacon light of the Eiffel Tower stretching across the Parisian night sky over the Seine river.",
    src: images.franceEiffelNight,
    alt: "Night illumination of the Eiffel Tower with beacon light",
    badge: "Paris Night",
  },
  {
    id: "france-4",
    category: "france",
    categoryLabel: "France Trip",
    title: "France — Heart of Western Europe",
    subtitle: "Cultural Journey & Exploration",
    description: "Exploring France's rich heritage, art, culture, and iconic landmarks across the country.",
    src: images.franceMap,
    alt: "France cultural map and iconic travel landmarks",
    badge: "Heritage Map",
  },
  {
    id: "clinic-1",
    category: "clinic",
    categoryLabel: "Clinic Life",
    title: "Listening is Part of the Medicine",
    subtitle: "EVK Siddha Clinique · Pondicherry",
    description: "Comprehensive pulse diagnosis (Nadi) and unhurried patient consultations in Heritage Town, opposite Vardaraja Perumal Kovil.",
    src: images.consultation,
    alt: "Dr. Karthiga consulting with a patient",
    badge: "Consultation",
  },
  {
    id: "clinic-2",
    category: "clinic",
    categoryLabel: "Clinic Life",
    title: "Care with Clarity",
    subtitle: "Clinical Environment",
    description: "A calm, reassuring healing atmosphere designed for unhurried conversations and holistic herbal treatment.",
    src: images.care,
    alt: "EVK Siddha Hospitals clinical care",
    badge: "Clinical Care",
  },
  {
    id: "clinic-3",
    category: "clinic",
    categoryLabel: "Clinic Life",
    title: "Rooted in Community",
    subtitle: "Community Wellness",
    description: "Deep ties to the local community, promoting authentic Siddha wellness across generations in Pondicherry.",
    src: images.community,
    alt: "Dr. Karthiga with members of the community",
    badge: "Community",
  },
];

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  category: "all" | "women" | "pain" | "skin" | "postal";
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "rev-1",
    name: "Senthil Nathan K.",
    location: "Heritage Town, Pondicherry",
    rating: 5,
    treatment: "Chronic Joint Stiffness & Lumbar Pain",
    category: "pain",
    quote:
      "I suffered from severe joint stiffness and lower back pain for over 2 years. Dr. Karthiga listened patiently to my full history and diagnosed the root cause through pulse diagnosis (Nadi). With her authentic herbal oils and Varma therapies, the stiffness completely vanished within 6 weeks. Truly the best Siddha clinic in Pondicherry!",
  },
  {
    id: "rev-2",
    name: "Revathi Sundaram",
    location: "Chennai (Postal Medicine Patient)",
    rating: 5,
    treatment: "PCOD & Hormonal Balance",
    category: "women",
    quote:
      "Finding a female Siddha physician who genuinely understands women's healthcare was a true blessing. I ordered the specialized women's herbal formulation by post to Chennai. My cycles regularized naturally without any hormonal side effects, and my energy returned. The courier tracking was prompt and reliable.",
  },
  {
    id: "rev-3",
    name: "M. Anbazhagan",
    location: "M.G. Road, Pondicherry",
    rating: 5,
    treatment: "Psoriasis & Chronic Skin Allergies",
    category: "skin",
    quote:
      "After trying countless treatments with only temporary relief, EVK Siddha Clinique provided a permanent solution. Dr. Karthiga's exclusive herbal face and skin formulation restored healthy skin within two months. Her clinic opposite Vardaraja Perumal Kovil is clean, peaceful, and deeply welcoming.",
  },
  {
    id: "rev-4",
    name: "Dr. Priya Ramanathan",
    location: "Puducherry",
    rating: 5,
    treatment: "Allergic Sinusitis & Daily Immunity",
    category: "all",
    quote:
      "Dr. Karthiga combines ancient classical Siddha texts with acute diagnostic clarity. The Mooligai Kudineer decoction has become a morning essential for our whole family—no recurring seasonal colds or sinus headaches for months. A true 5-star clinic with genuine dedication.",
  },
  {
    id: "rev-5",
    name: "K. Vijayakumar",
    location: "Villupuram",
    rating: 5,
    treatment: "Gastritis & Digestive Imbalance",
    category: "all",
    quote:
      "The clinic's atmosphere is calm and reassuring, conveniently situated right opposite Vardaraja Perumal Kovil. Dr. Karthiga does not rush; she explained dietary rhythms according to Siddha humors (Vatham, Pitham, Kapham). My chronic acid reflux healed without heavy chemical drugs.",
  },
  {
    id: "rev-6",
    name: "Lakshmi Narayanan",
    location: "Bengaluru (Postal Patient)",
    rating: 5,
    treatment: "Arthritis & Postal Delivery",
    category: "postal",
    quote:
      "I consult Dr. Karthiga remotely via call and WhatsApp and receive herbal parcels by Speed Post to Bangalore within 2 business days. The personalized dosage advice and compassionate care she extends even over distance is unmatched. A well-deserved 5.0 star rating!",
  },
];

const navItems = [
  ["About & History", "about"],
  ["Thirukkural", "kural"],
  ["Philosophy", "philosophy"],
  ["The Clinic", "clinic"],
  ["Medicines", "medicines"],
  ["Women's Care", "focus"],
  ["Reviews (5.0★)", "testimonials"],
  ["Gallery", "gallery"],
  ["Contact", "contact"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState<"france" | "awards" | "clinic" | "all">("awards");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [testimonialCategory, setTestimonialCategory] = useState<"all" | "women" | "pain" | "skin" | "postal">("all");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const filteredGallery =
    galleryCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === galleryCategory);

  const filteredTestimonials =
    testimonialCategory === "all"
      ? testimonials
      : testimonials.filter((item) => item.category === testimonialCategory || item.category === "all");

  const openLightbox = (item: GalleryItem) => {
    const index = filteredGallery.findIndex((i) => i.id === item.id);
    if (index !== -1) setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, filteredGallery.length]);

  return (
    <main className="site-shell">
      {/* Topline Bar */}
      <div className="topline">
        <div className="container top-line-inner">
          <div className="topline-badge">
            <span className="live-dot" />
            <span>Consultations & Doorstep Postal Delivery Across India</span>
          </div>

          <div className="topline-address-snippet">
            <MapPin size={13} />
            <span>No. 57, Opp. Vardaraja Perumal Kovil, M.G. Road, Pondicherry - 605001</span>
          </div>

          <div className="topline-actions">
            <a className="flash-pill" href="tel:+916374514716">
              <Sparkles size={12} />
              <span>Book Appointment: +91 6374514716</span>
            </a>
            <a className="topline-email" href="mailto:evkpondicherry@gmail.com">
              <Mail size={12} /> evkpondicherry@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className={`site-nav ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-inner">
          {/* Brand Logo & Name */}
          <button className="brand" onClick={() => scrollTo("top")} aria-label="Back to top">
            <img
              src={images.logo}
              alt="EVK Siddha Clinique Official Emblem"
              className="brand-logo-img"
            />
            <div className="brand-text-wrap">
              <span className="brand-name">EVK SIDDHA CLINIQUE</span>
              <div className="brand-sub">
                <span className="brand-tamil">சித்த மருத்துவ மனை</span>
                <span className="brand-sep">·</span>
                <span className="brand-slogan">Traditionally Redefining</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={id === "testimonials" ? "is-special" : ""}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="nav-actions">
            <a className="nav-phone-pill" href="tel:+916374514716">
              <Phone size={14} /> <span>+91 6374514716</span>
            </a>
            <button className="nav-book-btn" onClick={() => scrollTo("contact")}>
              <CalendarDays size={14} /> <span>Book Visit</span>
            </button>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="mobile-menu-header">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={images.logo} alt="EVK Logo" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
                  <div>
                    <strong style={{ display: "block", fontSize: "14px", color: "#1b3c34" }}>EVK SIDDHA CLINIQUE</strong>
                    <span style={{ fontSize: "10px", color: "#5d7367" }}>சித்த மருத்துவ மனை</span>
                  </div>
                </div>
                <button
                  style={{ border: 0, background: "none", color: "#1b3c34", padding: "6px" }}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="mobile-menu-links">
                {navItems.map(([label, id]) => (
                  <button
                    key={id}
                    className="mobile-nav-link"
                    onClick={() => scrollTo(id)}
                  >
                    <span>{label}</span>
                    <ArrowUpRight size={15} />
                  </button>
                ))}
              </div>

              <div className="mobile-menu-footer">
                <a className="mobile-contact-pill phone" href="tel:+916374514716">
                  <Phone size={15} /> <span>Call: +91 6374514716</span>
                </a>
                <a
                  className="mobile-contact-pill whatsapp"
                  href="https://wa.me/916374514716?text=Hello%20Dr.%20Karthiga,%20I%20would%20like%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={15} /> <span>WhatsApp Consult</span>
                </a>
                <p className="mobile-address-preview">
                  📍 No. 57, Opposite Vardaraja Perumal Kovil, M.G. Road, Pondicherry - 605001
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="top" className="hero-section">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">
              <span className="eyebrow-line" /> Siddha Physician · Puducherry | சித்த மருத்துவ மனை
            </p>
            <h1>
              Care rooted in <em>tradition.</em>
              <br />
              Traditionally Redefining.
            </h1>
            <p className="hero-intro">
              <strong>Dr. E. Karthiga, BSMS</strong> brings over <strong>15+ years of clinical excellence</strong> and holistic healing to EVK Siddha Clinique (சித்த மருத்துவ மனை), blending sacred classical Siddha wisdom with compassionate individual care.
            </p>

            <div className="hero-cta-row">
              <button className="button button-primary" onClick={() => scrollTo("contact")}>
                Book Consultation <ArrowUpRight size={16} />
              </button>
              <button className="button button-outline" onClick={() => scrollTo("medicines")}>
                Order Medicines by Post <Package size={16} />
              </button>
              <button className="text-link" onClick={() => scrollTo("gallery")}>
                Awards & France Gallery <ChevronDown size={16} />
              </button>
            </div>

            {/* Google Rating & Trust Box */}
            <div className="hero-trust-box">
              <div className="hero-trust-rating">
                <div className="star-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#e6a817" stroke="#e6a817" />
                  ))}
                </div>
                <span className="star-count-text">5.0 Star Rating</span>
                <span className="star-sub-text">Based on 36+ verified reviews</span>
              </div>
              <div className="hero-trust-text">
                <strong>EVK Siddha Clinique</strong> · Established 2015
                <br />
                Opp. Vardaraja Perumal Kovil, M.G. Road, Pondicherry
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="portrait-frame">
              <img src={images.hero} alt="Dr. E. Karthiga - Founder, EVK Siddha Clinique" />
            </div>

            {/* Floating Experience Badge */}
            <div className="hero-floating-badge">
              <Sparkles size={18} color="#789635" />
              <div>
                <strong style={{ display: "block", fontSize: "18px", color: "#1b3c34", lineHeight: 1 }}>15+</strong>
                <span style={{ fontSize: "10px", color: "#667a6e", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Years Practice
                </span>
              </div>
            </div>

            {/* Floating Award Badge */}
            <div className="hero-floating-badge award">
              <Award size={18} color="#acd733" />
              <div>
                <strong style={{ display: "block", fontSize: "14px", color: "#ffffff", lineHeight: 1 }}>S.K.I.N. Awards 2026</strong>
                <span style={{ fontSize: "10px", color: "#d2e9cb" }}>
                  Innovative Healthcare Leader
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 01: About Dr. Karthiga & History and Commitment (NEW USER CONTENT) */}
      <section id="about" className="about-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 01 / 08 · About EVK Siddha Clinique
            </p>
            <span className="section-number">ESTABLISHED 2015</span>
          </div>

          <div className="about-intro-grid">
            <div className="about-intro-content">
              <h2>
                Good medicine listens
                <br />
                before it <em>treats.</em>
              </h2>
              <p>
                With over <strong>15+ years of dedicated clinical experience</strong> for Dr. E. Karthiga, BSMS, every consultation begins with attentive listening, comprehensive pulse diagnosis (நாடிப் பரிசோதனை), and deep understanding of the individual constitution.
              </p>
              <p>
                EVK Siddha Clinique integrates the ancient medical lineage of the 18 Siddhars with a modern, calm, and welcoming healthcare setting in Pondicherry. Patients receive authentic, pure herbal remedies without chemical additives, tailored specifically to restore the body’s innate equilibrium.
              </p>
              <button className="button button-outline" onClick={() => scrollTo("kural")}>
                Our Thirukkural Diagnostic Philosophy <ArrowUpRight size={15} />
              </button>
            </div>

            <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden", boxShadow: "0 10px 28px rgba(27,60,52,0.12)" }}>
              <img
                src={images.consultation}
                alt="Dr. E. Karthiga consulting patient at EVK Siddha Clinique"
                style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "360px" }}
              />
              <div style={{ position: "absolute", bottom: 0, insetInline: 0, background: "linear-gradient(0deg, rgba(20,44,38,0.88), transparent)", padding: "20px", color: "#fff" }}>
                <strong style={{ display: "block", fontSize: "16px" }}>Pulse Diagnosis (Nadi) & Consultation</strong>
                <span style={{ fontSize: "12px", color: "#cde3d5" }}>EVK Siddha Clinique · Heritage Town, Pondicherry</span>
              </div>
            </div>
          </div>

          {/* History and Commitment Showcase Card (From User Screenshot) */}
          <div className="history-commitment-card">
            <div className="history-card-header">
              <span className="history-card-badge">
                <Leaf size={14} /> Official Clinic Record & Heritage
              </span>
              <span className="history-rating-pill">
                <Star size={14} fill="#8c5700" stroke="#8c5700" />
                <span>5.0 Stars · 36 Reviews</span>
              </span>
            </div>

            <h3 className="history-title">History and Commitment</h3>
            <p className="history-quote-text">
              “Evk Siddha Clinique has been a pillar in the Siddha Clinics sector for many years. Established in 2015, the clinic caters to a wide range of medical needs. With a rating of 5.0 stars based on 36 reviews, the clinic is conveniently located near Opposite Vardaraja Perumal Kovil, ensuring easy access for patients and saving them valuable time and effort.”
            </p>

            <div className="history-metrics-grid">
              <div className="metric-item">
                <span className="metric-val">2015</span>
                <span className="metric-label">Year Established in Pondicherry</span>
              </div>
              <div className="metric-item">
                <span className="metric-val">5.0 ★</span>
                <span className="metric-label">Rating Based on 36 Reviews</span>
              </div>
              <div className="metric-item">
                <span className="metric-val">15+ Yrs</span>
                <span className="metric-label">Clinical Excellence by Dr. Karthiga</span>
              </div>
              <div className="metric-item">
                <span className="metric-val">No. 57</span>
                <span className="metric-label">Opp. Vardaraja Perumal Kovil, M.G. Road</span>
              </div>
            </div>
          </div>

          {/* S.K.I.N. Awards 2026 Spotlight Box (From User Award Photos) */}
          <div className="award-spotlight-card">
            <div className="award-spotlight-photo">
              <img
                src={images.awardLeader}
                alt="Dr. E. Karthiga with S.K.I.N. Awards 2026 Trophy & Certificate"
              />
            </div>
            <div>
              <span className="award-spotlight-badge">
                <Award size={13} /> S.K.I.N. Awards 2026 Awardee
              </span>
              <h3 className="award-spotlight-title">
                Innovative Healthcare Leader Award
              </h3>
              <p className="award-spotlight-org">
                Presented to <strong>Dr. E. Karthiga (EVK Siddha Clinique)</strong> in recognition of outstanding clinical innovation, compassionate leadership, and dedicated community wellness in traditional Siddha healthcare.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", fontSize: "12px", color: "#bcd9c6" }}>
                <span>✓ S.K.I.N. Forum (ISO 9001:2015 Certified)</span>
                <span>✓ Celebrated on Grand Stage with Dignitaries</span>
              </div>
              <button
                className="button button-outline"
                style={{ marginTop: "20px", background: "rgba(255,255,255,0.1)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}
                onClick={() => scrollTo("gallery")}
              >
                View Award Ceremony Gallery <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Thirukkural Diagnostic Philosophy */}
      <section id="kural" className="kural-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow" style={{ color: "#c4ddcf" }}>
              <span className="eyebrow-line" /> 02 / 08 · Core Diagnostic Philosophy
            </p>
            <span className="section-number" style={{ color: "#a1bcad" }}>திருக்குறள் வழியில்</span>
          </div>

          <div className="section-heading-row">
            <div>
              <h2>
                Root-cause healing,
                <br />
                guided by <em>Thirukkural.</em>
              </h2>
            </div>
            <p className="heading-note">
              Authentic Siddha cure comes from identifying the foundational source of imbalance rather than temporarily subduing symptoms.
            </p>
          </div>

          <div className="kural-card">
            <span className="kural-badge">
              <Sparkles size={13} /> திருக்குறள் · குறள் 948 (மருந்து அதிகாரம்)
            </span>
            <div className="kural-tamil-text">
              “நோய்நாடி நோய்முதல் நாடி அதுதணிக்கும்
              <br />
              வாய்நாடி வாய்ப்பச் செயல்.”
            </div>
            <p className="kural-english-translation">
              “Diagnose the illness, identify its primary root cause, determine the exact remedy to alleviate it, and apply it with flawless precision.”
            </p>
            <p className="kural-explanation">
              At EVK Siddha Clinique, this sacred Thirukkural serves as our guiding beacon. Through comprehensive pulse diagnosis (நாடிப் பரிசோதனை), environmental understanding, dietary rhythms, and classical botanical formulations, we focus on curing the ailment at its very source.
            </p>
          </div>
        </div>
      </section>

      {/* Section 03: Care Philosophy */}
      <section id="philosophy" className="philosophy-section section-pad">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow" style={{ color: "#b9d4c4" }}>
                <span className="eyebrow-line" /> 03 / 08 · Care, in Her Words
              </p>
              <h2 style={{ color: "#ffffff" }}>
                A gentler way
                <br />
                to feel <em>well.</em>
              </h2>
            </div>
            <p className="heading-note">
              Personalized Siddha care for modern lives — with the patience to understand what makes you, you.
            </p>
          </div>

          <div className="philosophy-grid">
            <div className="statement-card">
              <span className="quote-mark">“</span>
              <p>
                Health is not a destination. It is the small, steady relationship we build with our body every day.
              </p>
              <span className="signature">— Dr. E. Karthiga, BSMS · Founder, EVK Siddha Clinique</span>
            </div>

            <div className="principle-list">
              {[
                ["01", "Listen deeply", "Every consultation begins with the patient’s full story — not just isolated symptoms."],
                ["02", "Treat the root cause", "Siddha care restores equilibrium across mind, body humors (Tridosha), and dietary habits."],
                ["03", "Stay alongside", "Consistent, guided lifestyle changes become meaningful when a compassionate physician walks alongside you."],
              ].map(([num, title, body]) => (
                <div className="principle" key={num}>
                  <span className="principle-num">{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                  <ArrowUpRight size={17} color="#acd733" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Inside the Clinic */}
      <section id="clinic" className="clinic-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 04 / 08 · Inside EVK Siddha Clinique
            </p>
            <span className="section-number">HERITAGE TOWN</span>
          </div>

          <div className="clinic-heading">
            <h2>
              A space for <em>healing</em>
              <br />
              to feel human.
            </h2>
            <p>
              Conveniently located at <strong>No. 57, Opposite Vardaraja Perumal Kovil, M.G. Road, Pondicherry</strong>, our clinic welcomes patients with calm confidence, genuine listening, and meticulous herbal care.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-main">
              <img src={images.consultation} alt="Dr. Karthiga consulting with a patient" />
              <span>Listening is part of the medicine.</span>
            </div>
            <div>
              <img src={images.care} alt="EVK Siddha Clinique clinical care" />
              <span>Care with clarity and gentle presence.</span>
            </div>
            <div>
              <img src={images.community} alt="Dr. Karthiga with members of the community" />
              <span>Rooted in community service since 2015.</span>
            </div>
            <div className="clinic-note">
              <Leaf size={24} />
              <p>“A clinic should feel like a place you can exhale.”</p>
              <small>EVK Siddha Clinique · Opp. Vardaraja Perumal Kovil, M.G. Road, Pondicherry-605001</small>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Medicines & Postal Delivery (With Updated Address) */}
      <section id="medicines" className="medicines-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 05 / 08 · Exclusive Herbal Formulations · மூலிகை மருந்துகள்
            </p>
            <span className="section-number">DOORSTEP DELIVERY</span>
          </div>

          <div className="section-heading-row">
            <div>
              <h2>
                Authentic remedies,
                <br />
                <em>naturally prepared.</em>
              </h2>
            </div>
            <p className="heading-note">
              Pure botanical preparations formulated under Dr. Karthiga's direct supervision using authentic Siddha scriptures. Available at our clinic or delivered to your doorstep by post across India.
            </p>
          </div>

          {/* 3 Formulations Grid */}
          <div className="products-grid">
            {/* Product 1: Mooligai Kudineer */}
            <div className="product-card">
              <div>
                <span className="product-badge">Daily Wellness & Immunity</span>
                <span className="product-tamil-name">மூலிகை குடிநீர்</span>
                <h3>Mooligai Kudineer</h3>
                <p>
                  A revitalizing herbal decoction designed for daily consumption. Crafted from hand-selected immunity-boosting and detoxifying herbs, it balances the three bodily humors (Vatham, Pitham, Kapham), clears respiratory congestion, and rejuvenates overall vitality.
                </p>
                <ul className="product-highlights">
                  <li><CheckCircle2 size={14} /> Brewed simply and enjoyably like daily tea</li>
                  <li><CheckCircle2 size={14} /> Natural immunity builder & digestive tonic</li>
                  <li><CheckCircle2 size={14} /> 100% pure herbal formulation with zero chemicals</li>
                </ul>
              </div>
              <a className="product-order-btn" href="tel:+916374514716">
                Order by Post / Phone <ArrowRight size={13} />
              </a>
            </div>

            {/* Product 2: Natural Face & Beauty Care */}
            <div className="product-card">
              <div>
                <span className="product-badge exclusive">Exclusive Formulation · Sold Only By Us</span>
                <span className="product-tamil-name">இயற்கை முக அழகு பராமரிப்பு</span>
                <h3>Natural Face & Beauty Care</h3>
                <p>
                  Our proprietary beauty care formulation, prepared purely with natural herbs and botanical essences. Specially compounded in-house and sold exclusively by EVK Siddha Clinique to restore radiant skin health, treat pigmentation, soften blemishes, and nurture youthful glow without synthetic chemicals.
                </p>
                <ul className="product-highlights">
                  <li><CheckCircle2 size={14} /> Prepared exclusively and sold only by EVK Siddha Clinique</li>
                  <li><CheckCircle2 size={14} /> Nourishes skin tone, clarifies complexion, and reduces spots</li>
                  <li><CheckCircle2 size={14} /> Completely free from chemical fragrances or parabens</li>
                </ul>
              </div>
              <a className="product-order-btn" href="tel:+916374514716">
                Order by Post / Phone <ArrowRight size={13} />
              </a>
            </div>

            {/* Product 3: Intake Healthcare for Women */}
            <div className="product-card">
              <div>
                <span className="product-badge women">Specialized Women's Health</span>
                <span className="product-tamil-name">பெண்களுக்கான பிரத்யேக மூலிகை மருந்து</span>
                <h3>Intake Healthcare for Women</h3>
                <p>
                  A therapeutic internal herbal formulation formulated specifically for women of all age groups. It supports hormonal harmony, uterine wellness, menstrual regularity, relief from cramps and PCOD/PCOS symptoms, postpartum strength, and emotional vitality.
                </p>
                <ul className="product-highlights">
                  <li><CheckCircle2 size={14} /> Balances hormones & supports reproductive wellness</li>
                  <li><CheckCircle2 size={14} /> Strengthens energy, relieves fatigue & calms mind</li>
                  <li><CheckCircle2 size={14} /> Formulated with authentic classical medicinal roots</li>
                </ul>
              </div>
              <a className="product-order-btn" href="tel:+916374514716">
                Order by Post / Phone <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Postal Box with Updated Address */}
          <div className="postal-box">
            <div className="postal-content">
              <span className="postal-badge">
                <Package size={14} /> Doorstep Courier & Postal Delivery
              </span>
              <h3>How to Receive Medicines by Post</h3>
              <p>
                Wherever you reside in India or abroad, our authentic medicines can be prepared and dispatched directly to your address via registered Speed Post or express courier with live tracking.
              </p>
              <div className="postal-steps">
                <div className="postal-step">
                  <span className="postal-step-num">1</span>
                  <span><strong>Call or WhatsApp:</strong> Connect with us at <strong>+91 6374514716</strong> or email <strong>evkpondicherry@gmail.com</strong> with your symptoms or prescription requirements.</span>
                </div>
                <div className="postal-step">
                  <span className="postal-step-num">2</span>
                  <span><strong>Doctor's Review:</strong> Dr. Karthiga reviews your condition and prepares customized, freshly compounded herbal medicines with precise dosage instructions.</span>
                </div>
                <div className="postal-step">
                  <span className="postal-step-num">3</span>
                  <span><strong>Direct Dispatch:</strong> Parcels are securely packaged and dispatched via Speed Post / Courier with live tracking shared directly to your mobile phone.</span>
                </div>
              </div>
            </div>

            <div className="postal-address-card">
              <strong>Postal & Clinic Dispatch Address:</strong>
              <div className="postal-address-text">
                <p style={{ margin: "0 0 6px", fontWeight: "700", color: "#ffffff", fontSize: "15px" }}>
                  EVK Siddha Clinique
                </p>
                <p style={{ margin: 0 }}>
                  No. 57, Opposite Vardaraja Perumal Kovil,
                  <br />
                  M.G. Road,
                  <br />
                  Pondicherry - 605001.
                </p>
              </div>
              <div className="postal-action-links">
                <a href="tel:+916374514716">
                  <Phone size={14} /> Call: +91 6374514716
                </a>
                <a href="mailto:evkpondicherry@gmail.com">
                  <Mail size={14} /> Email: evkpondicherry@gmail.com
                </a>
                <a
                  href="https://maps.google.com/?q=EVK+Siddha+Clinique+No+57+Opposite+Vardaraja+Perumal+Kovil+MG+Road+Pondicherry+605001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={14} /> Open Location on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06: Areas of Specialization & Women's Care */}
      <section id="focus" className="focus-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 06 / 08 · Specialized Healthcare
            </p>
            <span className="section-number">WOMEN'S CARE & VARMA</span>
          </div>

          <div className="focus-grid">
            <div className="focus-copy">
              <h2>
                Traditional knowledge,
                <br />
                <em>thoughtfully applied.</em>
              </h2>
              <p>
                Dr. Karthiga offers personalized guidance through Siddha internal medicine, specialized women's healthcare, and classical Varma therapy — always grounded in empathetic conversation and constitutional diagnosis.
              </p>

              {/* Special Women's Health Care Quote */}
              <div className="women-care-quote">
                <p className="women-care-quote-text">
                  “We care for women because I'm a woman.”
                </p>
                <span className="women-care-quote-author">
                  — Dr. E. Karthiga, BSMS · Founder, EVK Siddha Clinique
                </span>
              </div>

              <button className="button button-primary" onClick={() => scrollTo("contact")}>
                Consult Dr. Karthiga <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="focus-image">
              <img src={images.alt} alt="Dr. Karthiga standing in the clinic" />
              <div className="focus-stamp">
                <Leaf size={15} /> Siddha Care & Varma Therapy
              </div>
            </div>
          </div>

          <div className="focus-tags">
            <div className="focus-tag-item">
              <span className="focus-tag-num">01</span>
              <div>
                <strong>Women's Healthcare</strong>
                <small>Hormonal harmony, PCOD/PCOS, uterine tone, postpartum recovery, and wellness.</small>
              </div>
            </div>
            <div className="focus-tag-item">
              <span className="focus-tag-num">02</span>
              <div>
                <strong>Siddha Internal Medicine</strong>
                <small>Chronic metabolic disorders, digestive balance, respiratory ailments, and allergies.</small>
              </div>
            </div>
            <div className="focus-tag-item">
              <span className="focus-tag-num">03</span>
              <div>
                <strong>Varma Therapy</strong>
                <small>Traditional vital point manipulation for spinal stiffness, joint mobility, and nerve pain.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 07: TESTIMONIALS & REVIEWS (NEW DEDICATED SECTION) */}
      <section id="testimonials" className="testimonials-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 07 / 08 · Verified Patient Reviews · நோயாளி அனுபவங்கள்
            </p>
            <span className="section-number">RATING 5.0 / 5.0</span>
          </div>

          <div className="testimonials-header-box">
            <div>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(34px, 4vw, 54px)", color: "#1b3c34", margin: "0 0 10px" }}>
                Trusted by families
                <br />
                <em>across generations.</em>
              </h2>
              <p style={{ color: "#596c61", fontSize: "15px", margin: 0, maxWidth: "480px" }}>
                Real experiences from patients treated at our clinic opposite Vardaraja Perumal Kovil, and those receiving postal herbal deliveries across India.
              </p>
            </div>

            {/* 5.0 Rating Summary Card */}
            <div className="rating-summary-badge">
              <span className="rating-big-num">5.0</span>
              <div className="rating-meta">
                <div className="star-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#e6a817" stroke="#e6a817" />
                  ))}
                </div>
                <strong style={{ fontSize: "13px", color: "#1b3c34" }}>36+ Verified Patient Reviews</strong>
                <span className="rating-source-tag">Established 2015 · EVK Siddha Clinique</span>
              </div>
            </div>
          </div>

          {/* Testimonial Filter Tabs */}
          <div className="testimonial-filter-tabs">
            {[
              ["all", "All Reviews (36+)"],
              ["women", "Women's Health & PCOD"],
              ["pain", "Joint Pain & Varma"],
              ["skin", "Skin Care & Allergies"],
              ["postal", "Postal Delivery Patients"],
            ].map(([cat, label]) => (
              <button
                key={cat}
                className={`filter-tab-btn ${testimonialCategory === cat ? "is-active" : ""}`}
                onClick={() => setTestimonialCategory(cat as any)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Testimonials Cards Grid */}
          <div className="testimonials-grid">
            {filteredTestimonials.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div>
                  <div className="testimonial-card-top">
                    <span className="treatment-badge">{item.treatment}</span>
                    <div className="star-row">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#e6a817" stroke="#e6a817" />
                      ))}
                    </div>
                  </div>
                  <p className="testimonial-quote">“{item.quote}”</p>
                </div>

                <div className="testimonial-author-row">
                  <div className="author-avatar">{item.name.charAt(0)}</div>
                  <div className="author-info">
                    <strong>
                      {item.name}
                      <span className="verified-tag">
                        <CheckCircle2 size={12} /> Verified Patient
                      </span>
                    </strong>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 08: Photo Gallery (France Trip & S.K.I.N. Awards 2026) */}
      <section id="gallery" className="gallery-showcase-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 08 / 08 · Photo Gallery & Moments
            </p>
            <span className="section-number">MOMENTS & HONORS</span>
          </div>

          <div className="section-heading-row">
            <div>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(34px, 4vw, 54px)", color: "#1b3c34", margin: "0 0 10px" }}>
                Journeys, honours &
                <br />
                <em>life in practice.</em>
              </h2>
            </div>
            <p className="heading-note">
              Highlights from Dr. Karthiga's international travel to France, S.K.I.N. Awards 2026 ceremony, and heartfelt clinic moments in Pondicherry.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="gallery-tab-row">
            <button
              className={`gallery-tab-btn ${galleryCategory === "awards" ? "is-active" : ""}`}
              onClick={() => setGalleryCategory("awards")}
            >
              <span>🏆 S.K.I.N. Awards 2026</span>
              <span className="gallery-tab-count">4</span>
            </button>
            <button
              className={`gallery-tab-btn ${galleryCategory === "france" ? "is-active" : ""}`}
              onClick={() => setGalleryCategory("france")}
            >
              <span>🇫🇷 France Trip</span>
              <span className="gallery-tab-count">4</span>
            </button>
            <button
              className={`gallery-tab-btn ${galleryCategory === "clinic" ? "is-active" : ""}`}
              onClick={() => setGalleryCategory("clinic")}
            >
              <span>🌿 Clinic & Practice</span>
              <span className="gallery-tab-count">3</span>
            </button>
            <button
              className={`gallery-tab-btn ${galleryCategory === "all" ? "is-active" : ""}`}
              onClick={() => setGalleryCategory("all")}
            >
              <span>All Moments</span>
              <span className="gallery-tab-count">11</span>
            </button>
          </div>

          {/* Photos Grid */}
          <div className="gallery-photo-grid">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="gallery-photo-card"
                onClick={() => openLightbox(item)}
              >
                <span className="gallery-card-badge">{item.badge}</span>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="gallery-card-overlay">
                  <h3 className="gallery-card-title">{item.title}</h3>
                  <p className="gallery-card-sub">
                    <MapPin size={12} /> {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredGallery[activeLightboxIndex] && (
        <div className="gallery-lightbox-backdrop" onClick={closeLightbox}>
          <button className="gallery-lightbox-close" onClick={closeLightbox} aria-label="Close image">
            <X size={20} />
          </button>
          {filteredGallery.length > 1 && (
            <>
              <button className="gallery-lightbox-nav gallery-lightbox-prev" onClick={prevLightbox} aria-label="Previous image">
                <ChevronLeft size={24} />
              </button>
              <button className="gallery-lightbox-nav gallery-lightbox-next" onClick={nextLightbox} aria-label="Next image">
                <ChevronRight size={24} />
              </button>
            </>
          )}
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-lightbox-img-wrap">
              <img
                src={filteredGallery[activeLightboxIndex].src}
                alt={filteredGallery[activeLightboxIndex].alt}
              />
            </div>
            <div className="gallery-lightbox-info">
              <span className="gallery-lightbox-badge">
                {filteredGallery[activeLightboxIndex].categoryLabel} · {activeLightboxIndex + 1} of {filteredGallery.length}
              </span>
              <h3>{filteredGallery[activeLightboxIndex].title}</h3>
              <p>{filteredGallery[activeLightboxIndex].description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Section 09: Contact & Appointment Booking (With Updated Address) */}
      <section id="contact" className="contact-section section-pad">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow" style={{ color: "#c1dacb" }}>
              <span className="eyebrow-line" /> Consultations & Appointments
            </p>
            <h2>
              Your next step
              <br />
              can be <em>simple.</em>
            </h2>
            <p>
              Book an unhurried, personal consultation with Dr. Karthiga at EVK Siddha Clinique in Pondicherry, or request medicinal consultations and doorstep postal delivery anywhere in India.
            </p>

            {/* Direct Call CTA */}
            <a className="contact-cta" href="tel:+916374514716">
              <span className="contact-icon">
                <Phone size={18} />
              </span>
              <div style={{ flex: 1 }}>
                <small>Booking & Postal Orders (Direct Call)</small>
                <strong>+91 6374514716</strong>
              </div>
              <ArrowUpRight size={20} />
            </a>

            {/* WhatsApp Consult CTA */}
            <a
              className="contact-cta"
              href="https://wa.me/916374514716?text=Hello%20Dr.%20Karthiga,%20I%20would%20like%20to%20consult%20at%20EVK%20Siddha%20Clinique"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#1e4d3f" }}
            >
              <span className="contact-icon" style={{ background: "rgba(37, 211, 102, 0.2)", color: "#25D366" }}>
                <MessageCircle size={18} />
              </span>
              <div style={{ flex: 1 }}>
                <small>WhatsApp Consultation & Messaging</small>
                <strong>Chat on WhatsApp: +91 6374514716</strong>
              </div>
              <ArrowUpRight size={20} />
            </a>

            {/* Email Contact CTA */}
            <a className="contact-cta" href="mailto:evkpondicherry@gmail.com">
              <span className="contact-icon">
                <Mail size={18} />
              </span>
              <div style={{ flex: 1 }}>
                <small>Email Inquiries & Reports</small>
                <strong>evkpondicherry@gmail.com</strong>
              </div>
              <ArrowUpRight size={20} />
            </a>
          </div>

          <div className="contact-details">
            <div className="detail">
              <MapPin size={22} />
              <div>
                <small>Official Clinic Address</small>
                <p>
                  <strong style={{ display: "block", color: "#ffffff", fontSize: "15px" }}>
                    EVK Siddha Clinique (சித்த மருத்துவ மனை)
                  </strong>
                  No. 57, Opposite Vardaraja Perumal Kovil,
                  <br />
                  M.G. Road, Pondicherry - 605001.
                  <br />
                  <span style={{ fontSize: "12px", color: "#acd733" }}>
                    Landmark: Directly Opposite to Vardaraja Perumal Kovil, Heritage Town
                  </span>
                </p>
                <a
                  className="map-action-btn"
                  href="https://maps.google.com/?q=EVK+Siddha+Clinique+No+57+Opposite+Vardaraja+Perumal+Kovil+MG+Road+Pondicherry+605001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={13} /> Open in Google Maps
                </a>
              </div>
            </div>

            <div className="detail">
              <Clock3 size={22} />
              <div>
                <small>Consultation Hours</small>
                <p>
                  Morning: 09:30 AM – 01:30 PM
                  <br />
                  Evening: 05:00 PM – 09:00 PM
                  <br />
                  <span style={{ fontSize: "12px", color: "#cadfd2" }}>
                    Prior appointment recommended via phone/WhatsApp
                  </span>
                </p>
              </div>
            </div>

            <div className="detail">
              <Package size={22} />
              <div>
                <small>Postal Medicine Delivery</small>
                <p>
                  Speed Post & Express Courier Delivery
                  <br />
                  Delivering securely across Tamil Nadu, all Indian states & abroad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-logo-lockup">
            <img src={images.logo} alt="EVK Siddha Clinique Emblem" />
            <div className="footer-logo-text">
              <strong>EVK SIDDHA CLINIQUE</strong>
              <small>சித்த மருத்துவ மனை · Pondicherry</small>
            </div>
          </div>

          <div className="footer-center">
            <div className="footer-address-line">
              📍 No. 57, Opposite Vardaraja Perumal Kovil, M.G. Road, Pondicherry - 605001
            </div>
            <div className="footer-tamil-slogan">
              “நோய்நாடி நோய்முதல் நாடி அதுதணிக்கும் வாய்நாடி வாய்ப்பச் செயல்” · Traditionally Redefining
            </div>
            <div className="footer-copyright">
              © {new Date().getFullYear()} EVK Siddha Clinique. Founded 2015 by Dr. E. Karthiga, BSMS. All rights reserved.
            </div>
          </div>

          <div className="footer-portrait">
            <img src={images.hero} alt="Dr. E. Karthiga" />
          </div>
        </div>
      </footer>

      {/* Floating Call & WhatsApp Quick Buttons */}
      <div className="floating-actions">
        <a
          className="floating-btn whatsapp"
          href="https://wa.me/916374514716?text=Hello%20Dr.%20Karthiga,%20I%20would%20like%20to%20consult%20at%20EVK%20Siddha%20Clinique"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} />
          <span className="floating-tooltip">Chat on WhatsApp</span>
        </a>

        <a
          className="floating-btn phone"
          href="tel:+916374514716"
          aria-label="Call EVK Siddha Clinique"
        >
          <Phone size={22} />
          <span className="floating-tooltip">Call +91 6374514716</span>
        </a>
      </div>
    </main>
  );
}
