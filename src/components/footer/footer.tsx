'use client';

export default function Footer() {
  return (
    <footer className="bg-secondary-600 text-neutral-0 mt-auto">
      <div className="container py-16">
        <div className="grid grid-cols-4 gap-12 mb-12">
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
                  <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.23c0-2.77 1.693-4.28 4.154-4.28 1.18 0 2.2.088 2.496.127v2.894h-1.714c-1.345 0-1.605.64-1.605 1.575v2.065h3.21l-.418 3.54h-2.792V20" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.894 8.221c.004.106.006.212.006.318 0 3.237-2.463 6.97-6.97 6.97-1.386 0-2.673-.406-3.758-1.104.192.022.387.033.586.033 1.148 0 2.205-.391 3.043-1.048-1.072-.02-1.976-.728-2.288-1.702.15.028.304.043.461.043.223 0 .44-.03.648-.086-1.122-.227-1.966-1.216-1.966-2.404v-.031c.33.184.707.295 1.112.308-.658-.44-1.091-1.19-1.091-2.043 0-.45.121-.871.332-1.233 1.21 1.487 3.018 2.464 5.055 2.568-.042-.18-.064-.366-.064-.556 0-1.346 1.091-2.437 2.437-2.437.701 0 1.335.296 1.78.768.555-.109 1.078-.311 1.548-.589-.182.568-.568 1.045-1.07 1.347.493-.059.962-.19 1.4-.384-.326.485-.738.91-1.213 1.253z" />
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
        <div className="border-t border-opacity-10 border-neutral-0 pt-8 flex justify-between items-center">
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