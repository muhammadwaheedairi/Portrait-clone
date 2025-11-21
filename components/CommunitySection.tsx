import React from 'react';

const avatars = [
  "https://picsum.photos/100/100?random=10",
  "https://picsum.photos/100/100?random=11",
  "https://picsum.photos/100/100?random=12",
  "https://picsum.photos/100/100?random=13",
  "https://picsum.photos/100/100?random=14",
  "https://picsum.photos/100/100?random=15",
  "https://picsum.photos/100/100?random=16",
];

const CommunitySection: React.FC = () => {
  return (
    <section className="py-20 bg-white text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Fan of cards */}
        <div className="relative h-24 md:h-32 max-w-2xl mx-auto mb-12">
          {avatars.map((src, i) => {
            const rotation = (i - 3) * 5; // -15, -10, -5, 0, 5, 10, 15
            const translateY = Math.abs(i - 3) * 5;
            return (
              <div 
                key={i}
                className="absolute top-0 w-16 h-20 md:w-20 md:h-24 bg-white rounded-xl shadow-lg border border-gray-100 p-1 transform transition-transform hover:scale-110 hover:z-10"
                style={{
                  left: `calc(50% + ${(i - 3) * 50}px - 40px)`,
                  transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
                  zIndex: 10 - Math.abs(i - 3)
                }}
              >
                <img src={src} alt="User" className="w-full h-full object-cover rounded-lg" />
              </div>
            );
          })}
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
          Not a feed. Not a social network. A Portrait.
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
          Finally, a place on the<br />
          internet that <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">feels like you.</span>
        </h2>

        <button className="bg-brand-dark text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-black transition-colors shadow-lg shadow-gray-200/50">
          Join 3,631+ others
        </button>
        
        <p className="mt-6 text-xs text-gray-500 font-medium">Your Portrait is your own space on the internet.</p>
      </div>
    </section>
  );
};

export default CommunitySection;