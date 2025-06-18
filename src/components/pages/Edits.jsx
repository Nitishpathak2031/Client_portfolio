import React, { useState } from "react";

const editsData = [
  {
    title: "Dream",
    video: "/videos/video1.mp4"
  },
  {
    title: "Cinamatics",
    video: "/videos/video2.mp4"
  },
  {
    title: "Cinamatics",
    video: "/videos/video3.mp4"
  },

  {
    title: "Royal Enfeild",
    video: "/videos/video4.mp4"
  },

  {
    title: "Place Edit",
    video: "/videos/video5.mp4"
  },

  {
    title: "Cultural",
    video: "/videos/video6.mp4"
  }
];

const Edits = () => {
  const [playing, setPlaying] = useState(null); // index of currently playing video

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white px-6 py-20 font-orbitron">
      <h2 className="text-3xl font-bold text-center mb-10">MY BEST EDITS</h2>

      <div className="grid md:grid-cols-3 gap-8 justify-center items-center">
        {editsData.map((edit, index) => (
          <div key={index} className="text-center">
            <div
              className="relative cursor-pointer rounded overflow-hidden shadow-lg group"
              onClick={() => setPlaying(index)}
            >
              {playing === index ? (
                <video
                  src={edit.video}
                  autoPlay
                  controls
                  loop
                  muted
                  className="w-full h-64 object-cover"
                />
              ) : (
                <div className="relative">
                  <video
                    src={edit.video}
                    muted
                    className="w-full h-64 object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 opacity-0">
                    <div className="bg-white rounded-full p-4 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <h3 className="mt-4 text-lg font-serif font-bold">{edit.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Edits;
