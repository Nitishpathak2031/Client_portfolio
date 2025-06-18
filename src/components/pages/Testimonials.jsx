import { useState, useEffect } from 'react';
import video1 from '../../assets/video1.mp4'; // ✅ Make sure path is correct

const testimonials = [
  {
    name: 'MARCUS',
    role: 'Co Founder',
    text: 'Perfect communication and exceptional skills. This guy is king.',
  },
  {
    name: 'PETER',
    role: 'Manager',
    text: 'Did a great job. Understood all the requirements.',
  },
  {
    name: 'JANE',
    role: 'CEO',
    text: 'Jimmy was wonderful to work with. Will definitely hire him again.',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  const { name, role, text } = testimonials[index];

  return (
    <div className="relative min-h-screen w-full">
      
      {/* 🔥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={video1}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-white px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 font-serif">TESTIMONIALS</h2>
        <div className="w-24 h-1 rounded bg-purple-500 mb-10"></div>

        <div className="max-w-md p-8 rounded-lg text-center transition duration-500 ease-in-out">
          <h3 className="text-2xl text-amber-200 font-serif font-bold mb-1">{name}</h3>
          <p className="text-sm text-gray-200 font-serif italic mb-4">{role}</p>
          <p className="text-base font-serif text-gray-100">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
