import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Compass size={28} className="text-primary-400 mr-2" />
              <span className="text-xl font-bold">NichePinner</span>
            </Link>
            <p className="text-neutral-400 mt-4 max-w-xs">
              Helping you discover and succeed in your perfect online niche market.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary-400 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-400 hover:text-primary-400 transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">Niche Research</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">Market Analysis</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">Tutorials</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:info@nichepinner.com" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  info@nichepinner.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} NichePinner. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6 text-sm">
            <a href="#" className="text-neutral-500 hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;