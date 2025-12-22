import { Button } from "@/components/ui/button";

const Hero = () => {
  const eventImages = [
    "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_747_xvkxfj",
    "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_718_jujhsv",
    "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_996_lmrpuw",
    "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20250127_161743_knfykh",
    "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_904_m4pnxm",
    "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20250127_161737_bd1rgi",
    "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212557_257_qdqcen",
    "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212557_081_avwpts",
    "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20241001_183944_736_dr0qkv",
    "https://res.cloudinary.com/dyqelopiw/image/upload/photo_14_2025-01-24_10-00-10_jc9qo5",
    "https://res.cloudinary.com/dyqelopiw/image/upload/IMG-20250426-WA0051_eson31",
    "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20241017_170702_cefa3h", 
    "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20241017_170713_y5owkx"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-36 relative overflow-hidden">
      {/* Scrolling Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="flex animate-[scroll_20s_linear_infinite] space-x-6">
          {[...eventImages, ...eventImages, ...eventImages].map((image, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden shadow-lg">
              <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="flex animate-[scroll-reverse_25s_linear_infinite] space-x-6 mt-6">
          {[...eventImages.reverse(), ...eventImages, ...eventImages].map((image, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden shadow-lg">
              <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="flex animate-[scroll_18s_linear_infinite] space-x-6 mt-6">
          {[...eventImages, ...eventImages, ...eventImages].map((image, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden shadow-lg">
              <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="flex animate-[scroll-reverse_22s_linear_infinite] space-x-6 mt-6">
          {[...eventImages.reverse(), ...eventImages, ...eventImages].map((image, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden shadow-lg">
              <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="flex animate-[scroll_24s_linear_infinite] space-x-6 mt-6">
          {[...eventImages, ...eventImages, ...eventImages].map((image, index) => (
            <div key={index} className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden shadow-lg">
              <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-6">
          <span className="text-primary text-sm font-mono">~/linux-club $</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-primary">Linux</span> Club
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          A community of passionate students exploring the world of{" "}
          <span className="text-accent">open source</span> through weekly events and workshops
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/80">
            <a href="https://chat.whatsapp.com/Kh2Ek2wW45DA7yMWCf0HAN">Join Our Community</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="#events">View Events</a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">300+</div>
            <div className="text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">20+</div>
            <div className="text-muted-foreground">Events Conducted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Years Active</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;