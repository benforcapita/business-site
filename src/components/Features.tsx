
import React from "react";
import { Code, Zap, Lightbulb } from "lucide-react";

const Features = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            How I Can Help
          </h2>
          <p className="text-white/80">Leveraging AI to create powerful solutions for your business</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Custom App Development",
              description: "From concept to deployment, I build AI-powered mini apps tailored to your specific business needs",
            },
            {
              icon: Zap,
              title: "AI Integration",
              description: "Transform your business with smart AI features that automate tasks and improve decision-making",
            },
            {
              icon: Code,
              title: "Technical Consultation",
              description: "Get expert advice on your technical challenges from someone with 10+ years of experience",
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-forest-light p-8 rounded-xl border border-mint/10"
            >
              <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center mb-6">
                {React.createElement(feature.icon, { className: "w-6 h-6 text-forest" })}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
