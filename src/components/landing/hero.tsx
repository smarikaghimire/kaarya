'use client';

export default function Hero() {
  return (
    <section
      className="py-24"
      style={{
        backgroundImage: 'url(/hero-section.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div
          className="flex gap-12 items-center"
          style={{
            width: '1253px',
            height: '355px',
            marginTop: '135px',
            marginLeft: '93.5px',
          }}
        >
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="heading-2 mb-4">
              Manage Service Projects with
              <br />
              <span style={{ color: 'var(--primary-500)' }}>Kaarya</span>
            </h1>
            <p className="body-large mb-8" style={{ color: 'var(--neutral-600)' }}>
              Complete service management solution to manage sites, resources,
              finances, and parties all in one powerful platform.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="btn-primary">Download App</button>
              <button className="btn-secondary">Learn more</button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1">
            <img
              src="/hero-image.png"
              alt="Service professionals reviewing plans"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}