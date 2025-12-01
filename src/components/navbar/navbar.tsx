'use client';
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <div>
            <h1 className="navbar-logo">Kaarya</h1>
          </div>

          {/* Nav Links */}
          <div className="navbar-links">
            <Link href="/" className="navbar-link">Home</Link>
            <Link href="#services" className="navbar-link">Services</Link>
            <Link href="#about" className="navbar-link">About</Link>
            <Link href="/contact" className="navbar-link">Contact</Link>
          </div>

          {/* Buttons */}
          <div className="navbar-buttons">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
}