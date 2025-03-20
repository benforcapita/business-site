
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="text-2xl font-bold text-white"
        >
          Ben Blum
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
            className="text-white/90 hover:text-white transition-colors"
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("portfolio");
            }}
            className="text-white/90 hover:text-white transition-colors"
          >
            Portfolio
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="text-white/90 hover:text-white transition-colors"
          >
            About Me
          </a>
          <a 
            href="#blog" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("blog");
            }}
            className="text-white/90 hover:text-white transition-colors"
          >
            Blog
          </a>
        </div>
        <Button 
          className="bg-mint hover:bg-mint/90 text-forest font-medium"
          onClick={() => scrollToSection("contact")}
        >
          Contact Me
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
