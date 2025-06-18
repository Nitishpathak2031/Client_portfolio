import React from 'react';
import { motion } from 'framer-motion';
import hero2 from '../../assets/hero2.png'; // replace with your actual image path

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white px-4 sm:px-6 py-20 font-orbitron">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 border-b-2 border-purple-600 inline-block">
            ABOUT ME
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
            As a video editor, your portfolio should showcase your unique style, skills,
            experience, and personality in a compelling and concise manner. This section
            provides a sample of my work, which can be tailored to highlight specific
            expertise depending on project requirements and the nature of the work, such as
            cinematic, commercial, social media, or YouTube content.
          </p>

          <ul className="space-y-3 mt-6">
            {['Cinamatics', 'Reels Editing', 'Event Editing', 'Creative Edit'].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-sm sm:text-base tracking-wide">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section with Motion + Blend */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full relative flex flex-col items-center"
        >
          {/* Image */}
          <img
            src={hero2}
            alt="About Jimmy"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto relative z-10"
          />

          {/* Bottom Gradient Blend */}
          <div className="absolute bottom-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-20 bg-gradient-to-t from-purple-900 to-transparent z-20 rounded-b-lg" />

          {/* Bottom Border Line */}
          
        </motion.div>

      </div>
    </div>
  );
};

export default About;
