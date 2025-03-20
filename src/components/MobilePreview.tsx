
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MobilePreview = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">AI-Powered Mini Apps</h2>
          <p className="text-white/80 max-w-md">
            I specialize in creating powerful, compact applications that leverage AI to solve specific business problems. From customer service bots to inventory management systems.
          </p>
          <Button className="bg-mint hover:bg-mint/90 text-forest font-medium">
            View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6"
            alt="AI app interface"
            className="rounded-2xl shadow-2xl mx-auto max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default MobilePreview;
