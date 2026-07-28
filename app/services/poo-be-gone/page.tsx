import Link from "next/link";

export default function PooBeGonePage() {
  return (
    <>
      <section style={{ background: "#0D0D0D", padding: "10rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=1400&q=80') center/cover", opacity: 0.1 }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div className="reveal reveal-up" style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span className="tag">Go2U Service</span>
            <span className="tag tag-green">Pet Services</span>
          </div>
          <h1 className="display-heading reveal reveal-up" style={{ color: "#F9F7F2", marginBottom: "0.5rem" }}>
            <span style={{ color: "#F5C518" }}>Poo Be</span><br />Gone
          </h1>
          <p className="reveal reveal-fade" style={{ fontSize: "1.1rem", color: "#9E9E9E", maxWidth: "520px", lineHeight: 1.85, margin: "1.5rem 0 2.5rem" }}>
            A recurring, subscription-friendly yard cleanup service for pet owners. Zero inventory, zero equipment overhead, and a customer base that books you every single week.
          </p>
          <div className="reveal reveal-up" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-yellow">Inquire About This Business →</Link>
            <Link href="/pricing" className="btn-outline">View Investment</Link>
          </div>
        </div>
      </section>

      <section style={{ background: "#1A1A1A", padding: "3rem 1.5rem" }}>
        <div className="container-xl" style={{ display: "flex", alignItems: "center", gap: "3rem", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
            {[["Subscription", "Recurring revenue weekly"], ["Zero Inventory", "No products to stock"], ["Under $50K", "All-in investment"], ["Week 1", "First possible revenue"]].map(([k, v], i) => (
              <div key={k} className={`reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`}>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#9E9E9E", textTransform: "uppercase", marginBottom: "4px" }}>{k}</div>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "#F5C518" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#F9F7F2" }}>
        <div className="container-xl">
          <div className="grid-2col" style={{ gap: "5rem", alignItems: "center" }}>
            <div>
              <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>The Opportunity</div>
              <h2 className="reveal reveal-up" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 900, color: "#0D0D0D", marginBottom: "1.5rem" }}>Pet Owners Are Everywhere.<br /><span style={{ color: "#6AAB00" }}>And They All Need This.</span></h2>
              <p className="reveal reveal-fade" style={{ color: "#555", lineHeight: 1.85, marginBottom: "1.25rem" }}>Canada and the US have tens of millions of dog owners. Most of them have yards. None of them enjoy cleaning them. Poo Be Gone fills a real, unglamorous need that creates extremely loyal, repeat customers.</p>
              <p className="reveal reveal-fade delay-100" style={{ color: "#555", lineHeight: 1.85, marginBottom: "2rem" }}>Route-based scheduling means you're earning before 10am and done before noon. Low startup. Low overhead. High retention rate.</p>
              <Link href="/contact" className="btn-yellow reveal reveal-up">Get Investment Details →</Link>
            </div>
            <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80" alt="Pet service" className="reveal reveal-scale" style={{ width: "100%", height: "440px", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div className="container-xl" style={{ textAlign: "center" }}>
          <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>Ready-Made Marketing</div>
          <h2 className="reveal reveal-up delay-100" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 900, color: "#F9F7F2", marginBottom: "1rem" }}>
            Professional Campaigns.<br /><span style={{ color: "#F5C518" }}>Built and Ready to Launch.</span>
          </h2>
          <p className="reveal reveal-fade delay-200" style={{ color: "#9E9E9E", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
            Every Poo Be Gone business comes with branded marketing assets already created — no design work, no guesswork.
          </p>
          <img src="/promo4.jpg" alt="Poo Be Gone marketing flyer" className="reveal reveal-scale delay-300" style={{ maxWidth: "380px", width: "100%", height: "auto", border: "1px solid rgba(245,197,24,0.2)", display: "block", margin: "0 auto" }} />
        </div>
      </section>

      <section style={{ background: "#F5C518", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div className="container-xl">
          <h2 className="reveal reveal-up" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#0D0D0D", marginBottom: "1rem" }}>This Business Cleans Up.<br />In Every Sense.</h2>
          <p className="reveal reveal-fade" style={{ color: "#333", marginBottom: "2rem" }}>No inventory, no office, no franchise fees. Just a repeatable service that earns every single week.</p>
          <Link href="/contact" className="reveal reveal-up" style={{ background: "#0D0D0D", color: "#F5C518", fontWeight: 700, padding: "1rem 2.5rem", textDecoration: "none", fontSize: "1rem" }}>Apply Now →</Link>
        </div>
      </section>
    </>
  );
}
