import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Smartphone, Laptop } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import InventoryAIAssistant from "@/components/previews/InventoryAIAssistant";
import CustomerServiceBot from "@/components/previews/CustomerServiceBot";
import SalesAnalyticsDashboard from "@/components/previews/SalesAnalyticsDashboard";

const Portfolio = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: t('mobilePreview.project1.title'),
      description: t('mobilePreview.project1.description'),
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
      category: t('mobilePreview.category1'),
      icon: <Smartphone className="h-5 w-5 text-mint" />
    },
    {
      title: t('mobilePreview.project2.title'),
      description: t('mobilePreview.project2.description'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: t('mobilePreview.category2'),
      icon: <Monitor className="h-5 w-5 text-mint" />
    },
    {
      title: t('mobilePreview.project3.title'),
      description: t('mobilePreview.project3.description'),
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      category: t('mobilePreview.category3'),
      icon: <Laptop className="h-5 w-5 text-mint" />
    }
  ];

  // Open drawer with the selected project
  const openProjectPreview = (index: number) => {
    setActiveProject(index);
    setDrawerOpen(true);
  };

  // Render the active project preview component
  const renderProjectPreview = () => {
    if (activeProject === null) return null;

    switch (activeProject) {
      case 0:
        return <InventoryAIAssistant />;
      case 1:
        return <CustomerServiceBot />;
      case 2:
        return <SalesAnalyticsDashboard />;
      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('mobilePreview.title')}</h2>
          <p className="text-white/80">
            {t('mobilePreview.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-forest-light rounded-xl overflow-hidden border border-mint/10 transition-all hover:border-mint/30 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className={`flex items-center gap-2 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {project.icon}
                  <span className="text-mint text-sm">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <Button 
                  variant="ghost" 
                  className={`px-0 text-mint hover:text-mint/80 hover:bg-transparent ${isRTL ? 'flex flex-row-reverse' : ''}`}
                  onClick={() => openProjectPreview(index)}
                >
                  {t('mobilePreview.viewDetails')} 
                  {isRTL ? 
                    <ArrowRight className="mr-2 h-4 w-4 transform rotate-180" /> : 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  }
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className={`bg-mint hover:bg-mint/90 text-forest font-medium ${isRTL ? 'flex flex-row-reverse mx-auto' : ''}`}
          >
            {t('mobilePreview.viewAllProjects')} 
            {isRTL ? 
              <ArrowRight className="mr-2 h-5 w-5 transform rotate-180" /> : 
              <ArrowRight className="ml-2 h-5 w-5" />
            }
          </Button>
        </div>
      </div>

      {/* App Preview Drawer */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="bg-forest h-[90vh] overflow-y-auto">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold">
              {activeProject !== null && projects[activeProject].title}
            </DrawerTitle>
          </DrawerHeader>
          <div className="px-4 py-2">
            {renderProjectPreview()}
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" className="border-white/20">
                {t('previews.common.close')}
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default Portfolio;