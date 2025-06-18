import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 sm:px-8 font-orbitron">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">

        {/* Contact Info */}
        <div className="space-y-1 text-sm">
          <p>📞 +91 </p>
          <p className="flex items-center justify-center sm:justify-start space-x-2">
            <FaEnvelope className="text-purple-400" />
            <span>sumitmishra3490@gmail.com</span>
          </p>
          <p className="flex items-center justify-center sm:justify-start space-x-2">
            <FaInstagram className="text-pink-400" />
            <a href="https://www.instagram.com/sumit._mishra2?igsh=MWN0em5rcjV6Yng3NQ%3D%3D">Instagram</a>
          </p>
        </div>

        {/* Brand Text */}
        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} VideoAlchemist. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
