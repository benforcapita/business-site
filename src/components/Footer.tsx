
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-20 px-4 border-t border-mint/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ben Blum</h3>
            <p className="text-white/60 max-w-xs">
              Helping small businesses achieve their dreams through AI-powered mini applications and technical expertise.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/app-development" className="text-white/60 hover:text-mint transition-colors">App Development</Link></li>
              <li><Link to="/services/ai-integration" className="text-white/60 hover:text-mint transition-colors">AI Integration</Link></li>
              <li><Link to="/services/consultation" className="text-white/60 hover:text-mint transition-colors">Technical Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/60 hover:text-mint transition-colors">About Me</Link></li>
              <li><Link to="/portfolio" className="text-white/60 hover:text-mint transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-white/60 hover:text-mint transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:ben@benblum.dev" className="text-white/60 hover:text-mint transition-colors">ben@benblum.dev</a></li>
              <li><a href="tel:+15555555555" className="text-white/60 hover:text-mint transition-colors">(555) 555-5555</a></li>
              <li><a href="https://calendly.com/benblum" className="text-white/60 hover:text-mint transition-colors">Schedule a Call</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-mint/10 mt-16 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Ben Blum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
