import React from 'react';
import { useGame } from '../game/GameEngine';
import { CHARACTERS } from '../game/constants';

export const CharacterSelect = () => {
  const { setPlayer, setGameState } = useGame();

  const handleSelect = (key: string) => {
    setPlayer({ ...CHARACTERS[key] });
    setGameState('OVERWORLD');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-black text-white crt font-pixel p-8 overflow-hidden">
      <div className="absolute inset-0 scanlines pointer-events-none opacity-20" />
      <h2 className="text-3xl text-red-500 mb-8 text-center glitch-text">SELECT YOUR VESSEL</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl w-full overflow-y-auto max-h-[80vh] p-4">
        {Object.entries(CHARACTERS).map(([key, char]) => (
          <div 
            key={key}
            onClick={() => handleSelect(key)}
            className={`border-2 border-gray-800 p-4 cursor-pointer hover:border-red-500 transition-all flex flex-col items-center ${char.color} hover:bg-red-900/10 group relative`}
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{char.icon}</div>
            <h3 className="text-lg mb-2 truncate w-full text-center">{char.name}</h3>
            <div className="text-[10px] font-retro text-gray-400 w-full space-y-1">
              <div className="flex justify-between"><span>HP</span><span>{char.hp}</span></div>
              <div className="flex justify-between"><span>ENG</span><span>{char.energy}</span></div>
              <div className="flex justify-between"><span>ATK</span><span>{char.attack}</span></div>
              <div className="flex justify-between"><span>DEF</span><span>{char.defense}</span></div>
              <p className="mt-2 text-yellow-500 text-center border-t border-gray-800 pt-1">{char.skillName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
