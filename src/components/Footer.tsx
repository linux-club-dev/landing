import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center">
                <img
                  src="/1714018256921.jpeg"
                  alt="Logo"
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xl font-bold">Linux Club</span>
            </div>
            <p className="text-muted-foreground">
              Building the future of open source, one event at a time.
            </p>
            <div className="mt-3">
            <a href="mailto:linuxclubpune@gmail.com" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>linuxclubpune@gmail.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="#organizers" className="text-muted-foreground hover:text-primary transition-colors">Organizers</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent">Community</h4>
            <ul className="space-y-2">
              <li><a href="https://chat.whatsapp.com/Kh2Ek2wW45DA7yMWCf0HAN" className="text-muted-foreground hover:text-accent transition-colors">Join Whatsapp</a></li>
              <li><a href="https://github.com/linux-club-dev" className="text-muted-foreground hover:text-accent transition-colors">GitHub</a></li>
              <li><a href="https://x.com/i/communities/1607126742795448320" className="text-muted-foreground hover:text-accent transition-colors">Twitter</a></li>
              <li><a href="https://www.linkedin.com/company/thelinux-club" className="text-muted-foreground hover:text-accent transition-colors">Linkedin</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Linux Club. Made with <span className="text-red-500">❤️</span> and open source.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;