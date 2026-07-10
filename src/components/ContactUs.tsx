import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SiteSettings } from '../types';

interface ContactUsProps {
  siteSettings: SiteSettings | null;
}

const ContactUs: React.FC<ContactUsProps> = ({ siteSettings }) => {
  return (
    <div className="bg-cafe-cream min-h-screen text-cafe-brown py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Title Section */}
        <div className="text-center space-y-4 reveal">
          <h1 className="text-4xl md:text-6xl font-agrandir font-black text-cafe-dark">Contact Us</h1>
          <p className="text-xl text-gray-500 font-light max-w-xl mx-auto">
            Get in touch, check our operating hours, or find our location.
          </p>
          <div className="h-1 w-16 bg-cafe-brown mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch reveal">
          {/* Details Column */}
          <div className="bg-white p-8 rounded-2xl border border-cafe-beige space-y-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-agrandir font-bold text-cafe-dark mb-6">Info & Hours</h2>

              <div className="space-y-6 font-light text-gray-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-cafe-brown flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-cafe-dark">Address</p>
                    <p className="whitespace-pre-line">{siteSettings?.contact_address || "123 Rizal Avenue, Corner Taft Street,\nMetro Manila, Philippines"}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-cafe-brown flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-cafe-dark">Phone</p>
                    <p>{siteSettings?.contact_phone || "+63 912 345 6789"}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-cafe-brown flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-cafe-dark">Email</p>
                    <p>{siteSettings?.contact_email || "hello@homeroscafe.com"}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-cafe-brown flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-cafe-dark">Opening Hours</p>
                    <p>{siteSettings?.contact_hours_weekdays || "Mon - Fri: 7:00 AM - 9:00 PM"}</p>
                    <p>{siteSettings?.contact_hours_weekends || "Sat - Sun: 8:00 AM - 10:00 PM"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Minimalist Map Visualizer */}
          <div className="relative rounded-2xl overflow-hidden border border-cafe-beige shadow-sm bg-white flex flex-col justify-center items-center text-center p-8 space-y-4 min-h-[350px]">
            <div className="absolute inset-0 bg-neutral-100 opacity-20 pointer-events-none" />
            <div className="w-16 h-16 bg-cafe-beige/50 rounded-full flex items-center justify-center text-cafe-brown">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-agrandir font-bold text-cafe-dark">{siteSettings?.site_name || "Homeros Cafe"} Main Branch</h3>
            <p className="text-sm text-gray-500 font-light max-w-xs">Near the city park. Valet and street parking available.</p>
            <a
              href="https://www.google.com/maps/place/Perpetual+Village,+15+St+Therese,+Taguig,+Metro+Manila/@14.477538,121.0484734,18.01z/data=!4m6!3m5!1s0x3397cf09c8d77611:0x2687347e5f8ce4fa!8m2!3d14.4777061!4d121.0483922!16s%2Fg%2F11kbtgx8p3?entry=ttu&g_ep=EgoyMDI2MDcwNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-cafe-brown text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-cafe-gold transition-colors"
            >
              Open Google Maps
            </a>
          </div>
        </div>

        {/* Connect & Order Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch reveal">
          {/* Socials Card */}
          <div className="bg-white p-8 rounded-2xl border border-cafe-beige space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-agrandir font-bold text-cafe-dark mb-4">Follow Us</h3>
              <p className="text-sm text-gray-500 font-light mb-6">
                Stay updated with our latest brews, seasonal offerings, and community events.
              </p>
              
              <div className="space-y-4">
                {siteSettings?.social_fb && (
                  <a 
                    href={siteSettings.social_fb.startsWith('http') ? siteSettings.social_fb : `https://facebook.com/${siteSettings.social_fb.replace('@', '')}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-xl border border-cafe-beige hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all text-gray-700 font-medium text-sm group"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V2h-3c-2.5 0-5 1.5-5 4v2z" />
                      </svg>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 font-light">Facebook</span>
                      <span className="group-hover:text-[#1877F2] transition-colors">{siteSettings.social_fb}</span>
                    </div>
                  </a>
                )}
                {siteSettings?.social_ig && (
                  <a 
                    href={siteSettings.social_ig.startsWith('http') ? siteSettings.social_ig : `https://instagram.com/${siteSettings.social_ig.replace('@', '')}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-xl border border-cafe-beige hover:border-[#E4405F] hover:bg-[#E4405F]/5 transition-all text-gray-700 font-medium text-sm group"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#E4405F]/10 flex items-center justify-center text-[#E4405F]">
                      <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 font-light">Instagram</span>
                      <span className="group-hover:text-[#E4405F] transition-colors">{siteSettings.social_ig}</span>
                    </div>
                  </a>
                )}
                {siteSettings?.social_tiktok && (
                  <a 
                    href={siteSettings.social_tiktok.startsWith('http') ? siteSettings.social_tiktok : `https://tiktok.com/@${siteSettings.social_tiktok.replace('@', '')}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-xl border border-cafe-beige hover:border-black hover:bg-black/5 transition-all text-gray-700 font-medium text-sm group"
                  >
                    <span className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center text-black">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.53.02C13.84 0 15 1.05 15.02 2.37c.07 1.55 1.06 2.8 2.5 3.32v3.74c-1.39-.17-2.6-.82-3.48-1.8v8.02A6.33 6.33 0 0 1 7.7 22a6.33 6.33 0 0 1-6.35-6.35c0-3.18 2.34-5.83 5.46-6.27V13.1c-1.4.38-2.42 1.63-2.42 3.12 0 1.83 1.48 3.3 3.3 3.3 1.8 0 3.28-1.47 3.28-3.26V0h1.61z" />
                      </svg>
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 font-light">TikTok</span>
                      <span className="group-hover:text-black transition-colors">{siteSettings.social_tiktok}</span>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Delivery & Reviews Card */}
          <div className="bg-white p-8 rounded-2xl border border-cafe-beige space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-agrandir font-bold text-cafe-dark mb-4">Order Online & Reviews</h3>
              <p className="text-sm text-gray-500 font-light mb-6">
                Get your favorite drinks and comfort snacks delivered right to your doorstep, or leave us a review!
              </p>
              
              <div className="flex flex-col space-y-3">
                {siteSettings?.link_grabfood && (
                  <a
                    href={siteSettings.link_grabfood}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-cafe-beige hover:border-[#00B14F] hover:bg-[#00B14F]/5 transition-all text-sm font-semibold text-cafe-dark group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                        <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none">
                          <path d="M30 18.5c0-2.5-2-4.5-4.5-4.5S21 16 21 18.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5z" stroke="#00B14F" strokeWidth="4" />
                          <path d="M19 21.5c0-2.5-2-4.5-4.5-4.5S10 19 10 21.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5z" stroke="#00B14F" strokeWidth="4" />
                        </svg>
                      </span>
                      <span className="group-hover:text-[#00B14F] transition-colors">Order via GrabFood</span>
                    </div>
                    <span className="text-xs text-gray-400 font-light group-hover:text-[#00B14F] transition-colors">Open Shop →</span>
                  </a>
                )}
                {siteSettings?.link_foodpanda && (
                  <a
                    href={siteSettings.link_foodpanda}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-cafe-beige hover:border-[#D61C5C] hover:bg-[#D61C5C]/5 transition-all text-sm font-semibold text-cafe-dark group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                        <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="#D61C5C">
                          <circle cx="7" cy="7" r="2.5" />
                          <circle cx="17" cy="7" r="2.5" />
                          <path d="M12 6c-4.4 0-8 2.8-8 7.3 0 4.1 3.6 6.7 8 6.7s8-2.6 8-6.7c0-4.5-3.6-7.3-8-7.3zm-3.5 8c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm7 0c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm-3.5 2.5c-.8 0-1.2-.5-1.2-.8h2.4c0 .3-.4.8-1.2.8z" />
                        </svg>
                      </span>
                      <span className="group-hover:text-[#D61C5C] transition-colors">Order via FoodPanda</span>
                    </div>
                    <span className="text-xs text-gray-400 font-light group-hover:text-[#D61C5C] transition-colors">Open Shop →</span>
                  </a>
                )}
                {siteSettings?.link_google_reviews && (
                  <a
                    href={siteSettings.link_google_reviews}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-cafe-beige hover:border-[#4285F4] hover:bg-[#4285F4]/5 transition-all text-sm font-semibold text-cafe-dark group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.19-.63z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1c-4.3 0-8.01 2.47-9.82 6.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                        </svg>
                      </span>
                      <span className="group-hover:text-[#4285F4] transition-colors">Rate Us on Google</span>
                    </div>
                    <span className="text-xs text-gray-400 font-light group-hover:text-[#4285F4] transition-colors">Write Review →</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
