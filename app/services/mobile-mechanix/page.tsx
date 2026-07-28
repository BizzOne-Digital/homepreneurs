"use client";
import Link from "next/link";

const features = [
  { title: "Seasonal Tire Rotation", desc: "Customers book online, you go to them. No shop, no overhead." },
  { title: "Small Maintenance Work", desc: "Oil changes, fluid checks, battery replacements — high demand, repeat business." },
  { title: "Pre-Sale Vehicle Inspections", desc: "Tap into the used car market. Fast turnaround, premium pricing." },
  { title: "Mobile-First Operation", desc: "Everything runs from your vehicle. No commercial property required." },
];

export default function MobileMechanixPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#0D0D0D", padding: "10rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1400&q=80') center/cover", opacity: 0.12 }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span className="tag">Go2U Service</span>
            <span className="tag tag-green">Automotive</span>
          </div>
          <h1 className="display-heading" style={{ color: "#F9F7F2", marginBottom: "0.5rem" }}>
            <span style={{ color: "#F5C518" }}>Mobile</span><br />Mechanix
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#9E9E9E", maxWidth: "560px", lineHeight: 1.85, margin: "1.5rem 0 2.5rem" }}>
            A Go2U automotive service — small maintenance, seasonal tire rotation, and pre-sale vehicle inspections. On-demand, mobile, and built for fast cashflow.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-yellow">Inquire About This Business →</Link>
            <Link href="/pricing" className="btn-outline">View Investment</Link>
          </div>
        </div>
      </section>

      {/* LOGO / BRAND SECTION */}
      <section style={{ background: "#1A1A1A", padding: "3rem 1.5rem" }}>
        <div className="container-xl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div className="reveal reveal-up" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div style={{ background: "#0D0D0D", padding: "1.5rem 2rem", border: "1px solid rgba(245,197,24,0.3)" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#F5C518" }}>MOBILE</div>
              <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#6AAB00" }}>MECHANIX</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9E9E9E", fontWeight: 700 }}>A GO2U TIRE SERVICE</div>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9E9E9E", marginBottom: "8px" }}>Brand Colours</div>
              <div style={{ display: "flex", gap: "8px" }}>
                {["#F5C518", "#6AAB00", "#0D0D0D", "#fff"].map(c => (
                  <div key={c} style={{ width: "32px", height: "32px", background: c, border: "1px solid rgba(255,255,255,0.15)" }} title={c} />
                ))}
              </div>
            </div>
          </div>
          <div className="reveal reveal-up delay-100">
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9E9E9E", marginBottom: "8px" }}>Investment</div>
            <div style={{ fontSize: "2rem", fontWeight: 900, color: "#F5C518" }}>Under $50K</div>
            <div style={{ fontSize: "0.85rem", color: "#9E9E9E" }}>All-in, no hidden costs</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-pad" style={{ background: "#F9F7F2" }}>
        <div className="container-xl">
          <div className="grid-2col" style={{ gap: "5rem", alignItems: "center" }}>
            <div>
              <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>What You Operate</div>
              <h2 className="reveal reveal-up" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 900, color: "#0D0D0D", lineHeight: 1.1, marginBottom: "2.5rem" }}>
                High Demand.<br /><span style={{ color: "#6AAB00" }}>Repeat Customers.<br />Zero Location Costs.</span>
              </h2>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {features.map((f, i) => (
                  <div key={f.title} className={`reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, width: "8px", height: "8px", background: "#F5C518", marginTop: "7px" }} />
                    <div>
                      <h4 style={{ fontWeight: 800, color: "#0D0D0D", marginBottom: "4px" }}>{f.title}</h4>
                      <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.7 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-scale">
              <img src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=700&q=80" alt="Mobile mechanic" style={{ width: "100%", height: "460px", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-pad" style={{ background: "#0D0D0D" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {[
              { val: "$0", sub: "Equipment to purchase" },
              { val: "$0", sub: "Commercial property" },
              { val: "Week 1", sub: "Potential first revenue" },
              { val: "100%", sub: "Mobile operation" },
            ].map((s, i) => (
              <div key={s.sub} className={`reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`} style={{ background: "#1A1A1A", padding: "2rem", borderTop: "3px solid #F5C518", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#F5C518" }}>{s.val}</div>
                <div style={{ fontSize: "0.85rem", color: "#9E9E9E", marginTop: "0.5rem" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <section className="grid-2col">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="" className="photo-tile-tall" style={{ width: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ background: "#F5C518", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem" }}>
          <h3 className="reveal reveal-up" style={{ fontSize: "clamp(1.4rem,2.5vw,2.2rem)", fontWeight: 900, color: "#0D0D0D", textAlign: "center", marginBottom: "1.5rem" }}>Ready to Get Behind the Wheel of Your Own Business?</h3>
          <Link href="/contact" className="reveal reveal-up delay-100" style={{ background: "#0D0D0D", color: "#F5C518", fontWeight: 700, padding: "1rem 2rem", textDecoration: "none", fontSize: "0.95rem" }}>
            Apply Now →
          </Link>
        </div>
      </section>

      {/* Other services */}
      <section className="section-pad" style={{ background: "#F9F7F2" }}>
        <div className="container-xl">
          <h3 className="reveal reveal-up" style={{ fontSize: "1.2rem", fontWeight: 900, color: "#0D0D0D", marginBottom: "1.5rem" }}>Other Homepreneur™ Businesses</h3>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {[
              { name: "Poo Be Gone", href: "/services/poo-be-gone" },
              { name: "Porch Pirates", href: "/services/porch-pirates" },
              { name: "BluCallers", href: "/services/blucallers" },
              { name: "ECO Panels", href: "/services/eco-panels" },
            ].map((s, i) => (
              <Link key={s.href} href={s.href} className={`reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`} style={{ border: "1px solid #E8E4DA", padding: "0.75rem 1.25rem", textDecoration: "none", color: "#0D0D0D", fontWeight: 700, fontSize: "0.9rem", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "#F5C518"; (e.target as HTMLElement).style.color = "#6AAB00"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "#E8E4DA"; (e.target as HTMLElement).style.color = "#0D0D0D"; }}>
                {s.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
