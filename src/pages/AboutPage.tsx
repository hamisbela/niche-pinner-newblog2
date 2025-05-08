import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import { Users, Award, Star, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              About NichePinner
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-8">
              We help entrepreneurs discover profitable niches and build successful online businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Our Story
              </h2>
              <p className="text-neutral-700 mb-4">
                NichePinner was founded in 2025 by a team of experienced digital marketers and entrepreneurs who identified a common challenge: finding profitable niches in an increasingly saturated online marketplace.
              </p>
              <p className="text-neutral-700 mb-4">
                After years of trial and error in various online businesses, our founders developed a systematic approach to niche research and validation that consistently produced results. They decided to build a platform that would make this methodology accessible to entrepreneurs worldwide.
              </p>
              <p className="text-neutral-700">
                Today, NichePinner helps thousands of entrepreneurs identify untapped market opportunities, validate niche ideas with real data, and build successful online businesses in their chosen niches.
              </p>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-2 rounded-2xl shadow-xl"
              >
                <img
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="NichePinner team"
                  className="w-full h-auto rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutral-700">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-primary-50 p-3 rounded-lg inline-block mb-5">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Customer Success
              </h3>
              <p className="text-neutral-700">
                We measure our success by the success of our customers. Your growth is our ultimate goal.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-primary-50 p-3 rounded-lg inline-block mb-5">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Excellence
              </h3>
              <p className="text-neutral-700">
                We're committed to excellence in our products, our service, and our relationships with customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-primary-50 p-3 rounded-lg inline-block mb-5">
                <Star className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Innovation
              </h3>
              <p className="text-neutral-700">
                We constantly innovate to provide you with the most advanced niche research tools in the industry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-primary-50 p-3 rounded-lg inline-block mb-5">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Integrity
              </h3>
              <p className="text-neutral-700">
                We believe in honest, ethical business practices and transparent relationships with our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-neutral-700">
              Meet the experts behind NichePinner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member placeholders */}
            <div className="text-center">
              <div className="bg-neutral-200 rounded-full w-32 h-32 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-primary-900">John Doe</h3>
              <p className="text-neutral-700">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="bg-neutral-200 rounded-full w-32 h-32 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-primary-900">Jane Smith</h3>
              <p className="text-neutral-700">CTO</p>
            </div>
            <div className="text-center">
              <div className="bg-neutral-200 rounded-full w-32 h-32 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-primary-900">Alex Johnson</h3>
              <p className="text-neutral-700">Head of Research</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;