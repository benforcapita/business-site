import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <>
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
      
      <section id="blog" className="py-20 px-4 bg-forest-light">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-white/80">Thoughts on AI, app development, and business growth</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Leveraging AI in Small Business Applications",
                excerpt: "How small businesses can use AI to automate tasks and improve customer experience.",
                date: "May 15, 2023",
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              },
              {
                title: "The Rise of Micro SaaS Applications",
                excerpt: "Why focused, single-purpose applications are changing the software landscape.",
                date: "April 22, 2023",
                image: "https://images.unsplash.com/photo-1558655146-d09347e92766"
              },
              {
                title: "Building Apps That Scale with Your Business",
                excerpt: "Design principles for creating applications that grow alongside your company.",
                date: "March 10, 2023",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              }
            ].map((post, index) => (
              <div key={index} className="bg-forest p-6 rounded-xl border border-mint/10">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-mint text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-white/80 mb-4">{post.excerpt}</p>
                <a href="#" className="text-mint hover:underline">Read more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-white/80">Get in touch to discuss how I can help with your next project</p>
          </div>
          <div className="bg-forest-light p-8 rounded-xl border border-mint/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white/80 block">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-forest border border-mint/20 rounded-lg p-3 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/80 block">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-forest border border-mint/20 rounded-lg p-3 text-white"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-white/80 block">Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className="w-full bg-forest border border-mint/20 rounded-lg p-3 text-white"
                  placeholder="Tell me about your project"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-mint hover:bg-mint/90 text-forest font-medium px-6 py-3 rounded-lg w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
