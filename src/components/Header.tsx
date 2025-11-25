import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center">
            <img src="/1714018256921.jpeg" alt="Logo" className="w-8 h-8 object-contain" loading="lazy" />
          </div>
          <span className="text-xl font-bold">Linux Club</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#events" className="text-muted-foreground hover:text-primary transition-colors">
            Events
          </a>
          <a href="#organizers" className="text-muted-foreground hover:text-primary transition-colors">
            Organizers
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button className="bg-primary hover:bg-primary/80">
          <a href="https://chat.whatsapp.com/Kh2Ek2wW45DA7yMWCf0HAN">Join Us</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;