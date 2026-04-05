"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Bazenga</div>

      <div className={`links ${open ? "open" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/delete-account">Delete Account</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}