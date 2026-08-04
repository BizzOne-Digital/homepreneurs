"use client";
import Link from "next/link";

const businesses = [
  { name: "Poo Be Gone", tag: "Go2U", desc: "Pet waste removal — recurring, subscription-friendly service model.", cashflow: "Week 1–2", overhead: "Zero", href: "/services/poo-be-gone" },
  { name: "Porch Pirates", tag: "Signs", desc: "Outdoor promotional signage for contractors and realtors.", cashflow: "Week 1", overhead: "Zero", href: "/services/porch-pirates" },
  { name: "Mobile Mechanix", tag: "Go2U", desc: "Mobile automotive maintenance and tire service on demand.", cashflow: "Week 1–2", overhead: "Low", href: "/services/mobile-mechanix" },
  { name: "Blu Callers", tag: "Remote", desc: "Remote reception and call management for busy contractors.", cashflow: "Week 2–3", overhead: "Zero", href: "/services/blucallers" },
  { name: "ECO Panels", tag: "Go2U", desc: "Solar panel cleaning system using European hardware.", cashflow: "Week 1–2", overhead: "Low", href: "/services/eco-panels" },
];

const compare = [
  { feature: "Startup Cost", franchise: "$150K – $500K+", homepreneur: "Under $50K each" },
  { feature: "Equipment", franchise: "Often required", homepreneur: "Not required" },
  { feature: "Commercial Lease", franchise: "Usually required", homepreneur: "None" },
  { feature: "Royalties", franchise: "5%–12% of revenue", homepreneur: "None" },
  { feature: "Territory Restrictions", franchise: "Fixed zone, limited", homepreneur: "Flexible" },
  { feature: "Multiple Businesses", franchise: "Rare, very expensive", homepreneur: "Stack as many as you want" },
  { feature: "Work Location", franchise: "Fixed location", homepreneur: "Home-based, mobile" },
  { feature: "Training Support", franchise: "Yes", homepreneur: "Yes" },
  { feature: "Proven Systems", franchise: "Yes", homepreneur: "Yes" },
];

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#0D0D0D", padding: "10rem 1.5rem 6rem" }}>
        <div className="container-xl">
          <div className="tag reveal reveal-up" style={{ marginBottom: "1.5rem" }}>Investment Overview</div>
          <h1 className="display-heading reveal reveal-up delay-100" style={{ color: "#F9F7F2", marginBottom: "1.5rem" }}>
            Under $50K.<br /><span style={{ color: "#F5C518" }}>All-In. Every Business.</span>
          </h1>
          <p className="reveal reveal-fade delay-200" style={{ fontSize: "1.1rem", color: "#9E9E9E", maxWidth: "560px", lineHeight: 1.85 }}>
            No equipment purchases. No leases. No franchise restrictions. Just proven business systems built for fast cashflow from day one.
          </p>
        </div>
      </section>

      {/* KEY MESSAGE */}
      <section style={{ background: "#F5C518", padding: "3rem 1.5rem" }}>
        <div className="container-xl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div className="reveal reveal-up">
            <div style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#333", marginBottom: "0.5rem" }}>The Homepreneurs™ Promise</div>
            <p className="reveal reveal-fade delay-100" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0D0D0D", maxWidth: "600px" }}>
              Every business in our EcoSystem is priced for real people — not corporations. No hidden fees, no royalty trap, no territory battles.
            </p>
          </div>
          <Link href="/contact" className="reveal reveal-up delay-200" style={{ background: "#0D0D0D", color: "#F5C518", fontWeight: 700, padding: "1rem 2rem", textDecoration: "none", fontSize: "1rem", whiteSpace: "nowrap" }}>
            Get Exact Pricing →
          </Link>
        </div>
      </section>

      {/* BUSINESSES */}
      <section className="section-pad" style={{ background: "#F9F7F2" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>Available Businesses</div>
            <h2 className="display-heading reveal reveal-up delay-100" style={{ color: "#0D0D0D" }}>Choose Your Business.<br /><span style={{ color: "#6AAB00" }}>Or Choose All Five.</span></h2>
          </div>
          <div style={{ display: "grid", gap: "1rem" }}>
            {businesses.map((b, i) => (
              <Link key={b.name} href={b.href} style={{ textDecoration: "none" }}>
                <div className={`reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`} style={{ background: "#fff", border: "1px solid #E8E4DA", padding: "1.75rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#F5C518"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(245,197,24,0.12)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#E8E4DA"; (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                      <span className="tag tag-green" style={{ fontSize: "0.65rem" }}>{b.tag}</span>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0D0D0D" }}>{b.name}</h3>
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "#555" }}>{b.desc}</p>
                  </div>
                  <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "0.7rem", color: "#9E9E9E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>First Revenue</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#6AAB00" }}>{b.cashflow}</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "0.7rem", color: "#9E9E9E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Overhead</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0D0D0D" }}>{b.overhead}</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "0.7rem", color: "#9E9E9E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Investment</div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#F5C518" }}>Under $50K</div>
                    </div>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M12 5l5 5-5 5" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="reveal reveal-up" style={{ marginTop: "2rem", background: "#0D0D0D", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", color: "#F5C518", textTransform: "uppercase", marginBottom: "0.5rem" }}>Stack Multiple Businesses</div>
              <p className="reveal reveal-fade delay-100" style={{ color: "#9E9E9E", fontSize: "0.95rem" }}>Own more than one Homepreneurs™ business and build a stacked-income portfolio — all under $50K each. <span style={{ color: "#F5C518", fontWeight: 700 }}>"Stacking"</span> means adding a second or third location, or another business from the EcoSystem, to layer additional revenue streams on top of what you already earn.</p>
            </div>
            <Link href="/contact" className="btn-yellow reveal reveal-up delay-200">Talk to Us About Stacking →</Link>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section-pad" style={{ background: "#0D0D0D" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>Side by Side</div>
            <h2 className="display-heading reveal reveal-up delay-100" style={{ color: "#F9F7F2" }}>Homepreneurs™ vs.<br /><span style={{ color: "#F5C518" }}>Traditional Franchise</span></h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ padding: "1rem 1.25rem", textAlign: "left", color: "#9E9E9E", fontSize: "0.8rem", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Feature</th>
                  <th style={{ padding: "1rem 1.25rem", textAlign: "center", color: "#9E9E9E", fontSize: "0.8rem", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>Traditional Franchise</th>
                  <th style={{ padding: "1rem 1.25rem", textAlign: "center", background: "rgba(245,197,24,0.08)", color: "#F5C518", fontSize: "0.8rem", fontWeight: 700, borderBottom: "1px solid rgba(245,197,24,0.3)", borderLeft: "1px solid rgba(245,197,24,0.3)", borderRight: "1px solid rgba(245,197,24,0.3)" }}>Homepreneurs™</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr key={row.feature} className={`reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td style={{ padding: "1rem 1.25rem", color: "#9E9E9E", fontSize: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{row.feature}</td>
                    <td style={{ padding: "1rem 1.25rem", textAlign: "center", color: "#666", fontSize: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{row.franchise}</td>
                    <td style={{ padding: "1rem 1.25rem", textAlign: "center", color: "#6AAB00", fontSize: "0.9rem", fontWeight: 700, background: "rgba(245,197,24,0.05)", borderBottom: "1px solid rgba(245,197,24,0.1)", borderLeft: "1px solid rgba(245,197,24,0.15)", borderRight: "1px solid rgba(245,197,24,0.15)" }}>{row.homepreneur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#F5C518", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div className="container-xl">
          <h2 className="reveal reveal-up" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#0D0D0D", marginBottom: "1rem" }}>Exact Pricing Is<br />One Conversation Away</h2>
          <p className="reveal reveal-fade delay-100" style={{ color: "#333", marginBottom: "2rem" }}>Fill out our contact form and we'll walk you through investment details for the business that fits your goals.</p>
          <Link href="/contact" className="reveal reveal-up delay-200" style={{ background: "#0D0D0D", color: "#F5C518", fontWeight: 700, padding: "1rem 2.5rem", textDecoration: "none", fontSize: "1rem" }}>Contact Us Now →</Link>
        </div>
      </section>
    </>
  );
}
