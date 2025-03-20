
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-white/80">Here's what businesses say about working with me</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Ben transformed our business with a custom AI app that automated our customer service. Return on investment in just 3 months!",
              author: "Sarah Chen",
              role: "Founder, RetailFlow",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            },
            {
              quote: "Working with Ben was incredible. He understood our needs immediately and delivered a solution that exceeded our expectations.",
              author: "Michael Rodriguez",
              role: "CEO, TechGrowth",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            },
            {
              quote: "The mini app Ben built helped us increase efficiency by 40%. His technical expertise and business understanding are unmatched.",
              author: "Emily Watson",
              role: "Operations Manager, CloudPeak",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-forest-light p-8 rounded-xl relative">
              <Quote className="text-mint w-8 h-8 mb-4" />
              <p className="text-white/90 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
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
  );
};

export default Testimonials;
