import { Card } from "@/components/ui/card";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  
  const galleryImages = [
    {
      id: 1,
      title: "DevOps Session",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_747_xvkxfj",
      event: "Weekly Workshop #12"
    },
    {
      id: 2,
      title: "DevOps Session",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_718_jujhsv",
      event: "Weekly Event #8"
    },
    {
      id: 3,
      title: "Open Source Contribution Drive",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_996_lmrpuw",
      event: "Special Event"
    },
    {
      id: 4,
      title: "Workshop",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20250127_161743_knfykh",
      event: "Monthly Meetup"
    },
    {
      id: 5,
      title: "DevOps Session",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212556_904_m4pnxm",
      event: "Weekly Event #10"
    },
    {
      id: 6,
      title: "Technical Session",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20250127_161737_bd1rgi",
      event: "Technical Workshop"
    },
    {
      id: 7,
      title: "Community Discussion",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212557_257_qdqcen",
      event: "Community Event"
    },
    {
      id: 8,
      title: "Coding Session",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20240807_212557_081_avwpts",
      event: "Weekly Workshop #18"
    },
    {
      id: 9,
      title: "Onboarding",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20241001_183944_736_dr0qkv",
      event: "Special Showcase"
    },
    {
      id: 10,
      title: "Coding Session",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/IMG_20241017_170702_cefa3h ",
      event: "Weekly Workshop #18"
    },
    {
      id: 11,
      title: "Coding Session",
      image: "https://res.cloudinary.com/dyqelopiw/image/upload/photo_14_2025-01-24_10-00-10_jc9qo5",
      event: "Weekly Workshop #18"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Event Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing memories from our amazing Linux community events and learning sessions
          </p>
        </div>
        
        {/* Navigation Controls */}
        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Scrolling Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {galleryImages.map((image, index) => (
              <Card 
                key={image.id} 
                className={`group flex-shrink-0 w-80 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl ${
                  hoveredImage === image.id ? 'scale-105 z-10' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.image}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-96 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Post-style overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 opacity-60 group-hover:opacity-80 transition-all duration-500" />
                  
                  {/* Top content like social media */}
                  <div className="absolute top-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold">
                        LUG
                      </div>
                      <span className="font-medium text-sm">Linux Users Group</span>
                    </div>
                  </div>
                  
                  {/* Bottom content with post-style layout */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="space-y-3">
                      {/* Like and share buttons */}
                      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <span className="text-red-400">❤️</span>
                        </button>
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <span>📤</span>
                        </button>
                        <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <span>🔖</span>
                        </button>
                      </div>
                      
                      {/* Post content */}
                      <div>
                        <p className="text-sm text-gray-200 mb-2">{image.event}</p>
                        <div className="flex gap-2 text-xs">
                          <span className="bg-primary/20 px-2 py-1 rounded-full">#linux</span>
                          <span className="bg-primary/20 px-2 py-1 rounded-full">#opensource</span>
                          <span className="bg-primary/20 px-2 py-1 rounded-full">#community</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated corner indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see your photos here? Share your event pictures with us!
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Share Your Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;