import Link from "next/link";

export default function BluCallersPage() {
  return (
    <>
      <section style={{ background: "#0A1628", padding: "10rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "45%", background: "url('https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80') center/cover", opacity: 0.15 }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div className="reveal reveal-up" style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span className="tag">Remote Reception</span>
            <span className="tag tag-green">Contractor Tech</span>
          </div>
          <h1 className="display-heading reveal reveal-up" style={{ color: "#F9F7F2" }}>
            <span style={{ color: "#F5C518" }}>Blu</span>Callers
          </h1>
          <p className="reveal reveal-fade" style={{ fontSize: "1.3rem", fontWeight: 700, color: "#6AAB00", margin: "1rem 0" }}>Talk the Tech.</p>
          <p className="reveal reveal-fade delay-100" style={{ fontSize: "1.1rem", color: "#9E9E9E", maxWidth: "540px", lineHeight: 1.85, marginBottom: "2.5rem" }}>
            Remote reception for busy contractors using the latest software and industry-trained operators. Never miss a lead again.
          </p>
          <div className="reveal reveal-up delay-200" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-yellow">Inquire About This Business →</Link>
            <Link href="/pricing" className="btn-outline">View Investment</Link>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#F9F7F2" }}>
        <div className="container-xl">
          <div className="grid-2col" style={{ gap: "5rem", alignItems: "center" }}>
            <div>
              <div className="section-label reveal reveal-fade" style={{ marginBottom: "1rem" }}>The Service</div>
              <h2 className="reveal reveal-up" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 900, color: "#0D0D0D", marginBottom: "1.5rem" }}>Every Contractor's<br /><span style={{ color: "#6AAB00" }}>Missed Call Is<br />Your Opportunity</span></h2>
              <p className="reveal reveal-fade" style={{ color: "#555", lineHeight: 1.85, marginBottom: "1.25rem" }}>Contractors are on job sites — not answering phones. BluCallers provides industry-trained remote operators who answer as the client's own team, using the latest scheduling and CRM software.</p>
              <p className="reveal reveal-fade delay-100" style={{ color: "#555", lineHeight: 1.85, marginBottom: "2rem" }}>This is a B2B model — you sign contractor clients on monthly retainers. Recurring, predictable revenue with low overhead.</p>
              <Link href="/contact" className="btn-yellow reveal reveal-up delay-200">Get Investment Details →</Link>
            </div>
            <img className="reveal reveal-left" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" alt="Remote work" style={{ width: "100%", height: "440px", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <section style={{ background: "#0D0D0D", padding: "5rem 1.5rem" }}>
        <div className="container-xl" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {[
            { val: "B2B", label: "Monthly retainer model" },
            { val: "Remote", label: "100% work from home" },
            { val: "Software", label: "Only overhead required" },
            { val: "Under $50K", label: "All-in investment" },
          ].map((s, i) => (
            <div key={s.label} className={`reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`} style={{ background: "#1A1A1A", padding: "2rem", textAlign: "center", borderTop: "3px solid #F5C518" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#F5C518" }}>{s.val}</div>
              <div style={{ fontSize: "0.85rem", color: "#9E9E9E", marginTop: "0.5rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div className="container-xl" style={{ textAlign: "center" }}>
          <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>Ready-Made Marketing</div>
          <h2 className="reveal reveal-up delay-100" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 900, color: "#F9F7F2", marginBottom: "1rem" }}>
            Live Ad Campaigns.<br /><span style={{ color: "#F5C518" }}>Already Generating Leads.</span>
          </h2>
          <p className="reveal reveal-fade delay-200" style={{ color: "#9E9E9E", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
            Every BluCallers business comes with proven ad creative and a recognizable brand mark already built — no design work, no guesswork.
          </p>
          <div className="reveal reveal-scale delay-300" style={{ position: "relative", display: "inline-block" }}>
            <img src="/promoimg1.jpg" alt="BluCallers remote reception ad campaign" style={{ maxWidth: "380px", width: "100%", height: "auto", border: "1px solid rgba(245,197,24,0.2)", display: "block", borderRadius: "8px" }} />
            <img src="/promologo3.jpg" alt="BluCallers brand mark" style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", width: "84px", height: "84px", borderRadius: "50%", background: "#fff", border: "3px solid #0D0D0D", boxShadow: "0 6px 20px rgba(0,0,0,0.4)", padding: "10px" }} />
          </div>
        </div>
      </section>

      <section style={{ background: "#F5C518", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div className="container-xl">
          <h2 className="reveal reveal-up" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#0D0D0D", marginBottom: "1rem" }}>Talk the Tech.<br />Build the Business.</h2>
          <Link href="/contact" className="reveal reveal-up delay-100" style={{ background: "#0D0D0D", color: "#F5C518", fontWeight: 700, padding: "1rem 2.5rem", textDecoration: "none", fontSize: "1rem" }}>Apply Now →</Link>
        </div>
      </section>
    </>
  );
}
