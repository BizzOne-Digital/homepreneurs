import Link from "next/link";

const values = [
  { icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" stroke="#F5C518" strokeWidth="1.5" strokeLinejoin="round"/></svg>, title: "Proven Systems", desc: "Every business model has been tested and refined for fast cashflow and repeatable success." },
  { icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 16h6l4-10 6 20 4-10h8" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Low Overhead", desc: "No equipment costs, no commercial leases, no franchise royalties eating your profits." },
  { icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="10" r="5" stroke="#F5C518" strokeWidth="1.5"/><path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round"/><path d="M20 14l4 2M20 18l4-2" stroke="#6AAB00" strokeWidth="1.5" strokeLinecap="round"/></svg>, title: "Full Ownership", desc: "You license the system — but the business is yours. No approval chains, no territory disputes." },
  { icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="3" stroke="#F5C518" strokeWidth="1.5"/><path d="M10 16l4 4 8-8" stroke="#6AAB00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Stack Your Income", desc: "Own multiple Homepreneurs™ businesses and build a diversified, stacked-income portfolio." },
];

const steps = [
  { num: "01", title: "Apply & Connect", desc: "Fill out the contact form. We reach out within 24 hours to discuss which business model fits your goals." },
  { num: "02", title: "Choose Your Business", desc: "Select the model that fits your lifestyle and market. We walk you through everything, no experience required." },
  { num: "03", title: "Get Licensed & Trained", desc: "Receive your licensing agreement, training materials, systems access, and marketing collateral." },
  { num: "04", title: "Launch & Earn", desc: "Go live with a business built for day-one cashflow. Add more businesses as you scale." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#0D0D0D", padding: "10rem 1.5rem 6rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "40%", background: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80') center/cover", opacity: 0.15 }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div className="tag reveal reveal-up" style={{ marginBottom: "1.5rem" }}>About Homepreneurs™</div>
          <h1 className="display-heading reveal reveal-up delay-100" style={{ color: "#F9F7F2", maxWidth: "640px", marginBottom: "1.5rem" }}>
            We Built a Better Way<br /><span style={{ color: "#F5C518" }}>to Own a Business</span>
          </h1>
          <p className="reveal reveal-fade delay-200" style={{ fontSize: "1.1rem", color: "#9E9E9E", maxWidth: "560px", lineHeight: 1.85 }}>
            The Homepreneurs™ EcoSystem was created for people who want the structure and support of a franchise — without the $300K+ price tag, rigid rules, or limited territory.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section-pad" style={{ background: "#F9F7F2" }}>
        <div className="container-xl">
          <div className="grid-2col" style={{ gap: "5rem", alignItems: "center" }}>
            <div>
              <img src="/about.png" alt="Team strategy" className="reveal reveal-left" style={{ width: "100%", height: "440px", objectFit: "cover" }} />
            </div>
            <div>
              <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>Our Story</div>
              <h2 className="reveal reveal-up delay-100" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 900, color: "#0D0D0D", lineHeight: 1.1, marginBottom: "1.5rem" }}>
                Traditional Franchising Was Broken.<br /><span style={{ color: "#6AAB00" }}>We Fixed It.</span>
              </h2>
              <p className="reveal reveal-fade delay-200" style={{ color: "#555", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Traditional franchises demand massive capital, restrict where you operate, and take royalties off your revenue — often leaving entrepreneurs working for someone else under the guise of ownership.
              </p>
              <p className="reveal reveal-fade delay-300" style={{ color: "#555", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Homepreneurs™ was built as a licensing model — giving you access to proven systems, branding, training, and marketing support without the financial stranglehold.
              </p>
              <p className="reveal reveal-fade delay-400" style={{ color: "#555", lineHeight: 1.85, marginBottom: "2rem" }}>
                Every business in our EcoSystem is designed to be launched from home, operated with minimal overhead, and scaled by stacking additional businesses over time.
              </p>
              <Link href="/contact" className="btn-yellow reveal reveal-up delay-500">Start Your Application →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-pad" style={{ background: "#0D0D0D" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>What We Stand For</div>
            <h2 className="display-heading reveal reveal-up delay-100" style={{ color: "#F9F7F2" }}>The Homepreneurs™<br /><span style={{ color: "#F5C518" }}>Difference</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {values.map((v, i) => (
              <div key={v.title} className={`card-dark reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`}>
                <div style={{ marginBottom: "1.25rem" }}>{v.icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#F9F7F2", marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#9E9E9E", lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad" style={{ background: "#F9F7F2" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label reveal reveal-up" style={{ marginBottom: "1rem" }}>How It Works</div>
            <h2 className="display-heading reveal reveal-up delay-100" style={{ color: "#0D0D0D" }}>From Application to<br /><span style={{ color: "#6AAB00" }}>Day One Revenue</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ position: "relative" }}>
                <div style={{ fontSize: "3.5rem", fontWeight: 900, color: "#F5C518", opacity: 0.15, lineHeight: 1, marginBottom: "-1rem" }}>{step.num}</div>
                <div className={`reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`} style={{ background: "#fff", border: "1px solid #E8E4DA", padding: "1.75rem", borderTop: "3px solid #F5C518" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", color: "#6AAB00", textTransform: "uppercase", marginBottom: "0.75rem" }}>Step {step.num}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0D0D0D", marginBottom: "0.75rem" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.75 }}>{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ position: "absolute", top: "50%", right: "-1.25rem", transform: "translateY(-50%)", color: "#F5C518", zIndex: 1, display: "none" }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#F5C518", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div className="container-xl">
          <h2 className="reveal reveal-up" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#0D0D0D", marginBottom: "1rem" }}>The System Is Ready.<br />Are You?</h2>
          <p className="reveal reveal-fade delay-100" style={{ color: "#333", marginBottom: "2rem", fontSize: "1rem" }}>Get in touch and we'll help you find the right business for your goals.</p>
          <Link href="/contact" className="reveal reveal-up delay-200" style={{ background: "#0D0D0D", color: "#F5C518", fontWeight: 700, padding: "1rem 2.5rem", textDecoration: "none", fontSize: "1rem" }}>Book Your Call →</Link>
        </div>
      </section>
    </>
  );
}
