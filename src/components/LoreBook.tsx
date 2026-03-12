import React, { useState } from 'react';
import { useGame } from '../game/GameEngine';

const LORE_ENTRIES = [
  {
    title: "Prologue: The Prophecy",
    content: "When the end begins, corruption will fall, and there shall be one with shining blonde hair, the beloved sister, fueled by grief to harbor this corruption and end everything in a wasted attempt at redemption. She will end everything. All of it."
  },
  {
    title: "The Great War",
    content: "Long ago, before the war, the gods had an experiment. Millions and billions of anti-gods created machines for war, the gods, to ease a growing corruption in a shattered world, but the anti-gods weren’t immune. So the war began."
  },
  {
    title: "The Nursery",
    content: "Sava Ioiyn Nursio. It’s the birthplace of anti-gods. Where we were made without consent. 'I didn't ask to be made.' I didn't ask for this life! Did you?"
  },
  {
    title: "The Architect",
    content: "Subject: Eri-Entity. Status: Expended. Vessel compromised by Siren-Frequency and structural reality collapse initiated by Ena-Designate. Irrecoverable. We are the Destination. You... Himo... the Anti-Gods... you are the divergent waste."
  },
  {
    title: "The Gray Abyss",
    content: "A Gray Abyss of Shattered Ruins from the two great wars, where corruption was first trapped. It is based on how you view yourself. Not my fault; you think you would be in hell, Ena. I didn’t condemn you here; you view yourself as a monster."
  }
];

export const LoreBook = () => {
  const { setGameState } = useGame();
  const [selectedEntry, setSelectedEntry] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-black text-white crt font-pixel p-8">
      <h1 className="text-5xl mb-8 text-yellow-500 tracking-widest animate-pulse">CHRONICLES</h1>
      
      <div className="w-full max-w-4xl bg-zinc-900 border-2 border-yellow-900/50 p-8 rounded-2xl shadow-[0_0_50px_rgba(234,179,8,0.1)] flex gap-8 h-[600px]">
        <div className="w-1/3 border-r border-zinc-800 pr-4 overflow-y-auto custom-scrollbar">
          {LORE_ENTRIES.map((entry, index) => (
            <button
              key={index}
              onClick={() => setSelectedEntry(index)}
              className={`w-full text-left p-4 mb-2 rounded-xl transition-all ${selectedEntry === index ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/50' : 'hover:bg-zinc-800 text-zinc-500'}`}
            >
              {entry.title}
            </button>
          ))}
        </div>
        
        <div className="w-2/3 pl-4 overflow-y-auto custom-scrollbar flex flex-col">
          <h2 className="text-3xl text-yellow-400 mb-6 border-b border-yellow-900/30 pb-4">{LORE_ENTRIES[selectedEntry].title}</h2>
          <p className="text-xl leading-relaxed text-zinc-300 italic">
            "{LORE_ENTRIES[selectedEntry].content}"
          </p>
          
          <div className="mt-auto pt-8 text-zinc-600 text-sm uppercase tracking-widest text-center">
            End of Entry
          </div>
        </div>
      </div>

      <button 
        onClick={() => setGameState('OVERWORLD')}
        className="mt-8 px-12 py-4 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-300 font-bold rounded-xl tracking-widest"
      >
        CLOSE CHRONICLES
      </button>
    </div>
  );
};
