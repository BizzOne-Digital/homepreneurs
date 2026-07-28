"use client";
import Link from "next/link";

export default function PorchPiratesPage() {
  return (
    <>
      <section style={{ background: "#0D0D0D", padding: "10rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "url('https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=1400&q=80') center/cover", opacity: 0.1 }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div className="reveal reveal-up" style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span className="tag">Sign Marketing</span>
            <span className="tag tag-green">Contractors & Realtors</span>
          </div>
          <h1 className="display-heading reveal reveal-up delay-100" style={{ color: "#F9F7F2" }}>
            <span style={{ color: "#F5C518" }}>Porch</span><br />Pirates
          </h1>
          <p className="reveal reveal-fade delay-200" style={{ fontSize: "1.1rem", color: "#9E9E9E", maxWidth: "540px", lineHeight: 1.85, margin: "1.5rem 0 1rem" }}>
            Outdoor promotional signage for contractors and realtors. We turn $100 into thousands.
          </p>
          <p className="reveal reveal-fade delay-300" style={{ fontSize: "1.3rem", fontWeight: 800, color: "#F5C518", marginBottom: "2.5rem" }}>Don't Gamble with your Marketing.</p>
          <div className="reveal reveal-up delay-400" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-yellow">Inquire About This Business →</Link>
            <Link href="/pricing" className="btn-outline">View Investment</Link>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#F9F7F2" }}>
        <div className="container-xl">
          <div className="grid-2col" style={{ gap: "5rem", alignItems: "center" }}>
            <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=700&q=80" alt="Real estate signage" className="reveal reveal-scale" style={{ width: "100%", height: "440px", objectFit: "cover" }} />
            <div>
              <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>The Business Model</div>
              <h2 className="reveal reveal-up" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 900, color: "#0D0D0D", marginBottom: "1.5rem" }}>We Turn $100<br /><span style={{ color: "#6AAB00" }}>Into Thousands</span></h2>
              <p className="reveal reveal-fade" style={{ color: "#555", lineHeight: 1.85, marginBottom: "1.25rem" }}>Every contractor, realtor, and home service business needs visibility. Porch Pirates delivers high-impact outdoor signage that generates leads directly from neighbourhoods.</p>
              <p className="reveal reveal-fade delay-100" style={{ color: "#555", lineHeight: 1.85, marginBottom: "2rem" }}>Your clients pay for signage that works. You operate the placement, management, and results tracking — and earn recurring revenue on every campaign.</p>
              <Link href="/contact" className="btn-yellow reveal reveal-up delay-200">Get Investment Details →</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0D0D0D", padding: "5rem 1.5rem" }}>
        <div className="container-xl" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {[
            ["Target Market", "Contractors, realtors, home services"],
            ["Revenue Model", "Per campaign + recurring placements"],
            ["Equipment", "Minimal — signs and placement system"],
            ["Investment", "Under $50K all-in"],
          ].map(([k, v], i) => (
            <div key={k} className={`reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`} style={{ background: "#1A1A1A", padding: "2rem", borderTop: "3px solid #F5C518" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9E9E9E", marginBottom: "0.75rem" }}>{k}</div>
              <div style={{ fontSize: "1rem", fontWeight: 800, color: "#F5C518", lineHeight: 1.4 }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div className="container-xl" style={{ textAlign: "center" }}>
          <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>Ready-Made Marketing</div>
          <h2 className="reveal reveal-up delay-100" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 900, color: "#F9F7F2", marginBottom: "1rem" }}>
            Professional Campaigns.<br /><span style={{ color: "#F5C518" }}>Built and Ready to Launch.</span>
          </h2>
          <p className="reveal reveal-fade delay-200" style={{ color: "#9E9E9E", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
            Every Porch Pirates business comes with branded marketing assets and an official brand mark already created — no design work, no guesswork.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", alignItems: "flex-end", flexWrap: "wrap" }}>
            <div className="reveal reveal-scale delay-300" style={{ position: "relative", display: "inline-block" }}>
              <img src="/promo1.jpg" alt="Porch Pirates marketing flyer" style={{ maxWidth: "380px", width: "100%", height: "auto", border: "1px solid rgba(245,197,24,0.2)", display: "block" }} />
              <img src="/promologo1.jpg" alt="Porch Pirates badge" style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", width: "84px", height: "84px", borderRadius: "50%", border: "3px solid #0D0D0D", boxShadow: "0 6px 20px rgba(0,0,0,0.4)" }} />
            </div>
            <img src="/promologo2.jpg" alt="Porch Pirates social ad" className="reveal reveal-scale delay-400" style={{ maxWidth: "180px", width: "100%", height: "auto", border: "1px solid rgba(245,197,24,0.2)", display: "block" }} />
          </div>
        </div>
      </section>

      <section style={{ background: "#F5C518", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div className="container-xl">
          <h2 className="reveal reveal-up" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#0D0D0D", marginBottom: "1rem" }}>Stop Gambling.<br />Start Marketing.</h2>
          <Link href="/contact" className="reveal reveal-up delay-100" style={{ background: "#0D0D0D", color: "#F5C518", fontWeight: 700, padding: "1rem 2.5rem", textDecoration: "none", fontSize: "1rem" }}>Apply Now →</Link>
        </div>
      </section>
    </>
  );
}
