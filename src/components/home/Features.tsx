import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, BarChart4, Target } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Search className="h-8 w-8 text-primary-600" />,
    title: 'Niche Discovery',
    description: 'Find profitable niches with our advanced research tools and market analysis capabilities.'
  },
  {
    id: 2,
    icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
    title: 'Trend Analysis',
    description: 'Stay ahead of the curve with real-time trend data and predictive insights.'
  },
  {
    id: 3,
    icon: <BarChart4 className="h-8 w-8 text-primary-600" />,
    title: 'Competitive Analysis',
    description: 'Understand your competition and identify gaps in the market you can exploit.'
  },
  {
    id: 4,
    icon: <Target className="h-8 w-8 text-primary-600" />,
    title: 'Validation Tools',
    description: 'Test and validate your niche ideas before investing significant time and resources.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Powerful Tools for Niche Marketers
          </h2>
          <p className="text-lg text-neutral-700">
            Our comprehensive suite of tools helps you identify, analyze, and dominate your perfect niche.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={item}
            >
              <div className="bg-primary-50 p-3 rounded-lg inline-block mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;