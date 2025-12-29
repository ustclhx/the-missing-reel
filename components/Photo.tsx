import React from 'react';

interface PhotoProps {
  onBack: () => void;
}

export const Photo: React.FC<PhotoProps> = ({ onBack }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-stone-800 p-8 relative">
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 text-stone-400 hover:text-white uppercase tracking-widest text-sm"
      >
        ← 返回背包
      </button>

      <div className="bg-white p-4 pb-12 shadow-2xl rotate-1 transform hover:rotate-0 transition-transform duration-700 w-full max-w-md">
        <div className="bg-stone-300 w-full h-64 grayscale contrast-125 flex items-center justify-center overflow-hidden relative">
            <img src="https://picsum.photos/400/300?grayscale&blur=2" alt="Couple" className="object-cover w-full h-full opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="mt-4 flex justify-end">
          <p className="font-hand text-red-700 text-2xl rotate-[-2deg]">2000.05.20</p>
        </div>
      </div>
      <p className="mt-8 text-stone-500 max-w-md text-center italic">
        "苹果"和我最好的时候。那时候我们都以为未来会一直这样下去。
      </p>
    </div>
  );
};
