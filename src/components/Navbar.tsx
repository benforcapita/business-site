
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const Navbar = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, isRTL } = useLanguage();

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
        <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
            className="text-white/90 hover:text-white transition-colors"
          >
            {t('navbar.services')}
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("portfolio");
            }}
            className="text-white/90 hover:text-white transition-colors"
          >
            {t('navbar.portfolio')}
          </a>
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="text-white/90 hover:text-white transition-colors"
          >
            {t('navbar.about')}
          </a>
          <a 
            href="#blog" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("blog");
            }}
            className="text-white/90 hover:text-white transition-colors"
          >
            {t('navbar.blog')}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="border-mint/20 bg-transparent hover:bg-mint/10">
                <Globe className="h-4 w-4 text-mint" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                onClick={() => changeLanguage('en')}
                className={currentLanguage === 'en' ? 'bg-mint/10 text-mint' : ''}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => changeLanguage('he')}
                className={currentLanguage === 'he' ? 'bg-mint/10 text-mint' : ''}
              >
                עברית
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            className="bg-mint hover:bg-mint/90 text-forest font-medium"
            onClick={() => scrollToSection("contact")}
          >
            {t('navbar.contact')}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
