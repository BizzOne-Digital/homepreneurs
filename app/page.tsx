"use client";
import Link from "next/link";

const services = [
  {
    name: "Poo Be Gone",
    tag: "Go2U Service",
    desc: "Yard cleanup for pet owners — a recurring, subscription-friendly business with zero inventory.",
    href: "/services/poo-be-gone",
    color: "#8B5E3C",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="#F5C518" strokeWidth="1.5"/>
        <path d="M10 18c0-3 2-5 6-5s6 2 6 5" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="13" cy="14" r="1.5" fill="#F5C518"/>
        <circle cx="19" cy="14" r="1.5" fill="#F5C518"/>
        <path d="M13 21h6" stroke="#6AAB00" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Porch Pirates",
    tag: "Sign Marketing",
    desc: "Outdoor promotional signage for contractors and realtors. We turn $100 into thousands.",
    href: "/services/porch-pirates",
    color: "#1A1A2E",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="18" height="12" rx="1" stroke="#F5C518" strokeWidth="1.5"/>
        <path d="M13 20v6M9 26h8" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 12l6-2v8l-6-2" stroke="#6AAB00" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 12h10M7 16h8" stroke="#6AAB00" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Mobile Mechanix",
    tag: "Go2U Service",
    desc: "Small maintenance, seasonal tire rotation, and pre-sale vehicle inspections. On-demand, mobile.",
    href: "/services/mobile-mechanix",
    color: "#0D2B1A",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#F5C518" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="5" stroke="#6AAB00" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="2" fill="#F5C518"/>
        <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "BluCallers",
    tag: "Remote Reception",
    desc: "Industry-trained remote operators for busy contractors. Talk the Tech. Answer every call.",
    href: "/services/blucallers",
    color: "#0A1628",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 8h16a2 2 0 012 2v8a2 2 0 01-2 2H12l-6 4v-4H8a2 2 0 01-2-2v-8a2 2 0 012-2z" stroke="#F5C518" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="12" cy="14" r="1.5" fill="#6AAB00"/>
        <circle cx="16" cy="14" r="1.5" fill="#6AAB00"/>
        <circle cx="20" cy="14" r="1.5" fill="#6AAB00"/>
      </svg>
    ),
  },
  {
    name: "ECO Panels",
    tag: "Go2U Service",
    desc: "Solar panel performance optimization. No chemicals, no streaks, no ladders. Clean Panels makes Cents.",
    href: "/services/eco-panels",
    color: "#0D2600",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="10" r="4" stroke="#F5C518" strokeWidth="1.5"/>
        <path d="M16 14v4M10 26h12M12 26l2-8M20 26l-2-8" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 20h16" stroke="#6AAB00" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 10l4 4M28 10l-4 4M4 20l4-4M28 20l-4-4" stroke="#6AAB00" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
];

const audiences = [
  { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4l2.5 7H23l-5.5 4 2 7L14 18l-5.5 4 2-7L5 11h6.5L14 4z" stroke="#F5C518" strokeWidth="1.5" strokeLinejoin="round"/></svg>, title: "Veterans", desc: "Built for discipline and execution — your training is your competitive edge." },
  { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4C10 4 7 7 7 11c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" stroke="#F5C518" strokeWidth="1.5"/><circle cx="14" cy="11" r="2.5" fill="#6AAB00"/></svg>, title: "Injured Trades Pros", desc: "Pivot without losing your expertise. These businesses work on your terms." },
  { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="16" rx="2" stroke="#F5C518" strokeWidth="1.5"/><path d="M4 11h20M9 16h4M9 19h6" stroke="#6AAB00" strokeWidth="1.5" strokeLinecap="round"/></svg>, title: "Downsized Professionals", desc: "Corporate experience becomes your biggest asset. You already know how to run things." },
  { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="4" stroke="#F5C518" strokeWidth="1.5"/><path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round"/><path d="M20 8l4 2M20 12l4-2" stroke="#6AAB00" strokeWidth="1.5" strokeLinecap="round"/></svg>, title: "Franchise Seekers", desc: "Traditional franchising too expensive or rigid? Same proven systems, a fraction of the cost." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: "#0D0D0D",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "68px",
      }}>
        {/* Hero background image */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(13,13,13,0.75) 0%, rgba(13,13,13,0.35) 40%, rgba(13,13,13,0.85) 100%)" }} />

        {/* Background accent lines */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04 }}>
          {[...Array(8)].map((_, i) => (
            <div key={i} style={{
              position: "absolute",
              top: 0, bottom: 0,
              left: `${i * 14}%`,
              width: "1px",
              background: "#F5C518",
            }} />
          ))}
        </div>
        {/* Yellow accent blob */}
        <div style={{ position: "absolute", right: "-10%", top: "15%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", left: "-5%", bottom: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(106,171,0,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />

        <div className="container-xl section-pad" style={{ paddingTop: "5rem", paddingBottom: "5rem", position: "relative", zIndex: 1 }}>
          <div className="animate-fade-up" style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <div className="tag" style={{ marginBottom: "1.5rem" }}>A New Class of Entrepreneur</div>
            <h1 className="display-heading" style={{ color: "#F9F7F2", marginBottom: "1.5rem" }}>
              Build a Real Business.<br />
              <span style={{ color: "#F5C518" }}>On Your Terms.</span><br />
              <span style={{ color: "#6AAB00" }}>Under $50K.</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#9E9E9E", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
              The Homepreneur™ EcoSystem is a proven alternative to traditional franchising — home-based businesses built for fast cashflow, no equipment, and zero rigid rules.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/contact" className="btn-yellow">Get Your Business →</Link>
              <Link href="/about" className="btn-outline">Learn More</Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.5 }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#F5C518", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #F5C518, transparent)" }} />
        </div>

        <style>{`@media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* TICKER */}
      <div className="reveal reveal-fade" style={{ background: "#F5C518", padding: "0.85rem 0", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "3rem", animation: "ticker 20s linear infinite", whiteSpace: "nowrap", width: "max-content" }}>
          {[...Array(3)].map((_, i) =>
            ["No Equipment Required", "No Franchise Restrictions", "Under $50K All-In", "Proven Systems", "Fast Cashflow", "Home-Based Freedom", "Multiple Income Streams"].map(t => (
              <span key={`${i}-${t}`} style={{ fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0D0D0D", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                {t} <span style={{ color: "#6AAB00" }}>◆</span>
              </span>
            ))
          )}
        </div>
        <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
      </div>

      {/* WHAT IS HOMEPRENEURS */}
      <section className="section-pad" style={{ background: "#F9F7F2" }}>
        <div className="container-xl">
          <div className="grid-2col" style={{ gap: "5rem", alignItems: "center" }}>
            <div className="reveal reveal-up">
              <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>What We Offer</div>
              <h2 className="display-heading reveal reveal-up" style={{ marginBottom: "1.5rem", color: "#0D0D0D" }}>
                Not a Franchise.<br />
                <span style={{ color: "#6AAB00" }}>Something Better.</span>
              </h2>
              <p className="reveal reveal-fade delay-100" style={{ fontSize: "1rem", color: "#555", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                Traditional franchises lock you into one model, one territory, and one rigid playbook — often for $200K+. Homepreneurs™ licenses proven business systems that you own and operate from home, with full flexibility to stack multiple income streams.
              </p>
              <p className="reveal reveal-fade delay-200" style={{ fontSize: "1rem", color: "#555", lineHeight: 1.85, marginBottom: "2rem" }}>
                Every business in our EcoSystem is under $50K all-in. No equipment to buy. No commercial lease. No royalty stranglehold. Just proven systems built for fast cashflow.
              </p>
              <Link href="/about" className="btn-yellow reveal reveal-up delay-300">Explore the EcoSystem →</Link>
            </div>
            <div className="reveal reveal-scale" style={{ position: "relative" }}>
              <img
                src="/homea.png"
                alt="Home-based entrepreneur working"
                style={{ width: "100%", height: "480px", objectFit: "cover", display: "block" }}
              />
              <div className="reveal reveal-up delay-100" style={{ position: "absolute", bottom: "1.5rem", left: "-1.5rem", background: "#0D0D0D", padding: "1.25rem 1.5rem", border: "1px solid rgba(245,197,24,0.3)" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#F5C518" }}>5+</div>
                <div style={{ fontSize: "0.8rem", color: "#9E9E9E", fontWeight: 500 }}>Active Business Models</div>
              </div>
              <div className="reveal reveal-up delay-200" style={{ position: "absolute", top: "1.5rem", right: "-1.5rem", background: "#F5C518", padding: "1rem 1.25rem" }}>
                <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#0D0D0D" }}>$50K</div>
                <div style={{ fontSize: "0.72rem", color: "#333", fontWeight: 700 }}>Max all-in cost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section-pad" style={{ background: "#0D0D0D" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>Who It's For</div>
            <h2 className="display-heading reveal reveal-up delay-100" style={{ color: "#F9F7F2" }}>Built for People Who<br /><span style={{ color: "#F5C518" }}>Are Ready to Own Something</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {audiences.map((a, i) => (
              <div key={a.title} className={`card-dark stripe-accent reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`} style={{ paddingLeft: "2rem" }}>
                <div style={{ marginBottom: "1.2rem" }}>{a.icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#F9F7F2", marginBottom: "0.75rem" }}>{a.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#9E9E9E", lineHeight: 1.75 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad" style={{ background: "#F9F7F2" }}>
        <div className="container-xl">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div className="reveal reveal-up">
              <div className="section-label" style={{ marginBottom: "1rem" }}>Our Services</div>
              <h2 className="display-heading" style={{ color: "#0D0D0D" }}>5 Businesses.<br /><span style={{ color: "#6AAB00" }}>One EcoSystem.</span></h2>
            </div>
            <Link href="/services/mobile-mechanix" className="reveal reveal-fade" style={{ color: "#6AAB00", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>View All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {services.map((s, i) => (
              <Link key={s.name} href={s.href} style={{ textDecoration: "none" }}>
                <div className={`card-light reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`} style={{ height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                    {s.icon}
                    <div>
                      <div className="tag tag-green" style={{ fontSize: "0.65rem", marginBottom: "4px" }}>{s.tag}</div>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0D0D0D" }}>{s.name}</h3>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.75, marginBottom: "1.25rem" }}>{s.desc}</p>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#6AAB00", display: "flex", alignItems: "center", gap: "6px" }}>
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: "#F5C518", padding: "5rem 1.5rem" }}>
        <div className="container-xl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div className="reveal reveal-up">
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 900, color: "#0D0D0D", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              Ready to Stop Working<br />for Someone Else?
            </h2>
            <p style={{ fontSize: "1rem", color: "#333", marginTop: "0.75rem" }}>Own more than one business. Build stacked income. Under $50K each.</p>
          </div>
          <div className="reveal reveal-up delay-100" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#0D0D0D", color: "#F5C518", fontWeight: 700, padding: "1rem 2rem", textDecoration: "none", fontSize: "1rem", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}>
              Book a Call →
            </Link>
            <Link href="/pricing" style={{ border: "2px solid #0D0D0D", color: "#0D0D0D", fontWeight: 700, padding: "1rem 2rem", textDecoration: "none", fontSize: "1rem", background: "transparent", display: "inline-block" }}>
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* PHOTO SECTION */}
      <section style={{ background: "#0D0D0D", padding: "0" }}>
        <div className="grid-3col">
          {[
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
            "https://images.unsplash.com/photo-1758873272445-433c7a832584?q=80",
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
          ].map((src, i) => (
            <div key={i} className={`reveal reveal-scale photo-tile ${["","delay-100","delay-200"][i % 3]}`} style={{ overflow: "hidden", position: "relative" }}>
              <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(40%) contrast(1.1)", transition: "transform 0.5s" }}
                onMouseEnter={e => (e.target as HTMLElement).style.transform = "scale(1.05)"}
                onMouseLeave={e => (e.target as HTMLElement).style.transform = "scale(1)"}
              />
              <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,0.35)" }} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
