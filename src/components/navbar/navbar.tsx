'use client';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Kaarya</h1>
          </div>

          {/* Nav Links */}
          <div className="navbar-links">
            <a href="#home" className="navbar-link">
              Home
            </a>
            <a href="#about" className="navbar-link">
              About Us
            </a>
            <a href="#features" className="navbar-link">
              Features
            </a>
            <a href="#pricing" className="navbar-link">
              Pricing
            </a>
            <a href="#contact" className="navbar-link">
              Contact Us
            </a>
          </div>

          {/* Get Started Button */}
          <button className="btn-primary">Get started →</button>
        </div>
      </div>
    </nav>
  );
}