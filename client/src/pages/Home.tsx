import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Apple,
  ArrowRight,
  ArrowUpRight,
  Award,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Globe,
  Heart,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users,
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
  logo: "/images/evk-cross-logo.png",
  francePlaceVendome: "/images/france-paris-place-vendome.jpg",
  franceEiffelPortrait: "/images/france-eiffel-tower-portrait.jpg",
  franceEiffelNight: "/images/france-eiffel-tower-night.jpg",
  franceMap: "/images/france-map-infographic.jpg",
  awardLeader: "/images/award-innovative-leader.jpg",
  awardSparks: "/images/award-stage-sparks.jpg",
  awardPresentation: "/images/award-presentation.jpg",
  awardWalk: "/images/award-stage-walk.jpg",
  historyRating: "/images/evk-history-rating.png",
  // Newly Extracted Photos from Zip
  treatmentsPoster: "/images/evk-clinic-treatments-poster.png",
  siddhaTree: "/images/siddha-system-tree.png",
  thirukkuralBanner: "/images/thirukkural-nadi-banner.png",
  womenCareBanner: "/images/women-care-dr-karthiga.png",
  dietQuote: "/images/diet-medicine-quote.png",
  wellnessJointCare: "/images/wellness-tourism-joint-care.png",
  wellnessInternational: "/images/wellness-tourism-international-patient.jpg",
  templeTower: "/images/varadaraja-perumal-temple-tower.jpg",
  templeGopuram: "/images/varadaraja-perumal-temple-gopuram.jpg",
  templeClinicView: "/images/varadaraja-perumal-temple-clinic-view.jpg",
};

interface GalleryItem {
  id: string;
  category: "wellness" | "awards" | "temple" | "france" | "clinic";
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
    id: "gal-wellness-1",
    category: "wellness",
    categoryLabel: "Wellness Tourism",
    title: "International Wellness Consultations",
    subtitle: "Every place is our home! Everyone is our kin!",
    description: "Dr. Karthigadevi consulting with international visitors and overseas patients under the Wellness Tourism concept in Pondicherry.",
    src: images.wellnessInternational,
    alt: "Dr. Karthigadevi with international patient in peaceful garden setting",
    badge: "Wellness Tourism",
  },
  {
    id: "gal-wellness-2",
    category: "wellness",
    categoryLabel: "Wellness Tourism",
    title: "Naadi Diagnosis & Varma Therapy Chart",
    subtitle: "Joint Pain & Musculoskeletal Care",
    description: "Comprehensive diagnostic framework covering cervical spine, knee pain, arthritis, lumbar spondylitis, and specialized Varma therapies.",
    src: images.wellnessJointCare,
    alt: "The Concept of Wellness Tourism - Naadi Diagnosis & Varma Therapy Poster",
    badge: "Clinical Poster",
  },
  {
    id: "gal-temple-1",
    category: "temple",
    categoryLabel: "Temple Landmark",
    title: "Sri Varadaraja Perumal Temple Gopuram",
    subtitle: "Direct Landmark Opposite Our Clinic",
    description: "The magnificent Raja Gopuram of Sri Varadaraja Perumal Temple rising right opposite our clinic entrance on M.G. Road, Heritage Town.",
    src: images.templeGopuram,
    alt: "Sri Varadaraja Perumal Temple Raja Gopuram in Heritage Town, Pondicherry",
    badge: "Clinic Landmark",
  },
  {
    id: "gal-temple-2",
    category: "temple",
    categoryLabel: "Temple Landmark",
    title: "Temple & Heritage Town Clinic View",
    subtitle: "No. 57, M.G. Road, Heritage Town",
    description: "Breathtaking panorama showing the clinic building situated directly across from the historic temple gopuram.",
    src: images.templeClinicView,
    alt: "Varadaraja Perumal Temple next to EVK Siddha Clinic building",
    badge: "Heritage Town",
  },
  {
    id: "gal-temple-3",
    category: "temple",
    categoryLabel: "Temple Landmark",
    title: "Intricate Temple Vimana Sculptures",
    subtitle: "Sacred Heritage of Pondicherry",
    description: "Richly carved temple towers and sanctum vimanas opposite our clinic, evoking a sacred and serene atmosphere for healing.",
    src: images.templeTower,
    alt: "Varadaraja Perumal Temple Vimana and sculpted deities",
    badge: "Temple Heritage",
  },
  {
    id: "gal-award-1",
    category: "awards",
    categoryLabel: "Awards & Honors",
    title: "Innovative Healthcare Leader Award",
    subtitle: "S.K.I.N. Awards 2026 · Puducherry",
    description: "Dr. Karthigadevi honored with the Innovative Healthcare Leader award trophy and Certificate of Achievement by S.K.I.N. Forum (ISO 9001:2015 Certified).",
    src: images.awardLeader,
    alt: "Dr. Karthigadevi holding S.K.I.N. Awards 2026 trophy and Certificate",
    badge: "Awardee 2026",
  },
  {
    id: "gal-award-2",
    category: "awards",
    categoryLabel: "Awards & Honors",
    title: "Grand Stage Felicitation",
    subtitle: "Excellence in Innovation & Leadership",
    description: "Celebrating landmark achievements in traditional Siddha medical practice on the grand stage with fireworks and medical dignitaries.",
    src: images.awardSparks,
    alt: "Grand celebration stage at S.K.I.N. Awards 2026",
    badge: "Grand Stage",
  },
  {
    id: "gal-award-3",
    category: "awards",
    categoryLabel: "Awards & Honors",
    title: "Presentation with Medical Dignitaries",
    subtitle: "S.K.I.N. Healthcare Summit 2026",
    description: "Honoured by healthcare forum directors, scholars, and medical panel delegates in recognition of dedicated clinical service.",
    src: images.awardPresentation,
    alt: "Award presentation to Dr. Karthigadevi on stage with dignitaries",
    badge: "Felicitation",
  },
  {
    id: "gal-france-1",
    category: "france",
    categoryLabel: "France Trip",
    title: "Ministère de la Justice & Place Vendôme",
    subtitle: "Paris, France",
    description: "Dr. Karthigadevi at historic Place Vendôme in Paris, exploring classical French architecture, history, and international perspectives.",
    src: images.francePlaceVendome,
    alt: "Dr. Karthigadevi at Place Vendôme, Paris, France",
    badge: "Paris, France",
  },
  {
    id: "gal-france-2",
    category: "france",
    categoryLabel: "France Trip",
    title: "Evening by the Eiffel Tower",
    subtitle: "Paris, France",
    description: "Capturing memorable moments by the illuminated Eiffel Tower at night at Champ de Mars.",
    src: images.franceEiffelPortrait,
    alt: "Dr. Karthigadevi at the illuminated Eiffel Tower in Paris",
    badge: "Eiffel Tower",
  },
  {
    id: "gal-clinic-1",
    category: "clinic",
    categoryLabel: "Clinic Life",
    title: "Listening is Part of the Medicine",
    subtitle: "EVK Siddha Clinic · Pondicherry",
    description: "Comprehensive pulse diagnosis (Nadi) and unhurried patient consultations in Heritage Town, opposite Varadaraja Perumal Temple.",
    src: images.consultation,
    alt: "Dr. Karthigadevi consulting with a patient",
    badge: "Consultation",
  },
  {
    id: "gal-clinic-2",
    category: "clinic",
    categoryLabel: "Clinic Life",
    title: "Care with Clarity",
    subtitle: "Clinical Environment",
    description: "A calm, reassuring healing atmosphere designed for unhurried conversations and holistic herbal treatment.",
    src: images.care,
    alt: "EVK Siddha Clinic clinical care",
    badge: "Clinical Care",
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
    treatment: "Joint Pain & Lumbar Spondylitis",
    category: "pain",
    quote:
      "I suffered from severe joint stiffness and lower back pain for over 2 years. Dr. Karthigadevi listened patiently to my history and diagnosed the root cause through pulse diagnosis (Nadi). With her authentic herbal oils and Varma therapies, the stiffness completely vanished within 6 weeks. Truly the best Siddha clinic in Pondicherry!",
  },
  {
    id: "rev-2",
    name: "Revathi Sundaram",
    location: "Chennai (Postal Medicine Patient)",
    rating: 5,
    treatment: "Women's Health & Hormonal Care",
    category: "women",
    quote:
      "Finding a female Siddha physician who genuinely understands women's healthcare was a true blessing. I ordered the specialized women's herbal formulation by post to Chennai. My cycles regularized naturally without any hormonal side effects, and my energy returned. The courier tracking was prompt and reliable.",
  },
  {
    id: "rev-3",
    name: "M. Anbazhagan",
    location: "M.G. Road, Pondicherry",
    rating: 5,
    treatment: "Psoriasis & Skin Care",
    category: "skin",
    quote:
      "After trying countless treatments with only temporary relief, EVK Siddha Clinic provided a permanent solution. Dr. Karthigadevi's exclusive herbal face and skin formulation restored healthy skin within two months. Her clinic opposite Varadaraja Perumal Temple is clean, peaceful, and deeply welcoming.",
  },
  {
    id: "rev-4",
    name: "Dr. Priya Ramanathan",
    location: "Puducherry",
    rating: 5,
    treatment: "Immunity & Allergic Sinusitis",
    category: "all",
    quote:
      "Dr. Karthigadevi combines ancient classical Siddha texts with acute diagnostic clarity. The Mooligai Kudineer decoction has become a morning essential for our whole family—no recurring seasonal colds or sinus headaches for months. A true 5-star clinic with genuine dedication.",
  },
  {
    id: "rev-5",
    name: "K. Vijayakumar",
    location: "Villupuram",
    rating: 5,
    treatment: "Gastritis & Dietary Lifestyle",
    category: "all",
    quote:
      "The clinic's atmosphere is calm and reassuring, conveniently situated right opposite Varadaraja Perumal Temple. Dr. Karthigadevi does not rush; she prepared a personalized diet chart according to Siddha principles. My chronic acid reflux healed completely with simple food discipline and medicines.",
  },
  {
    id: "rev-6",
    name: "Sophie & Bernard",
    location: "Paris, France (Wellness Tourism)",
    rating: 5,
    treatment: "Wellness Tourism & Online Consultation",
    category: "all",
    quote:
      "We visited Pondicherry and met Dr. Karthigadevi at EVK Siddha Clinic. Her concept that 'Every place is our home, everyone is our kin' is truly felt. We continue our online follow-up consultations from France with customized diet guidance and herbal wellness advice. Extraordinary care!",
  },
];

const desktopNavItems = [
  { label: "About", id: "about" },
  { label: "Wellness Tourism", id: "wellness-tourism", isHighlight: true },
  { label: "Treatments", id: "medicines" },
  { label: "Natural Approach", id: "approach" },
  { label: "Reviews", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const mobileNavItems = [
  { label: "About EVK Siddha Clinic", id: "about" },
  { label: "Wellness Tourism Concept", id: "wellness-tourism", isHighlight: true },
  { label: "Personalized Services & Medicines", id: "medicines" },
  { label: "Traditional Siddha Natural Approach", id: "approach" },
  { label: "Women's Healthcare Guidance", id: "women" },
  { label: "Personalized Elderly Healthcare Support", id: "elderly" },
  { label: "Consult Our Doctor Online (6 Steps)", id: "online-consult", isHighlight: true },
  { label: "Thirukkural Diagnostic Philosophy", id: "kural" },
  { label: "Inside Clinic & Temple Landmark", id: "clinic" },
  { label: "Verified Patient Reviews (5.0★)", id: "testimonials" },
  { label: "Photo Gallery & Honors", id: "gallery" },
  { label: "Clinic Location & Appointments", id: "contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState<"wellness" | "awards" | "temple" | "france" | "clinic" | "all">("wellness");
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
            <span>10+ Years Experience · Providing Siddha Healthcare Since 2016</span>
          </div>

          <div className="topline-address-snippet">
            <MapPin size={13} />
            <span>No. 57, M.G. Road, Heritage Town, Pondicherry (Opp. Varadaraja Perumal Temple)</span>
          </div>

          <div className="topline-actions">
            <a className="flash-pill" href="tel:+916374514716">
              <Sparkles size={12} />
              <span>Call: +91 6374514716</span>
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
              alt="EVK Siddha Clinic Official Logo"
              className="brand-logo-img"
            />
            <div className="brand-text-wrap">
              <span className="brand-name">EVK SIDDHA CLINIC</span>
              <div className="brand-sub">
                <span className="brand-tamil">சித்த மருத்துவமனை</span>
                <span className="brand-sep">·</span>
                <span className="brand-slogan">Traditionally Redefining</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation - Clean, Uncrowded 6 Core Sections */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            {desktopNavItems.map(({ label, id, isHighlight }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={isHighlight ? "is-special" : ""}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="nav-actions">
            <a className="nav-phone-pill" href="tel:+916374514716" title="Call EVK Siddha Clinic">
              <Phone size={14} /> <span>+91 6374514716</span>
            </a>
            <button className="nav-book-btn" onClick={() => scrollTo("online-consult")}>
              <CalendarDays size={14} />
              <span className="nav-book-text">Consult Online</span>
              <span className="nav-book-short">Consult</span>
            </button>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={18} /> : <MenuIcon size={18} />}
              <span className="menu-toggle-label" style={{ fontSize: "12px", marginLeft: "4px" }}>Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Full Sitemap Drawer */}
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
                    <strong style={{ display: "block", fontSize: "14px", color: "#1b3c34" }}>EVK SIDDHA CLINIC</strong>
                    <span style={{ fontSize: "10px", color: "#5d7367" }}>சித்த மருத்துவமனை · Estd 2016</span>
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
                {mobileNavItems.map(({ label, id, isHighlight }) => (
                  <button
                    key={id}
                    className="mobile-nav-link"
                    style={isHighlight ? { background: "#eef6dc", color: "#2d5218", fontWeight: "600" } : {}}
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
                  href="https://wa.me/916374514716?text=Hello%20Dr.%20Karthigadevi,%20I%20would%20like%20to%20book%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={15} /> <span>WhatsApp Consult</span>
                </a>
                <p className="mobile-address-preview">
                  📍 No. 57, M.G. Road, Heritage Town, Pondicherry – 605001, India (Opp. Varadaraja Perumal Temple)
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
              <span className="eyebrow-line" /> Siddha Physician · Puducherry | சித்த மருத்துவமனை
            </p>
            <h1>
              Care rooted in <em>tradition.</em>
              <br />
              Traditionally Redefining.
            </h1>
            <p className="hero-intro">
              <strong>EVK Siddha Clinic</strong> – Traditionally Redefining Wellness Through Siddha Medicine, Personalized Healthcare, Diet, Yoga and Wellness Tourism. Under the supervision of <strong>Dr. Karthigadevi, B.S.M.S.</strong> (Siddha Physician, Reg. No.: 3802).
            </p>

            <div className="hero-cta-row">
              <button className="button button-primary" onClick={() => scrollTo("online-consult")}>
                Book Online Consultation <ArrowUpRight size={16} />
              </button>
              <button className="button button-outline" onClick={() => scrollTo("wellness-tourism")}>
                Wellness Tourism Concept <Globe size={16} />
              </button>
              <button className="text-link" onClick={() => scrollTo("medicines")}>
                Personalized Services <ChevronDown size={16} />
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
                <span className="star-sub-text">36+ verified reviews</span>
              </div>
              <div className="hero-trust-text">
                <strong>10+ Years of Experience</strong> · Providing Siddha healthcare services since 2016.
                <br />
                Opposite Varadaraja Perumal Temple, M.G. Road, Heritage Town, Pondicherry.
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
              <img src={images.hero} alt="Dr. Karthigadevi - Founder, EVK Siddha Clinic" />
            </div>

            {/* Floating Experience Badge */}
            <div className="hero-floating-badge">
              <Sparkles size={18} color="#789635" />
              <div>
                <strong style={{ display: "block", fontSize: "17px", color: "#1b3c34", lineHeight: 1 }}>10+ Years</strong>
                <span style={{ fontSize: "10px", color: "#667a6e", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Serving Since 2016
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

      {/* Section 01: Clinic Experience & About */}
      <section id="about" className="about-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 01 / 10 · Clinic Experience & Heritage
            </p>
            <span className="section-number">ESTABLISHED 2016</span>
          </div>

          <div className="about-intro-grid">
            <div className="about-intro-content">
              <h2>
                10+ Years of Experience
                <br />
                in <em>Siddha Healthcare.</em>
              </h2>
              <p>
                <strong>The clinic has been providing Siddha healthcare services since 2016.</strong> Under the experienced supervision of <strong>Dr. Karthigadevi, B.S.M.S.</strong>, EVK Siddha Clinic caters to a wide spectrum of health requirements with personalized attention, classical pulse assessment (நாடிப் பரிசோதனை), and thoughtful lifestyle guidance.
              </p>
              <p>
                Our vision is to bring traditional Siddha healthcare closer to everyone through personalized consultation, natural healthcare principles and accessible online services — bridging ancient Tamil medical wisdom with contemporary living.
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "24px" }}>
                <button className="button button-primary" onClick={() => scrollTo("wellness-tourism")}>
                  Explore Wellness Tourism <ArrowUpRight size={15} />
                </button>
                <button className="button button-outline" onClick={() => scrollTo("kural")}>
                  Diagnostic Philosophy <ArrowUpRight size={15} />
                </button>
              </div>
            </div>

            <div style={{ position: "relative", borderRadius: "14px", overflow: "hidden", boxShadow: "0 10px 28px rgba(27,60,52,0.12)" }}>
              <img
                src={images.consultation}
                alt="Dr. Karthigadevi consulting patient at EVK Siddha Clinic"
                style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "360px" }}
              />
              <div style={{ position: "absolute", bottom: 0, insetInline: 0, background: "linear-gradient(0deg, rgba(20,44,38,0.9), transparent)", padding: "20px", color: "#fff" }}>
                <strong style={{ display: "block", fontSize: "16px" }}>Pulse Diagnosis (Nadi) & Consultation</strong>
                <span style={{ fontSize: "12px", color: "#cde3d5" }}>EVK Siddha Clinic · Heritage Town, Pondicherry – 605001</span>
              </div>
            </div>
          </div>

          {/* History and Commitment Showcase Card */}
          <div className="history-commitment-card">
            <div className="history-card-header">
              <span className="history-card-badge">
                <Leaf size={14} /> History and Commitment
              </span>
              <span className="history-rating-pill">
                <Star size={14} fill="#8c5700" stroke="#8c5700" />
                <span>5.0 Stars · 36 Reviews</span>
              </span>
            </div>

            <h3 className="history-title">A Pillar in Siddha Healthcare</h3>
            <p className="history-quote-text">
              “Evk Siddha Clinic has been a pillar in the Siddha Clinics sector for many years. Providing Siddha healthcare services since 2016, the clinic caters to a wide range of medical needs. With a rating of 5.0 stars based on 36 reviews, the clinic is conveniently located near Opposite Varadaraja Perumal Temple on M.G. Road, ensuring easy access for patients and saving them valuable time and effort.”
            </p>

            <div className="history-metrics-grid">
              <div className="metric-item">
                <span className="metric-val">10+ Years</span>
                <span className="metric-label">Experience in Siddha Healthcare</span>
              </div>
              <div className="metric-item">
                <span className="metric-val">Since 2016</span>
                <span className="metric-label">Serving Pondicherry & Global Patients</span>
              </div>
              <div className="metric-item">
                <span className="metric-val">5.0 ★</span>
                <span className="metric-label">Google Rating (36+ Verified Reviews)</span>
              </div>
              <div className="metric-item">
                <span className="metric-val">No. 57, M.G. Rd</span>
                <span className="metric-label">Opposite Varadaraja Perumal Temple</span>
              </div>
            </div>
          </div>

          {/* S.K.I.N. Awards 2026 Spotlight Box */}
          <div className="award-spotlight-card">
            <div className="award-spotlight-photo">
              <img
                src={images.awardLeader}
                alt="Dr. Karthigadevi with S.K.I.N. Awards 2026 Trophy & Certificate"
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
                Presented to <strong>Dr. Karthigadevi (EVK Siddha Clinic)</strong> by Synchronization of Knowledge & Information Network (ISO 9001:2015 Certified Forum) in recognition of clinical innovation, compassionate leadership, and dedicated community wellness.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", fontSize: "12px", color: "#bcd9c6" }}>
                <span>✓ S.K.I.N. Forum ISO 9001:2015 Certified</span>
                <span>✓ Grand Stage Recognition with Medical Dignitaries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Wellness Tourism – Our Special Concept (NEW DEDICATED SECTION) */}
      <section id="wellness-tourism" className="wellness-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 02 / 10 · Special Concept · சுற்றுலா நலவாழ்வு
            </p>
            <span className="section-number">BEYOND BOUNDARIES</span>
          </div>

          <div className="section-heading-row">
            <div>
              <h2>
                Wellness Tourism –
                <br />
                Bringing Siddha Healthcare <em>Closer to Everyone.</em>
              </h2>
            </div>
            <p className="heading-note">
              Making traditional Siddha healthcare guidance accessible to patients beyond geographical boundaries through online consultations and personalized wellness support.
            </p>
          </div>

          {/* Hero Banner with Photo */}
          <div className="wellness-hero-banner">
            <div className="wellness-hero-copy">
              <span className="history-card-badge" style={{ background: "#e0f2fe", color: "#0369a1" }}>
                <Globe size={13} /> Global Healthcare Reach
              </span>
              <h3>“Every place is our home! Everyone is our kin!”</h3>
              <p>
                EVK Siddha Clinic follows an innovative <strong>Wellness Tourism</strong> concept that aims to make traditional Siddha healthcare guidance accessible to patients beyond geographical boundaries.
              </p>
              <p>
                Through online consultations, patients can connect with our doctor, discuss their health concerns, and receive personalized healthcare recommendations, dietary plans, and lifestyle practices.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button className="button button-primary" onClick={() => scrollTo("online-consult")}>
                  Book Online Consultation <ArrowUpRight size={15} />
                </button>
                <a
                  className="button button-outline"
                  href="https://wa.me/916374514716?text=Hello%20Dr.%20Karthigadevi,%20I%20am%20interested%20in%20your%20Wellness%20Tourism%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={15} /> Enquire on WhatsApp
                </a>
              </div>
            </div>

            <div className="wellness-hero-image">
              <img
                src={images.wellnessInternational}
                alt="Dr. Karthigadevi with international patient - Wellness Tourism"
              />
              <div className="wellness-photo-caption">
                <strong>Cross-Cultural Healing:</strong> Dr. Karthigadevi with an international patient in a peaceful garden setting.
              </div>
            </div>
          </div>

          {/* 6 Features Grid */}
          <div className="wellness-features-grid">
            <div className="wellness-feature-card">
              <Stethoscope size={22} color="#1b3c34" />
              <h4>Online Consultations</h4>
              <p>Direct doctor-patient video and phone consultations to discuss health history and individual circumstances thoroughly.</p>
            </div>

            <div className="wellness-feature-card">
              <Activity size={22} color="#1b3c34" />
              <h4>Health Assessment</h4>
              <p>Detailed assessment of individual health condition, bodily constitution (Tridosha), and lifestyle factors.</p>
            </div>

            <div className="wellness-feature-card">
              <Package size={22} color="#1b3c34" />
              <h4>Personalized Medicines</h4>
              <p>Carefully selected Siddha medicine recommendations tailored specifically to the patient following professional assessment.</p>
            </div>

            <div className="wellness-feature-card">
              <Apple size={22} color="#1b3c34" />
              <h4>Diet & Lifestyle Guidance</h4>
              <p>Individualized dietary modifications, nutritional recommendations, and daily wellness routines that suit your location.</p>
            </div>

            <div className="wellness-feature-card">
              <HeartHandshake size={22} color="#1b3c34" />
              <h4>Follow-up Support</h4>
              <p>Continuous guidance and scheduled review consultations to monitor progress and adapt health recommendations.</p>
            </div>

            <div className="wellness-feature-card">
              <Globe size={22} color="#1b3c34" />
              <h4>Medicine Delivery</h4>
              <p>Convenient medicine delivery arranged for eligible patients, subject to availability and applicable regulations.</p>
            </div>
          </div>

          {/* Objective & International Patients Card */}
          <div className="wellness-objective-card">
            <div>
              <h3>Our Objective</h3>
              <p>
                Our objective is to connect patients with traditional Siddha healthcare through accessible online consultations, personalized recommendations and continuous guidance.
              </p>
              <p style={{ marginTop: "12px" }}>
                The doctor evaluates the patient's condition and circumstances before suggesting suitable treatment approaches, dietary modifications and lifestyle practices.
              </p>
            </div>

            <div className="wellness-international-pill">
              <h4>
                <Globe size={18} /> Welcoming International Patients
              </h4>
              <p>
                We also welcome enquiries from international patients. Patients living in other countries can consult our doctor online and receive appropriate healthcare guidance based on their health concerns and individual circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Medicine & Siddha Treatment Services */}
      <section id="medicines" className="services-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 03 / 10 · Treatment & Medicine Services
            </p>
            <span className="section-number">CLINICAL EXCELLENCE</span>
          </div>

          <div className="section-heading-row">
            <div>
              <h2>
                Personalized Siddha Healthcare
                <br />
                & <em>Medicine Services.</em>
              </h2>
            </div>
            <p className="heading-note">
              At EVK Siddha Clinic, we provide personalized Siddha healthcare consultations and treatment guidance under the supervision of Dr. Karthigadevi.
            </p>
          </div>

          {/* Intro Card */}
          <div className="services-intro-card">
            <h3>Our Clinical Approach</h3>
            <p>
              Our approach focuses on understanding each patient's health condition, lifestyle, dietary habits and individual healthcare requirements before recommending suitable Siddha medicines.
            </p>

            <div className="services-items-grid">
              {[
                "Outpatient consultation and treatment",
                "Personalized Siddha medicine recommendations",
                "Natural and traditional Siddha healthcare approaches",
                "Diet-based nutritional guidance and food supplements",
                "Individualized diet chart preparation",
                "Yoga and lifestyle recommendations",
                "Women's healthcare guidance",
                "Healthcare guidance for elderly individuals",
                "Online consultation and medicine delivery services",
              ].map((service, idx) => (
                <div key={idx} className="service-item-tile">
                  <CheckCircle2 size={16} />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            {/* Medical Assessment Callout */}
            <div className="medicine-guidance-callout">
              <ShieldCheck size={22} />
              <p>
                <strong>Important Guidance on Medicines:</strong> Medicines are recommended only after consultation and assessment by the doctor. Depending on the patient's condition, a limited and appropriate combination of medicines, typically up to three when necessary, may be recommended.
              </p>
            </div>
          </div>

          {/* Official Treatments Poster Feature */}
          <div style={{ background: "#ffffff", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(27,60,52,0.12)", boxShadow: "0 8px 24px rgba(27,60,52,0.06)", marginBottom: "40px" }}>
            <div style={{ padding: "28px 32px 16px" }}>
              <span className="history-card-badge">
                <Activity size={13} /> Official Clinic Treatment Scope
              </span>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "24px", color: "#1b3c34", margin: "10px 0 6px" }}>
                Comprehensive Treatment Areas at EVK Siddha Clinic
              </h3>
              <p style={{ color: "#5a6e62", fontSize: "14px", margin: 0 }}>
                Specialized Siddha treatments for Joint Pain (Cervical & Lumbar Spondylitis, Knee Pain), Skin Diseases (Psoriasis, Leucoderma, Eczema), Respiratory Diseases (Sinusitis, Wheezing, Asthma, Migraine), and Women's Health.
              </p>
            </div>
            <div style={{ maxHeight: "560px", overflow: "hidden", display: "flex", justifyContent: "center", background: "#f8faf5" }}>
              <img
                src={images.treatmentsPoster}
                alt="EVK Siddha Clinic Official Treatments Poster"
                style={{ maxWidth: "100%", height: "auto", objectFit: "contain", cursor: "pointer" }}
                onClick={() => openLightbox({
                  id: "poster-1",
                  category: "clinic",
                  categoryLabel: "Treatment Scope",
                  title: "EVK Siddha Clinic Official Treatment Scope",
                  subtitle: "Joint Pain, Skin, Respiratory & Women's Care",
                  description: "Full clinical services breakdown under Dr. Karthigadevi, B.S.M.S., Reg. No.: 3802.",
                  src: images.treatmentsPoster,
                  alt: "EVK Siddha Clinic Official Treatments Poster",
                  badge: "Treatments",
                })}
              />
            </div>
          </div>

          {/* 3 Formulations Cards */}
          <div className="products-grid">
            <div className="product-card">
              <div>
                <span className="product-badge">Daily Wellness & Immunity</span>
                <span className="product-tamil-name">மூலிகை குடிநீர்</span>
                <h3>Mooligai Kudineer</h3>
                <p>
                  A revitalizing herbal decoction crafted from hand-selected immunity-boosting and detoxifying herbs. Recommended as part of daily wellness routines to balance the three humors and clear respiratory congestion.
                </p>
                <ul className="product-highlights">
                  <li><CheckCircle2 size={14} /> Natural immunity builder & respiratory tonic</li>
                  <li><CheckCircle2 size={14} /> 100% pure herbal preparation</li>
                  <li><CheckCircle2 size={14} /> Recommended with individualized dosage</li>
                </ul>
              </div>
              <a className="product-order-btn" href="tel:+916374514716">
                Consult Doctor to Prescribe <ArrowRight size={13} />
              </a>
            </div>

            <div className="product-card">
              <div>
                <span className="product-badge exclusive">Exclusive Formulation</span>
                <span className="product-tamil-name">இயற்கை முக அழகு பராமரிப்பு</span>
                <h3>Natural Face & Skin Care</h3>
                <p>
                  Our proprietary botanical formulation prepared with pure herbs and medicinal extracts to support healthy skin tone, reduce blemishes, and soothe allergies without harsh synthetic chemicals.
                </p>
                <ul className="product-highlights">
                  <li><CheckCircle2 size={14} /> Prepared in-house with authentic herbs</li>
                  <li><CheckCircle2 size={14} /> Clarifies complexion and calms skin irritation</li>
                  <li><CheckCircle2 size={14} /> Completely chemical- and paraben-free</li>
                </ul>
              </div>
              <a className="product-order-btn" href="tel:+916374514716">
                Consult Doctor to Prescribe <ArrowRight size={13} />
              </a>
            </div>

            <div className="product-card">
              <div>
                <span className="product-badge women">Specialized Women's Health</span>
                <span className="product-tamil-name">பெண்களுக்கான பிரத்யேக மூலிகை மருந்து</span>
                <h3>Intake Healthcare for Women</h3>
                <p>
                  A therapeutic internal herbal formulation supporting female hormonal harmony, uterine wellness, menstrual comfort, and vitality through life stages from youth to menopause.
                </p>
                <ul className="product-highlights">
                  <li><CheckCircle2 size={14} /> Supports reproductive and uterine vitality</li>
                  <li><CheckCircle2 size={14} /> Formulated with classical medicinal roots</li>
                  <li><CheckCircle2 size={14} /> Prescribed after personal consultation</li>
                </ul>
              </div>
              <a className="product-order-btn" href="tel:+916374514716">
                Consult Doctor to Prescribe <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Siddha Natural Healthcare Approach (NEW DEDICATED SECTION) */}
      <section id="approach" className="natural-approach-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 04 / 10 · Natural Approach to Wellness
            </p>
            <span className="section-number">இயற்கை நல்வாழ்வு</span>
          </div>

          <div className="section-heading-row">
            <div>
              <h2>
                Traditional Siddha Healthcare –
                <br />
                A <em>Natural Approach</em> to Wellness.
              </h2>
            </div>
            <p className="heading-note">
              Our healthcare approach emphasizes the traditional principles of Siddha medicine, with attention to diet, lifestyle, natural healthcare practices and individualized treatment guidance.
            </p>
          </div>

          {/* Quote & Tree Banner */}
          <div className="approach-quote-banner">
            <div className="approach-quote-text">
              <span className="history-card-badge" style={{ marginBottom: "14px" }}>
                <Apple size={13} /> Siddha Dietary Scripture
              </span>
              <blockquote>
                “When diet is wrong, medicine is of no use.
                <br />
                When diet is correct, medicine is of no need.”
              </blockquote>
              <p>
                Our aim is to encourage patients to understand the foundational importance of food, lifestyle, and traditional Siddha healthcare in maintaining overall well-being.
              </p>
            </div>
            <div style={{ height: "100%", minHeight: "340px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f9f2" }}>
              <img
                src={images.siddhaTree}
                alt="Siddha System Tree of Life - Food, Medicine, Diagnosis, Yogam, Prevention, Rejuvenation"
                style={{ width: "100%", height: "100%", objectFit: "contain", padding: "16px" }}
              />
            </div>
          </div>

          {/* 3 Pillars Grid */}
          <div className="approach-pillars-grid">
            {/* Pillar 1: Diet & Nutrition */}
            <div className="approach-pillar-card">
              <div className="pillar-icon-wrap">
                <Apple size={24} />
              </div>
              <h3>Diet & Nutrition</h3>
              <ul className="pillar-item-list">
                <li><CheckCircle2 size={15} /> <span>Personalized diet chart preparation according to body constitution.</span></li>
                <li><CheckCircle2 size={15} /> <span>Food-based nutritional recommendations and natural food supplements.</span></li>
                <li><CheckCircle2 size={15} /> <span>Cultivating healthy eating habits and mindful eating rhythms.</span></li>
                <li><CheckCircle2 size={15} /> <span>Dietary guidance tailored according to individual health requirements.</span></li>
              </ul>
            </div>

            {/* Pillar 2: Siddha Medicine */}
            <div className="approach-pillar-card">
              <div className="pillar-icon-wrap">
                <Leaf size={24} />
              </div>
              <h3>Siddha Medicine</h3>
              <ul className="pillar-item-list">
                <li><CheckCircle2 size={15} /> <span>Traditional Siddha medicine recommendations rooted in classic texts.</span></li>
                <li><CheckCircle2 size={15} /> <span>Personalized medicine guidance following thorough doctor consultation.</span></li>
                <li><CheckCircle2 size={15} /> <span>Healthcare support and dosage based on individual pulse assessment.</span></li>
                <li><CheckCircle2 size={15} /> <span>Measured combinations (typically up to three) when necessary.</span></li>
              </ul>
            </div>

            {/* Pillar 3: Yoga & Lifestyle */}
            <div className="approach-pillar-card">
              <div className="pillar-icon-wrap">
                <Sparkles size={24} />
              </div>
              <h3>Yoga & Lifestyle</h3>
              <ul className="pillar-item-list">
                <li><CheckCircle2 size={15} /> <span>Yoga guidance tailored to physical flexibility and medical condition.</span></li>
                <li><CheckCircle2 size={15} /> <span>Daily lifestyle recommendations aligning with natural biological clocks.</span></li>
                <li><CheckCircle2 size={15} /> <span>Healthy routine development for stress reduction and mental peace.</span></li>
                <li><CheckCircle2 size={15} /> <span>General wellness practices to sustain vitality across all ages.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Women's Healthcare & Elderly Healthcare */}
      <section id="women" className="focus-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 05 / 10 · Focused Care Guidance
            </p>
            <span className="section-number">WOMEN & SENIOR CITIZENS</span>
          </div>

          <div className="section-heading-row">
            <div>
              <h2>
                Specialized Guidance for
                <br />
                <em>Women & Elderly Individuals.</em>
              </h2>
            </div>
            <p className="heading-note">
              Compassionate, unhurried consultations addressing unique physiological phases, hormonal wellness, and age-related vitality.
            </p>
          </div>

          {/* Women's Care Feature Banner */}
          <div style={{ background: "#ffffff", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(27,60,52,0.12)", boxShadow: "0 8px 24px rgba(27,60,52,0.06)", marginBottom: "36px", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
            <div style={{ height: "100%", minHeight: "340px" }}>
              <img
                src={images.womenCareBanner}
                alt="Dr. Karthigadevi - We care for women because I am a woman"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "40px" }}>
              <span className="history-card-badge" style={{ background: "#fce7f3", color: "#9d174d" }}>
                <Heart size={13} /> Women's Healthcare Guidance
              </span>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "28px", color: "#1b3c34", margin: "14px 0 12px" }}>
                “We care for women because I am a woman.”
              </h3>
              <p style={{ color: "#54685c", fontSize: "14.5px", lineHeight: "1.7", margin: "0 0 20px" }}>
                Patients can consult Dr. Karthigadevi to discuss their concerns openly and receive appropriate guidance based on their individual health requirements.
              </p>
              <button className="button button-primary" onClick={() => scrollTo("online-consult")}>
                Consult for Women's Health <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          {/* Two Columns: Women's Care & Elderly Care */}
          <div className="women-elderly-grid">
            {/* Women's Health Column */}
            <div className="care-vertical-card women">
              <div>
                <span className="history-card-badge" style={{ background: "#fce7f3", color: "#9d174d" }}>
                  <Heart size={13} /> Women's Health Focus
                </span>
                <h3>Women's Healthcare Guidance</h3>
                <p>
                  Personalized healthcare consultation and guidance for women concerning:
                </p>
                <ul className="care-checklist">
                  <li><CheckCircle2 size={15} /> <span>Menstrual health, cramps, and cycle irregularities.</span></li>
                  <li><CheckCircle2 size={15} /> <span>Menopause-related concerns, hot flashes, and mood balance.</span></li>
                  <li><CheckCircle2 size={15} /> <span>General women's wellness, vitality, and hormonal equilibrium.</span></li>
                  <li><CheckCircle2 size={15} /> <span>Age-related health concerns including osteoporosis and bone density.</span></li>
                  <li><CheckCircle2 size={15} /> <span>Diet and nutritional guidance tailored to female biology.</span></li>
                  <li><CheckCircle2 size={15} /> <span>Lifestyle modifications and restorative yoga recommendations.</span></li>
                </ul>
              </div>
              <button className="button button-outline" onClick={() => scrollTo("online-consult")}>
                Book Consultation for Women's Care <ArrowRight size={14} />
              </button>
            </div>

            {/* Elderly Care Column */}
            <div id="elderly" className="care-vertical-card elderly">
              <div>
                <span className="history-card-badge" style={{ background: "#eff6ff", color: "#1d4ed8" }}>
                  <Users size={13} /> Senior Citizens Focus
                </span>
                <h3>Personalized Elderly Healthcare & Wellness Support</h3>
                <p>
                  We provide consultation and healthcare guidance for elderly individuals, focusing on:
                </p>
                <ul className="care-checklist">
                  <li><CheckCircle2 size={15} /> <span>Age-related health concerns including joint mobility and chronic stiffness.</span></li>
                  <li><CheckCircle2 size={15} /> <span>Dietary and nutritional requirements suited for gentle digestion.</span></li>
                  <li><CheckCircle2 size={15} /> <span>General physical wellness, sleep support, and metabolic balance.</span></li>
                  <li><CheckCircle2 size={15} /> <span>Comfortable lifestyle recommendations and light daily movement.</span></li>
                  <li><CheckCircle2 size={15} /> <span>Appropriate Siddha healthcare guidance following careful consultation.</span></li>
                  <li><CheckCircle2 size={15} /> <span>Patient, attentive listening that honors the senior individual.</span></li>
                </ul>
              </div>
              <button className="button button-outline" onClick={() => scrollTo("online-consult")}>
                Book Elderly Health Guidance <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 06: Online Consultation & Medicine Delivery Workflow */}
      <section id="online-consult" className="online-consult-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow" style={{ color: "#c2ddcf" }}>
              <span className="eyebrow-line" /> 06 / 10 · Online Consultations
            </p>
            <span className="section-number" style={{ color: "#a5c2b2" }}>HEALTHCARE BEYOND BOUNDARIES</span>
          </div>

          <div className="section-heading-row">
            <div>
              <h2 style={{ color: "#ffffff" }}>
                Consult Our Doctor Online –
                <br />
                <em>Healthcare Beyond Boundaries.</em>
              </h2>
            </div>
            <p className="heading-note" style={{ color: "#c1d9cc" }}>
              Patients across India and worldwide can connect with Dr. Karthigadevi through seamless online consultations.
            </p>
          </div>

          {/* 6-Step Process Cards */}
          <div className="workflow-steps-grid">
            <div className="workflow-step-card">
              <span className="workflow-step-num">1</span>
              <h4>Contact Clinic</h4>
              <p>The patient contacts the clinic via phone, WhatsApp, or email to schedule an appointment.</p>
            </div>

            <div className="workflow-step-card">
              <span className="workflow-step-num">2</span>
              <h4>Doctor Discussion</h4>
              <p>The patient discusses their health concerns, medical history, and daily habits directly with the doctor.</p>
            </div>

            <div className="workflow-step-card">
              <span className="workflow-step-num">3</span>
              <h4>Clinical Evaluation</h4>
              <p>The doctor evaluates the patient's condition, constitutional balance, and individual circumstances.</p>
            </div>

            <div className="workflow-step-card">
              <span className="workflow-step-num">4</span>
              <h4>Personalized Plan</h4>
              <p>Personalized Siddha medicine, diet chart, and lifestyle recommendations are provided when appropriate.</p>
            </div>

            <div className="workflow-step-card">
              <span className="workflow-step-num">5</span>
              <h4>Medicine Delivery</h4>
              <p>Eligible medicines can be arranged for delivery after consultation, subject to availability and applicable regulations.</p>
            </div>

            <div className="workflow-step-card">
              <span className="workflow-step-num">6</span>
              <h4>Follow-up Guidance</h4>
              <p>Patients receive regular follow-up guidance and progress reviews as recommended by the doctor.</p>
            </div>
          </div>

          {/* 4 Prominent Call-to-Action Buttons */}
          <div className="consult-action-buttons-row">
            <a
              className="consult-action-btn primary"
              href="https://wa.me/916374514716?text=Hello%20Dr.%20Karthigadevi,%20I%20would%20like%20to%20book%20an%20Online%20Consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarDays size={16} />
              <span>Book Online Consultation</span>
            </a>

            <a className="consult-action-btn phone" href="tel:+916374514716">
              <Phone size={16} />
              <span>Contact Our Clinic</span>
            </a>

            <a
              className="consult-action-btn secondary"
              href="https://wa.me/916374514716?text=Hello%20Dr.%20Karthigadevi,%20I%20would%20like%20to%20enquire%20about%20Siddha%20Medicines"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Package size={16} />
              <span>Enquire About Medicines</span>
            </a>

            <button className="consult-action-btn outline" onClick={() => scrollTo("contact")}>
              <HeartHandshake size={16} />
              <span>Get Healthcare Guidance</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 07: Thirukkural Diagnostic Philosophy */}
      <section id="kural" className="kural-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow" style={{ color: "#c4ddcf" }}>
              <span className="eyebrow-line" /> 07 / 10 · Core Diagnostic Philosophy
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

          {/* Thirukkural Banner Board */}
          <div style={{ borderRadius: "14px", overflow: "hidden", marginBottom: "32px", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
            <img
              src={images.thirukkuralBanner}
              alt="Thirukkural 948 Board - Naadi Pulse Diagnosis"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
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
              At EVK Siddha Clinic, this sacred Thirukkural serves as our guiding beacon. Through comprehensive pulse diagnosis (நாடிப் பரிசோதனை), constitutional understanding, dietary rhythms, and classical botanical formulations, we focus on restoring health at its foundational source.
            </p>
          </div>
        </div>
      </section>

      {/* Section 08: Inside the Clinic & Temple Landmark */}
      <section id="clinic" className="clinic-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 08 / 10 · Clinic Environment & Landmark
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
              Located at <strong>No. 57, M.G. Road, Heritage Town, Pondicherry – 605001, India</strong>. Landmark: <strong>Opposite Varadaraja Perumal Temple</strong>.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-main">
              <img src={images.consultation} alt="Dr. Karthigadevi consulting with a patient" />
              <span>Listening is part of the medicine.</span>
            </div>
            <div>
              <img src={images.care} alt="EVK Siddha Clinic clinical care" />
              <span>Care with clarity and gentle presence.</span>
            </div>
            <div>
              <img src={images.templeGopuram} alt="Sri Varadaraja Perumal Temple Gopuram" />
              <span>Direct landmark: Varadaraja Perumal Temple.</span>
            </div>
            <div className="clinic-note">
              <Leaf size={24} />
              <p>“A clinic should feel like a place you can exhale.”</p>
              <small>No. 57, M.G. Road, Heritage Town, Pondicherry – 605001, India</small>
            </div>
          </div>

          {/* Temple Landmark Feature Showcase */}
          <div className="temple-landmark-box">
            <div className="temple-landmark-img-wrap">
              <img
                src={images.templeClinicView}
                alt="Varadaraja Perumal Temple next to EVK Siddha Clinic building"
              />
            </div>
            <div className="temple-landmark-copy">
              <span className="history-card-badge">
                <MapPin size={13} /> Prime Heritage Town Location
              </span>
              <h3>Landmark: Opposite Varadaraja Perumal Temple</h3>
              <p>
                EVK Siddha Clinic is situated in the peaceful historic Heritage Town quarter of Pondicherry, directly opposite the revered multi-tiered Raja Gopuram of Sri Varadaraja Perumal Temple.
              </p>
              <p>
                This prime, serene setting ensures effortless access for local residents, visiting tourists, and outstation patients alike.
              </p>
              <a
                className="map-action-btn"
                href="https://maps.google.com/?q=EVK+Siddha+Clinic+No+57+MG+Road+Heritage+Town+Pondicherry+605001+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={14} /> Open Location in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 09: Verified Patient Reviews */}
      <section id="testimonials" className="testimonials-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 09 / 10 · Verified Patient Reviews · நோயாளி அனுபவங்கள்
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
                Real experiences from patients treated at our clinic opposite Varadaraja Perumal Temple, and international patients consulting online.
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
                <span className="rating-source-tag">Serving Since 2016 · EVK Siddha Clinic</span>
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

      {/* Section 10: Photo Gallery */}
      <section id="gallery" className="gallery-showcase-section section-pad">
        <div className="container">
          <div className="section-kicker">
            <p className="eyebrow">
              <span className="eyebrow-line" /> 10 / 10 · Photo Gallery & Moments
            </p>
            <span className="section-number">GALLERY & HONORS</span>
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
              Moments from Dr. Karthigadevi's Wellness Tourism initiatives, S.K.I.N. Awards 2026, Temple Landmark, France travel, and clinic life.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="gallery-tab-row">
            <button
              className={`gallery-tab-btn ${galleryCategory === "wellness" ? "is-active" : ""}`}
              onClick={() => setGalleryCategory("wellness")}
            >
              <span>🌿 Wellness Tourism</span>
            </button>
            <button
              className={`gallery-tab-btn ${galleryCategory === "awards" ? "is-active" : ""}`}
              onClick={() => setGalleryCategory("awards")}
            >
              <span>🏆 S.K.I.N. Awards 2026</span>
            </button>
            <button
              className={`gallery-tab-btn ${galleryCategory === "temple" ? "is-active" : ""}`}
              onClick={() => setGalleryCategory("temple")}
            >
              <span>🛕 Temple Landmark</span>
            </button>
            <button
              className={`gallery-tab-btn ${galleryCategory === "france" ? "is-active" : ""}`}
              onClick={() => setGalleryCategory("france")}
            >
              <span>🇫🇷 France Trip</span>
            </button>
            <button
              className={`gallery-tab-btn ${galleryCategory === "clinic" ? "is-active" : ""}`}
              onClick={() => setGalleryCategory("clinic")}
            >
              <span>🏥 Clinic Life</span>
            </button>
            <button
              className={`gallery-tab-btn ${galleryCategory === "all" ? "is-active" : ""}`}
              onClick={() => setGalleryCategory("all")}
            >
              <span>All Moments ({galleryItems.length})</span>
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

      {/* Section 11: Contact & Appointment Booking (Updated Address) */}
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
              Connect with <strong>Dr. Karthigadevi</strong> at EVK Siddha Clinic in Pondicherry, or request personalized online consultations and healthcare guidance from anywhere in India and abroad.
            </p>

            {/* Direct Call CTA */}
            <a className="contact-cta" href="tel:+916374514716">
              <span className="contact-icon">
                <Phone size={18} />
              </span>
              <div style={{ flex: 1 }}>
                <small>Direct Phone Call / Appointments</small>
                <strong>+91 6374514716 / +91 94896 06121</strong>
              </div>
              <ArrowUpRight size={20} />
            </a>

            {/* WhatsApp Consult CTA */}
            <a
              className="contact-cta"
              href="https://wa.me/916374514716?text=Hello%20Dr.%20Karthigadevi,%20I%20would%20like%20to%20consult%20at%20EVK%20Siddha%20Clinic"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#1e4d3f" }}
            >
              <span className="contact-icon" style={{ background: "rgba(37, 211, 102, 0.2)", color: "#25D366" }}>
                <MessageCircle size={18} />
              </span>
              <div style={{ flex: 1 }}>
                <small>WhatsApp Consultation & Inquiries</small>
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
                <small>Updated Clinic Address</small>
                <p>
                  <strong style={{ display: "block", color: "#ffffff", fontSize: "15px" }}>
                    EVK Siddha Clinic (சித்த மருத்துவமனை)
                  </strong>
                  No. 57, M.G. Road, Heritage Town,
                  <br />
                  Pondicherry – 605001, India.
                  <br />
                  <span style={{ fontSize: "12.5px", color: "#acd733", display: "block", marginTop: "4px" }}>
                    Landmark: Opposite Varadaraja Perumal Temple
                  </span>
                </p>
                <a
                  className="map-action-btn"
                  href="https://maps.google.com/?q=EVK+Siddha+Clinic+No+57+MG+Road+Heritage+Town+Pondicherry+605001+India"
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
                    Prior appointment recommended via Phone/WhatsApp
                  </span>
                </p>
              </div>
            </div>

            <div className="detail">
              <Globe size={22} />
              <div>
                <small>Wellness Tourism & Online Services</small>
                <p>
                  Online Consultations & Medicine Delivery for eligible patients
                  <br />
                  Welcoming patients across India and internationally
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
            <img src={images.logo} alt="EVK Siddha Clinic Emblem" />
            <div className="footer-logo-text">
              <strong>EVK SIDDHA CLINIC</strong>
              <small>சித்த மருத்துவமனை · Pondicherry</small>
            </div>
          </div>

          <div className="footer-center">
            <div className="footer-address-line">
              📍 No. 57, M.G. Road, Heritage Town, Pondicherry – 605001, India.
              <br />
              <span style={{ color: "#acd733" }}>Landmark: Opposite Varadaraja Perumal Temple</span>
            </div>
            <div className="footer-tamil-slogan">
              “EVK Siddha Clinic – Traditionally Redefining Wellness Through Siddha Medicine, Personalized Healthcare, Diet, Yoga and Wellness Tourism.”
            </div>
            <div className="footer-copyright">
              © {new Date().getFullYear()} EVK Siddha Clinic. 10+ Years of Experience · Providing Siddha healthcare services since 2016. Under Dr. Karthigadevi, B.S.M.S.
            </div>
          </div>

          <div className="footer-portrait">
            <img src={images.hero} alt="Dr. Karthigadevi" />
          </div>
        </div>
      </footer>

      {/* Floating Call & WhatsApp Quick Buttons */}
      <div className="floating-actions">
        <a
          className="floating-btn whatsapp"
          href="https://wa.me/916374514716?text=Hello%20Dr.%20Karthigadevi,%20I%20would%20like%20to%20consult%20at%20EVK%20Siddha%20Clinic"
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
          aria-label="Call EVK Siddha Clinic"
        >
          <Phone size={22} />
          <span className="floating-tooltip">Call +91 6374514716</span>
        </a>
      </div>
    </main>
  );
}
