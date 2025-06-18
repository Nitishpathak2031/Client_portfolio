// src/Components/Pages/Home.jsx
import React from 'react';
import hero from '../../assets/hero.png';
import { motion } from 'framer-motion';
import { FaPlay, FaMagic } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white px-4 sm:px-6 font-orbitron flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between gap-10 md:gap-0">

        {/* Text Section */}
        <div className="space-y-4 w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <p className="text-sm text-purple-400 font-serif uppercase tracking-widest">Sumit Mishra</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif">
            Professional<br />Video Editor
          </h1>
          <p className="text-gray-300 font-serif text-sm sm:text-base">
            Professional video editor with 2 years of experience creating high-impact content for YouTube,
            Instagram, short films, ads, and music videos.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-md mt-2 mb-4 text-white font-serif font-bold transition-transform hover:scale-105">
            LET’S TALK
          </button>
        </div>

        {/* Image + Animated Icons */}
        <div className="relative w-full md:w-1/2 flex items-end justify-center pb-4 md:pb-0">
          <motion.img 
            src={hero} 
            alt="Hero" 
            className="w-44 sm:w-60 rounded-lg mt-16 object-cover shadow-xl md:w-72 lg:w-80 drop-shadow-lg" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          />
          <div className="absolute bottom-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-20 bg-gradient-to-t from-purple-900 to-transparent z-20 rounded-b-lg" />
          
          {/* Floating Icon - Left */}
          <motion.div 
            className="absolute top-18 left-2 sm:left-6 text-pink-400 text-xl sm:text-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaPlay />
          </motion.div>

          {/* Floating Icon - Right */}
          <motion.div 
            className="absolute top-18 right-2 sm:right-6 text-purple-400 text-xl sm:text-2xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaMagic />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
