
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Smartphone, Tab } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Inventory AI Assistant",
      description: "An AI-powered inventory management system that predicts stock needs and automates reordering.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
      category: "Mobile App",
      icon: <Smartphone className="h-5 w-5 text-mint" />
    },
    {
      title: "Customer Service Bot",
      description: "Intelligent chatbot that handles 80% of customer inquiries without human intervention.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "Web Application",
      icon: <Monitor className="h-5 w-5 text-mint" />
    },
    {
      title: "Sales Analytics Dashboard",
      description: "Real-time sales performance tracker with AI-powered insights and forecasting.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      category: "Tablet Dashboard",
      icon: <Tab className="h-5 w-5 text-mint" />
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">AI-Powered Mini Apps</h2>
          <p className="text-white/80">
            I specialize in creating powerful, compact applications that leverage AI to solve specific business problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-forest-light rounded-xl overflow-hidden border border-mint/10 transition-all hover:border-mint/30 hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {project.icon}
                  <span className="text-mint text-sm">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <Button variant="ghost" className="px-0 text-mint hover:text-mint/80 hover:bg-transparent">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-mint hover:bg-mint/90 text-forest font-medium">
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
