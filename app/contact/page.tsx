"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", province: "", looking: "", timeline: "", reach: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <>
      {/* HERO */}
      <section style={{ background: "#0D0D0D", padding: "10rem 1.5rem 6rem" }}>
        <div className="container-xl">
          <div className="tag reveal reveal-up" style={{ marginBottom: "1.5rem" }}>Get Started</div>
          <h1 className="display-heading reveal reveal-up delay-100" style={{ color: "#F9F7F2", marginBottom: "1.5rem" }}>
            Let's Find Your<br /><span style={{ color: "#F5C518" }}>Right Business</span>
          </h1>
          <p className="reveal reveal-fade delay-200" style={{ fontSize: "1.1rem", color: "#9E9E9E", maxWidth: "500px", lineHeight: 1.85 }}>
            Fill out the form below and our team will be in touch within 24 hours to walk you through the right Homepreneur™ opportunity.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="section-pad" style={{ background: "#F9F7F2" }}>
        <div className="container-xl">
          <div className="grid-2col-alt" style={{ gap: "5rem", alignItems: "start" }}>
            {/* Left: info */}
            <div>
              <h2 className="reveal reveal-up" style={{ fontSize: "1.6rem", fontWeight: 900, color: "#0D0D0D", marginBottom: "2rem" }}>What Happens<br /><span style={{ color: "#6AAB00" }}>After You Apply</span></h2>
              {[
                { step: "01", title: "We review your form", desc: "Within 24 hours, our team reviews your application and matches you with suitable businesses." },
                { step: "02", title: "Intro call", desc: "A short 20-minute call to understand your goals, location, and timeline." },
                { step: "03", title: "Investment details", desc: "We walk you through the exact investment, systems, and what's included." },
                { step: "04", title: "Decision on your terms", desc: "No pressure. You decide when you're ready — we're here to answer every question." },
              ].map((item, i) => (
                <div key={item.step} className={`reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`} style={{ display: "flex", gap: "1.25rem", marginBottom: "2rem" }}>
                  <div style={{ flexShrink: 0, width: "40px", height: "40px", background: "#F5C518", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "0.75rem", color: "#0D0D0D" }}>{item.step}</div>
                  <div>
                    <h3 style={{ fontWeight: 800, color: "#0D0D0D", marginBottom: "4px", fontSize: "1rem" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="reveal reveal-left" style={{ borderTop: "1px solid #E8E4DA", paddingTop: "2rem", marginTop: "1rem" }}>
                <p style={{ fontSize: "0.85rem", color: "#9E9E9E", marginBottom: "0.5rem" }}>Prefer to reach us directly?</p>
                <p style={{ fontWeight: 700, color: "#0D0D0D" }}>780-932-8112</p>
                <p style={{ fontWeight: 700, color: "#6AAB00" }}>info@blucallers.com</p>
              </div>
            </div>

            {/* Right: form */}
            {submitted ? (
              <div className="reveal reveal-up" style={{ background: "#0D0D0D", padding: "4rem", textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ margin: "0 auto", display: "block" }}>
                    <circle cx="30" cy="30" r="28" stroke="#6AAB00" strokeWidth="2"/>
                    <path d="M18 30l8 8 16-16" stroke="#F5C518" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#F5C518", marginBottom: "1rem" }}>Application Received!</h3>
                <p style={{ color: "#9E9E9E" }}>We'll be in touch within 24 hours. Keep an eye on your inbox.</p>
              </div>
            ) : (
              <div className="reveal reveal-up" style={{ background: "#fff", border: "1px solid #E8E4DA", padding: "2.5rem" }}>
                <h3 className="reveal reveal-up" style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0D0D0D", marginBottom: "2rem", borderBottom: "2px solid #F5C518", paddingBottom: "0.75rem", display: "inline-block" }}>
                  Your Information
                </h3>

                <div className="grid-2col" style={{ gap: "1.25rem", marginBottom: "1.25rem" }}>
                  {[
                    { label: "Full Name", name: "name", type: "text", placeholder: "Connor Raesler" },
                    { label: "Email Address", name: "email", type: "email", placeholder: "you@email.com" },
                    { label: "Phone Number", name: "phone", type: "tel", placeholder: "780-000-0000" },
                    { label: "City", name: "city", type: "text", placeholder: "Edmonton" },
                  ].map((f, i) => (
                    <div key={f.name} className={`reveal reveal-up ${["","delay-100","delay-200","delay-300","delay-400"][i % 5]}`}>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", marginBottom: "6px" }}>{f.label}</label>
                      <input type={f.type} name={f.name} placeholder={f.placeholder} value={(form as Record<string, string>)[f.name]} onChange={handle}
                        style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #E8E4DA", fontSize: "0.95rem", outline: "none", transition: "border-color 0.2s", fontFamily: "inherit", color: "#0D0D0D" }}
                        onFocus={e => e.target.style.borderColor = "#F5C518"}
                        onBlur={e => e.target.style.borderColor = "#E8E4DA"}
                      />
                    </div>
                  ))}
                </div>

                <div className="reveal reveal-up" style={{ marginBottom: "1.25rem" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", marginBottom: "6px" }}>State / Province</label>
                  <input type="text" name="province" placeholder="Alberta" value={form.province} onChange={handle}
                    style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #E8E4DA", fontSize: "0.95rem", outline: "none", fontFamily: "inherit", color: "#0D0D0D" }}
                    onFocus={e => e.target.style.borderColor = "#F5C518"}
                    onBlur={e => e.target.style.borderColor = "#E8E4DA"}
                  />
                </div>

                <div className="reveal reveal-up delay-100" style={{ marginBottom: "1.25rem" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", marginBottom: "6px" }}>How long have you been looking to invest in your own business?</label>
                  <select name="looking" value={form.looking} onChange={handle}
                    style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #E8E4DA", fontSize: "0.95rem", outline: "none", fontFamily: "inherit", color: form.looking ? "#0D0D0D" : "#9E9E9E", background: "#fff" }}>
                    <option value="">Select an option</option>
                    <option>Just started researching</option>
                    <option>3–6 months</option>
                    <option>6–12 months</option>
                    <option>Over a year</option>
                  </select>
                </div>

                <div className="reveal reveal-up delay-200" style={{ marginBottom: "1.25rem" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", marginBottom: "6px" }}>When are you ready to start?</label>
                  <select name="timeline" value={form.timeline} onChange={handle}
                    style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #E8E4DA", fontSize: "0.95rem", outline: "none", fontFamily: "inherit", color: form.timeline ? "#0D0D0D" : "#9E9E9E", background: "#fff" }}>
                    <option value="">Select timeline</option>
                    <option>Ready now</option>
                    <option>1–2 months</option>
                    <option>1+ year</option>
                  </select>
                </div>

                <div className="reveal reveal-up delay-300" style={{ marginBottom: "2rem" }}>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", marginBottom: "6px" }}>Best way for us to reach you?</label>
                  <select name="reach" value={form.reach} onChange={handle}
                    style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid #E8E4DA", fontSize: "0.95rem", outline: "none", fontFamily: "inherit", color: form.reach ? "#0D0D0D" : "#9E9E9E", background: "#fff" }}>
                    <option value="">Select preference</option>
                    <option>Email</option>
                    <option>Phone call</option>
                    <option>Text message</option>
                  </select>
                </div>

                <button onClick={() => setSubmitted(true)} className="btn-yellow reveal reveal-up delay-400" style={{ width: "100%", justifyContent: "center", fontSize: "1rem" }}>
                  Submit Application →
                </button>
                <p className="reveal reveal-fade" style={{ fontSize: "0.78rem", color: "#9E9E9E", textAlign: "center", marginTop: "1rem" }}>We respond within 24 hours. No spam, ever.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
