import { SiteSettings } from '../types';

interface AboutUsProps {
  onNavigate: (view: 'home' | 'menu' | 'about' | 'contact') => void;
  siteSettings: SiteSettings | null;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigate, siteSettings }) => {
  return (
    <div className="bg-cafe-cream min-h-screen text-cafe-brown py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Title Section */}
        <div className="text-center space-y-4 reveal">
          <h1 className="text-4xl md:text-6xl font-agrandir font-black text-cafe-dark">About Us</h1>
          <p className="text-xl text-gray-500 font-light max-w-xl mx-auto">
            Crafting memorable coffee experiences since we first opened our doors.
          </p>
          <div className="h-1 w-16 bg-cafe-brown mx-auto mt-4" />
        </div>

        {/* Narrative & Image Block 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div className="space-y-6 order-1">
            <h2 className="text-2xl md:text-3xl font-agrandir font-bold text-cafe-dark">
              {siteSettings?.about_story_title_1 || "Where Passion Meets Craft"}
            </h2>
            <p className="text-gray-600 font-light leading-relaxed whitespace-pre-line">
              {siteSettings?.about_story_body_1 || "At Homeros Cafe, our journey began with a simple belief: that a cup of coffee is more than just a morning routine. It's a moment of pause, an opportunity for connection, and a showcase of meticulous craft. We source only the finest Arabica beans from sustainable farms around the globe, working closely with farmers who share our values of respect, quality, and community."}
            </p>
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 order-2">
            <img
              src={siteSettings?.about_story_image_1 || "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800"}
              alt={siteSettings?.about_story_title_1 || "Our Story"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Narrative & Image Block 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 order-2 md:order-1">
            <img
              src={siteSettings?.about_story_image_2 || "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800"}
              alt={siteSettings?.about_story_title_2 || "Our Space"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-agrandir font-bold text-cafe-dark">
              {siteSettings?.about_story_title_2 || "A Space to Connect"}
            </h2>
            <p className="text-gray-600 font-light leading-relaxed whitespace-pre-line">
              {siteSettings?.about_story_body_2 || "Our space is consciously designed with a minimalist aesthetic, clean lines, and warm tones. We wanted to create a peaceful environment that lets our products speak for themselves and allows our guests to find clarity amidst their busy schedules. Whether you are here to work on your next big idea, share a laugh with a friend, or simply enjoy a quiet espresso, we invite you to make Homeros Cafe your second home."}
            </p>
          </div>
        </div>

        {/* Narrative & Image Block 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div className="space-y-6 order-1">
            <h2 className="text-2xl md:text-3xl font-agrandir font-bold text-cafe-dark">
              {siteSettings?.about_story_title_3 || "Crafted with Passion"}
            </h2>
            <p className="text-gray-600 font-light leading-relaxed whitespace-pre-line">
              {siteSettings?.about_story_body_3 || "Every cup we serve is a product of dedication and precision. From calibration in the morning to the final pour, our baristas treat coffee-making as a fine art, ensuring each sip is as memorable as the last."}
            </p>
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 order-2">
            <img
              src={siteSettings?.about_story_image_3 || "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800"}
              alt={siteSettings?.about_story_title_3 || "Crafted with Passion"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Narrative & Image Block 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg bg-gray-100 order-2 md:order-1">
            <img
              src={siteSettings?.about_story_image_4 || "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800"}
              alt={siteSettings?.about_story_title_4 || "Sustainably Minded"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-agrandir font-bold text-cafe-dark">
              {siteSettings?.about_story_title_4 || "Sustainably Minded"}
            </h2>
            <p className="text-gray-600 font-light leading-relaxed whitespace-pre-line">
              {siteSettings?.about_story_body_4 || "We believe in leaving a positive footprint. Our cafe utilizes eco-friendly packaging, actively composts coffee waste, and seeks out organic, direct-trade ingredients to protect the planet we all share."}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6 reveal">
          <h2 className="text-2xl font-agrandir font-bold text-cafe-dark">Experience it for yourself.</h2>
          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center space-x-2 bg-cafe-accent text-cafe-btn-text px-8 py-3 rounded-full hover:bg-cafe-gold transition-colors font-medium shadow-md"
          >
            Explore our offerings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
