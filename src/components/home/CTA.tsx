import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Niche?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have discovered profitable niches and built successful businesses with NichePinner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#" 
              className="btn bg-white text-primary-900 hover:bg-neutral-100"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;