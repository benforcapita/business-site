
import { Button } from "@/components/ui/button";
import { ArrowRight, Code } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4">
      <div className={`container mx-auto grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'reverse-flex' : ''}`}>
        <div className="space-y-8">
          <div className={`flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Code className="w-4 h-4 text-mint" />
            <span className="text-mint text-sm font-medium">10+ Years Experience</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-white/80 max-w-md">
            {t('hero.subtitle')}
          </p>
          <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Button 
              className={`bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg ${isRTL ? 'flex flex-row-reverse' : ''}`}
              onClick={() => scrollToSection("services")}
            >
              {t('hero.cta')} {isRTL ? <ArrowRight className="mr-2 h-5 w-5 transform rotate-180" /> : <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>
            <Button 
              variant="outline" 
              className="border-mint/20 text-mint hover:bg-mint/10"
              onClick={() => scrollToSection("portfolio")}
            >
              {t('hero.secondaryCta')}
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" />
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
            alt="Ben Blum working on code"
            className="relative rounded-2xl shadow-2xl"
          />
          <div className={`absolute -bottom-10 ${isRTL ? '-right-10' : '-left-10'} bg-forest-light p-6 rounded-xl shadow-xl border border-mint/10`}>
            <p className="text-mint text-4xl font-bold">10+</p>
            <p className="text-white/80">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
