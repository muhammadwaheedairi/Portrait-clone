import React from 'react';

const NetworkDiagramNode: React.FC<{ label?: string; main?: boolean; src?: string; position?: string }> = ({ label, main, src, position }) => (
  <div className={`absolute flex flex-col items-center gap-2 ${position} z-10`}>
    {label && <div className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm border ${main ? 'bg-orange-400 text-white border-orange-500' : 'bg-white text-gray-600 border-gray-200'}`}>{label}</div>}
    <div className={`rounded-full p-1 ${main ? 'bg-gradient-to-br from-blue-100 to-purple-100 border-4 border-white shadow-xl' : 'bg-white border border-gray-200 shadow-sm'}`}>
       <img 
         src={src || `https://picsum.photos/50/50?random=${Math.random()}`} 
         className={`rounded-full object-cover ${main ? 'w-20 h-20' : 'w-10 h-10 grayscale opacity-80'}`} 
         alt="Node"
       />
    </div>
    {main && <span className="text-xs text-gray-400 font-medium mt-1">You</span>}
  </div>
);

const PeerRow: React.FC<{ name: string; active?: boolean }> = ({ name, active }) => (
  <div className={`flex items-center gap-3 px-3 py-1.5 rounded-full bg-white border ${active ? 'border-green-400 ring-2 ring-green-50' : 'border-gray-200'}`}>
    <img src={`https://picsum.photos/40/40?random=${name}`} className="w-6 h-6 rounded-full object-cover" alt={name} />
    <span className="text-xs font-medium text-gray-700">{name}</span>
  </div>
);

const NetworkDiagram: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50/30 relative">
       <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-500 mb-6">
            Built on a network of people, not platforms.
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            A global <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">network</span> for your<br />
            identity, powered by people.
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
            On social media, you follow each other, on Portrait you host each other—without relying on centralized platforms. This is how the web should have been.
          </p>

          <div className="relative h-[500px] max-w-4xl mx-auto bg-white/0">
             {/* Connection Lines (SVG) */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-gray-300" style={{ strokeDasharray: "6 6" }}>
                {/* Center to Right */}
                <path d="M 50% 50% L 80% 30%" strokeWidth="1.5" fill="none" />
                <path d="M 50% 50% L 80% 45%" strokeWidth="1.5" fill="none" />
                <path d="M 50% 50% L 80% 60%" strokeWidth="1.5" fill="none" />
                <path d="M 50% 50% L 80% 75%" strokeWidth="1.5" fill="none" />
                
                {/* Center to Left */}
                <path d="M 50% 50% L 20% 35%" strokeWidth="1.5" fill="none" />
                <path d="M 50% 50% L 20% 50%" strokeWidth="1.5" fill="none" />
                <path d="M 50% 50% L 20% 65%" strokeWidth="1.5" fill="none" />
             </svg>

             {/* Central Tooltip Box */}
             <div className="absolute top-[15%] left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-lg rounded-xl p-4 z-20 max-w-xs text-left hidden md:block">
               <p className="text-xs text-gray-600 leading-relaxed">
                 You and your peers store <strong className="text-gray-900">copies of each other's data</strong>, making it available to anyone on the internet.
               </p>
             </div>

             {/* Left Nodes (Generic) */}
             <div className="absolute top-[35%] left-[18%] flex items-center gap-2 opacity-40">
               <div className="w-8 h-8 rounded-full bg-gray-200"></div>
               <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
             </div>
             <div className="absolute top-[50%] left-[18%] flex items-center gap-2">
               <div className="px-3 py-1 bg-white rounded-full border border-gray-200 text-xs font-medium shadow-sm">John</div>
               <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200"></div>
             </div>
             <div className="absolute top-[65%] left-[18%] flex items-center gap-2 opacity-40">
               <div className="w-8 h-8 rounded-full bg-gray-200"></div>
               <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
             </div>

             {/* Center Node (You) */}
             <NetworkDiagramNode 
               main 
               src="https://picsum.photos/150/150?random=20" 
               position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
             />

             {/* Orange Callout */}
             <div className="absolute top-[40%] left-[32%] bg-orange-400 text-white px-4 py-2 rounded-lg rounded-bl-none text-xs font-bold shadow-md z-30">
               Requesting<br/>Emma's Portrait
             </div>

             {/* Right Nodes (Peers) */}
             <div className="absolute top-[25%] right-[15%] text-left hidden md:block">
               <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-4 ml-2">Peers you host</p>
               <div className="flex flex-col gap-6">
                 <PeerRow name="Sophia" />
                 <PeerRow name="Anthony" />
                 <PeerRow name="Sarah" />
                 <PeerRow name="Emma" active />
                 <PeerRow name="James" />
               </div>
             </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-medium mt-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            95 Portrait nodes active
          </div>
       </div>
    </section>
  );
};

export default NetworkDiagram;