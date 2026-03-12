import React from 'react';
import { useGame } from '../game/GameEngine';

export const GameOver = () => {
  const { setGameState } = useGame();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-black text-white crt font-pixel p-8 text-center overflow-hidden">
      <div className="absolute inset-0 scanlines pointer-events-none opacity-40" />
      <h1 className="text-6xl text-red-600 mb-8 crt-flicker glitch-text">CYCLE TERMINATED</h1>
      <p className="text-gray-400 mb-12 font-retro text-2xl max-w-xl">
        "The universe is a buggy mess and you four are the goddamn patch!"
      </p>
      <button 
        onClick={() => setGameState('TITLE')}
        className="px-6 py-3 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all text-xl relative z-10"
      >
        REBOOT SYSTEM
      </button>
    </div>
  );
};
