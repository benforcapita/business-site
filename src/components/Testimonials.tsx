import { Quote } from "lucide-react";
import { useState } from "react";
import { BlogPost, getBlogPosts } from "./BlogPost";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const { isRTL } = useLanguage();
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const handleOpenPost = (id: number) => {
    setSelectedPostId(id);
    setIsPostOpen(true);
  };

  const handleClosePost = () => {
    setIsPostOpen(false);
  };

  // Get blog posts based on current language
  const blogPosts = getBlogPosts(i18n.language);

  // Testimonial data based on translations
  const testimonials = [
    {
      quote: t('testimonials.testimonial1.quote'),
      author: t('testimonials.testimonial1.author'),
      role: t('testimonials.testimonial1.role'),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      quote: t('testimonials.testimonial2.quote'),
      author: t('testimonials.testimonial2.author'),
      role: t('testimonials.testimonial2.role'),
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      quote: t('testimonials.testimonial3.quote'),
      author: t('testimonials.testimonial3.author'),
      role: t('testimonials.testimonial3.role'),
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  return (
    <>
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
            <p className="text-white/80">{t('testimonials.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-forest-light p-8 rounded-xl relative">
                <Quote className="text-mint w-8 h-8 mb-4" />
                <p className="text-white/90 mb-6">{testimonial.quote}</p>
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="blog" className="py-20 px-4 bg-forest-light">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('blog.title')}</h2>
            <p className="text-white/80">{t('blog.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className="bg-forest p-6 rounded-xl border border-mint/10 hover:border-mint/30 transition-all cursor-pointer" 
                onClick={() => handleOpenPost(post.id)}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-mint text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-white/80 mb-4">{post.excerpt}</p>
                <button className={`text-mint hover:underline ${isRTL ? 'flex items-center flex-row-reverse' : ''}`}>
                  {t('common.readMore')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-white/80">{t('contact.subtitle')}</p>
          </div>
          <div className="bg-forest-light p-8 rounded-xl border border-mint/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white/80 block">{t('contact.name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-forest border border-mint/20 rounded-lg p-3 text-white"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/80 block">{t('contact.email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-forest border border-mint/20 rounded-lg p-3 text-white"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-white/80 block">{t('contact.message')}</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className="w-full bg-forest border border-mint/20 rounded-lg p-3 text-white"
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-mint hover:bg-mint/90 text-forest font-medium px-6 py-3 rounded-lg w-full md:w-auto"
              >
                {t('contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Blog Post Drawer */}
      <BlogPost isOpen={isPostOpen} postId={selectedPostId} onClose={handleClosePost} />
    </>
  );
};

export default Testimonials;
