import React from 'react';
import Link from 'next/link';

const Footer = () => {
  // Object containing the links grouped by category
  const footerLinks = {
    Company: ['About', 'Careers', 'Press', 'Blog'],
    Support: ['Help Center', 'Safety', 'Cancellation', 'COVID-19'],
    Community: ['Blog', 'Forum', 'Events', 'Invite friends'],
    Legal: ['Terms', 'Privacy', 'Cookies', 'Guidelines']
  };

  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Grid containing the links grouped by category */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              {/* Category title */}
              <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
              {/* Links in the category */}
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    {/* Link to the page */}
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-primary text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section with copyright and terms links */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright text */}
            <p className="text-sm text-gray-600">
              © 2024 ListingApp. All rights reserved.
            </p>
            {/* Terms links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-primary text-sm">
                Terms
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary text-sm">
                Privacy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
