
import React from "react";
import { Code, Zap, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

const Features = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  const features = [
    {
      icon: Lightbulb,
      title: t('features.service1.title'),
      description: t('features.service1.description'),
    },
    {
      icon: Zap,
      title: t('features.service2.title'),
      description: t('features.service2.description'),
    },
    {
      icon: Code,
      title: t('features.service3.title'),
      description: t('features.service3.description'),
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {t('features.title')}
          </h2>
          <p className="text-white/80">{t('features.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
