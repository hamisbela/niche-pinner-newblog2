/**
 * Site Configuration
 * This is the central configuration file for site-wide settings.
 * Customize this file for your specific project needs.
 */
const siteConfig = {
  // Site details
  title: "NichePinner",
  description: "NichePinner helps you discover and succeed in your perfect online niche market.",
  defaultAuthor: "NichePinner Team",
  
  // Domain configuration - single source of truth
  domain: import.meta.env.VITE_SITE_DOMAIN || "nichepinner.com",
  
  // Contact information
  contact: {
    email: "info@nichepinner.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, State 12345",
  },
  
  // Social media profiles
  social: {
    twitter: "https://twitter.com/nichepinner",
    facebook: "https://facebook.com/nichepinner",
    instagram: "https://instagram.com/nichepinner",
    linkedin: "https://linkedin.com/company/nichepinner",
  },
  
  // Navigation - main menu items
  navigation: {
    main: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog/" },
      { name: "About", path: "/about/" },
      { name: "Contact", path: "/contact/" },
    ],
    footer: [
      { name: "Privacy Policy", path: "/privacy/" },
      { name: "Terms of Service", path: "/terms/" },
      { name: "Sitemap", path: "/sitemap/" },
    ],
  },
  
  // Copyright and legal
  legal: {
    copyright: `© ${new Date().getFullYear()} NichePinner. All rights reserved.`,
    company: "NichePinner Inc.",
  },
  
  // Additional customization options
  features: {
    darkMode: false,
    comments: false,
    newsletter: false,
    search: true,
  },
};

// Derive the full URL from the domain
export function getSiteUrl(): string {
  return `https://${siteConfig.domain}`;
}

export default siteConfig;