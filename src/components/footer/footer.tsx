// src/components/landing/footer.tsx
'use client';

export default function Footer() {
  return (
    <footer className="bg-secondary-600 text-neutral-0">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Kaarya</h2>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.647 1.3-1.565 3.167-1.565 2.315 0 4.05 1.513 4.05 4.769v5.078zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.963-1.715 1.192 0 1.915.76 1.94 1.715 0 .953-.748 1.715-1.988 1.715zm1.581 11.597H3.635V9.861h3.283v10.591zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-4 mb-6">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="body-regular hover:opacity-80 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="body-regular hover:opacity-80 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="body-regular hover:opacity-80 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="body-regular hover:opacity-80 transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="heading-4 mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="body-regular hover:opacity-80 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="body-regular hover:opacity-80 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="body-regular hover:opacity-80 transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Download */}
          <div>
            <h3 className="heading-4 mb-6">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="body-regular flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+977800000000">+977-800-000-000</a>
              </li>
              <li className="body-regular flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@kaarya.com.np">info@kaarya.com.np</a>
              </li>
            </ul>

            <h3 className="heading-4 mb-4">Download</h3>
            <div className="flex gap-3">
              <a href="#" className="flex-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="w-full h-auto"
                />
              </a>
              <a href="#" className="flex-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/120px-Download_on_the_App_Store_Badge.svg.png"
                  alt="App Store"
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-0 border-opacity-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="body-small">Copyright @2025 - Taikosoft</p>
          <div className="flex items-center gap-4">
            <span className="body-small">Powered By:</span>
            <span className="font-bold">TUKI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}