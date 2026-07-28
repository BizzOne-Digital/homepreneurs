"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const services = [
  { name: "Poo Be Gone", href: "/services/poo-be-gone" },
  { name: "Porch Pirates", href: "/services/porch-pirates" },
  { name: "Mobile Mechanix", href: "/services/mobile-mechanix" },
  { name: "BluCallers", href: "/services/blucallers" },
  { name: "ECO Panels", href: "/services/eco-panels" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(13,13,13,0.97)" : "rgba(13,13,13,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: scrolled ? "1px solid rgba(245,197,24,0.3)" : "1px solid transparent",
      transition: "all 0.3s",
    }}>
      <div className="container-xl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.5rem", height: "68px" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="Homepreneurs logo" style={{ height: "60px", width: "auto" }} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          <Link href="/" style={navLink}>Home</Link>
          <Link href="/about" style={navLink}>About</Link>
          <div style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <button style={{ ...navLink, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}>
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            {servicesOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, background: "#1A1A1A", border: "1px solid rgba(245,197,24,0.3)", minWidth: "200px", padding: "0.5rem 0" }}>
                {services.map(s => (
                  <Link key={s.href} href={s.href} style={{ display: "block", padding: "0.6rem 1.2rem", color: "#F9F7F2", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s, background 0.2s" }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = "#F5C518"; (e.target as HTMLElement).style.background = "rgba(245,197,24,0.08)"; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = "#F9F7F2"; (e.target as HTMLElement).style.background = "transparent"; }}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/pricing" style={navLink}>Pricing</Link>
          <Link href="/contact" style={{ ...navLink }}>
            <span className="btn-yellow" style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem" }}>Get Started</span>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "#F9F7F2", display: "none" }} className="mobile-menu-btn" aria-label="Toggle menu">
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 7H21M3 12H21M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: "#0D0D0D", borderTop: "1px solid rgba(245,197,24,0.2)", padding: "1rem 1.5rem 2rem" }}>
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Pricing", href: "/pricing" },
            { label: "Contact", href: "/contact" },
            ...services.map(s => ({ label: s.name, href: s.href })),
          ].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "0.75rem 0", color: "#F9F7F2", textDecoration: "none", fontSize: "1rem", borderBottom: "1px solid rgba(255,255,255,0.06)", fontWeight: 600 }}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-yellow" style={{ marginTop: "1rem", display: "inline-block" }}>Get Started</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}

const navLink: React.CSSProperties = {
  color: "#F9F7F2",
  textDecoration: "none",
  fontSize: "0.9rem",
  fontWeight: 600,
  transition: "color 0.2s",
  letterSpacing: "0.01em",
};
