"use client";
import { useEffect } from "react";

export default function ReferralTracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) {
      try {
        localStorage.setItem("homepreneurs_ref", ref);
      } catch {}
    }
  }, []);

  return null;
}
