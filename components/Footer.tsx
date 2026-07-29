"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0D0D0D", color: "#F9F7F2", padding: "4rem 1.5rem 2rem", borderTop: "1px solid rgba(245,197,24,0.2)" }}>
      <div className="container-xl">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          <div>
            <div style={{ marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <img src="/hlogotype.png" alt="Homepreneurs" style={{ height: "48px", width: "auto" }} />
              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#F5C518", letterSpacing: "-0.03em" }}>HOMEPRENEURS™</div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#6AAB00", fontWeight: 700, marginTop: "2px" }}>GO2U ECOSYSTEM</div>
              </div>
            </div>
            <p style={{ fontSize: "0.9rem", color: "#9E9E9E", lineHeight: 1.7, maxWidth: "260px" }}>
              A new class of entrepreneur building real, income-producing businesses using proven systems and low overhead.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontWeight: 700, color: "#F5C518", marginBottom: "1.2rem", textTransform: "uppercase" }}>Company</p>
            {[["Home", "/"], ["About", "/about"], ["Pricing", "/pricing"], ["Contact", "/contact"]].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", color: "#9E9E9E", textDecoration: "none", fontSize: "0.9rem", marginBottom: "0.6rem" }}>{l}</Link>
            ))}
          </div>
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontWeight: 700, color: "#F5C518", marginBottom: "1.2rem", textTransform: "uppercase" }}>Our Services</p>
            {[
              ["Poo Be Gone", "/services/poo-be-gone"],
              ["Porch Pirates", "/services/porch-pirates"],
              ["Mobile Mechanix", "/services/mobile-mechanix"],
              ["Blu Callers", "/services/blucallers"],
              ["ECO Panels", "/services/eco-panels"],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", color: "#9E9E9E", textDecoration: "none", fontSize: "0.9rem", marginBottom: "0.6rem" }}>{l}</Link>
            ))}
          </div>
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", fontWeight: 700, color: "#F5C518", marginBottom: "1.2rem", textTransform: "uppercase" }}>Contact</p>
            <p style={{ color: "#9E9E9E", fontSize: "0.9rem", marginBottom: "0.5rem" }}>info@blucallers.com</p>
            <p style={{ color: "#9E9E9E", fontSize: "0.9rem", marginBottom: "0.5rem" }}>780-932-8112</p>
            <p style={{ color: "#9E9E9E", fontSize: "0.9rem" }}>homepreneurs.ca</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.82rem", color: "#555" }}>© 2026 Homepreneurs™. All rights reserved. A Blu Callers Company.</p>
          <p style={{ fontSize: "0.82rem", color: "#555" }}>Built by <span style={{ color: "#F5C518" }}>BizzOne Digital</span></p>
        </div>
      </div>
    </footer>
  );
}
