import Link from "next/link";

export default function EcoPanelsPage() {
  return (
    <>
      <section style={{ background: "#0D2600", padding: "10rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80') center/cover", opacity: 0.15 }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div className="reveal reveal-up" style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span className="tag">Go2U Service</span>
            <span className="tag tag-green">Solar Optimization</span>
          </div>
          <img src="/panelperfom.png" alt="ECO Panel Performance" className="reveal reveal-up delay-100" style={{ maxWidth: "320px", width: "100%", height: "auto", marginBottom: "0.5rem", display: "block" }} />
          <p className="reveal reveal-fade delay-200" style={{ fontSize: "1.3rem", fontWeight: 800, color: "#6AAB00", margin: "1rem 0" }}>Clean Panels makes Cents.</p>
          <p className="reveal reveal-fade delay-300" style={{ fontSize: "1.1rem", color: "#9E9E9E", maxWidth: "540px", lineHeight: 1.85, marginBottom: "2.5rem" }}>
            Solar panel performance optimization using the latest European hardware. No chemicals. No streaks. No ladders. Maximum energy output for your clients.
          </p>
          <div className="reveal reveal-up delay-400" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-yellow">Inquire About This Business →</Link>
            <Link href="/pricing" className="btn-outline">View Investment</Link>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#F9F7F2" }}>
        <div className="container-xl">
          <div className="grid-2col" style={{ gap: "5rem", alignItems: "center" }}>
            <img className="reveal reveal-left" src="https://images.unsplash.com/photo-1560472355-536de3962603?w=700&q=80" alt="Solar panels" style={{ width: "100%", height: "440px", objectFit: "cover" }} />
            <div>
              <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>Why It Matters</div>
              <h2 className="reveal reveal-up delay-100" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 900, color: "#0D0D0D", marginBottom: "1.5rem" }}>Dirty Panels Lose<br /><span style={{ color: "#6AAB00" }}>Up to 30% Efficiency</span></h2>
              <p className="reveal reveal-fade delay-200" style={{ color: "#555", lineHeight: 1.85, marginBottom: "1.25rem" }}>Every solar panel owner is a potential customer — and most have never had their panels cleaned professionally. Dirty panels reduce power output by up to 30%, costing homeowners real money.</p>
              <p className="reveal reveal-fade delay-300" style={{ color: "#555", lineHeight: 1.85, marginBottom: "1.25rem" }}>ECO Panels uses specialized European waterless hardware — no chemicals, no streaks, and no ladder access required on most systems. Safe, fast, and in demand.</p>
              <p className="reveal reveal-fade delay-400" style={{ color: "#555", lineHeight: 1.85, marginBottom: "2rem" }}>With solar adoption growing fast in Canada and the US, this is a market that will compound for years.</p>
              <Link href="/contact" className="btn-yellow reveal reveal-up delay-500">Get Investment Details →</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0D0D0D", padding: "5rem 1.5rem" }}>
        <div className="container-xl" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
          {[
            ["No Chemicals", "Safe for panels and environment"],
            ["No Ladders", "Ground-level European system"],
            ["No Streaks", "Professional finish guaranteed"],
            ["Under $50K", "All-in investment"],
          ].map(([k, v], i) => (
            <div key={k} className={`reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`} style={{ background: "#1A1A1A", padding: "2rem", borderTop: "3px solid #6AAB00" }}>
              <div style={{ fontSize: "1rem", fontWeight: 900, color: "#6AAB00", marginBottom: "0.5rem" }}>{k}</div>
              <div style={{ fontSize: "0.85rem", color: "#9E9E9E", lineHeight: 1.6 }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div className="container-xl" style={{ textAlign: "center" }}>
          <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>Ready-Made Marketing</div>
          <h2 className="reveal reveal-up delay-100" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 900, color: "#F9F7F2", marginBottom: "1rem" }}>
            Professional Campaigns.<br /><span style={{ color: "#6AAB00" }}>Built and Ready to Launch.</span>
          </h2>
          <p className="reveal reveal-fade delay-200" style={{ color: "#9E9E9E", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
            Every ECO Panels business comes with branded marketing assets already created — no design work, no guesswork.
          </p>
          <img src="/promo2.jpg" alt="ECO Panels marketing flyer" className="reveal reveal-scale delay-300" style={{ maxWidth: "380px", width: "100%", height: "auto", border: "1px solid rgba(106,171,0,0.25)", display: "block", margin: "0 auto" }} />
        </div>
      </section>

      <section style={{ background: "#F5C518", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div className="container-xl">
          <h2 className="reveal reveal-up" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#0D0D0D", marginBottom: "1rem" }}>Clean Panels.<br />Clean Profits.</h2>
          <Link href="/contact" className="reveal reveal-up delay-100" style={{ background: "#0D0D0D", color: "#F5C518", fontWeight: 700, padding: "1rem 2.5rem", textDecoration: "none", fontSize: "1rem" }}>Apply Now →</Link>
        </div>
      </section>
    </>
  );
}
