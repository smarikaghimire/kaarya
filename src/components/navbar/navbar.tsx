'use client';

export default function Navbar() {
  return (
    <nav className="bg-neutral-0 border-b border-neutral-200">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Kaarya</h1>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="body-regular text-neutral-700 hover:text-primary transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="body-regular text-neutral-700 hover:text-primary transition"
            >
              About Us
            </a>
            <a
              href="#features"
              className="body-regular text-neutral-700 hover:text-primary transition"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="body-regular text-neutral-700 hover:text-primary transition"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="body-regular text-neutral-700 hover:text-primary transition"
            >
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