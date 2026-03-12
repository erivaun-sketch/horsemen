import React from 'react';
import { useGame } from '../game/GameEngine';

export const TitleScreen = () => {
  const { setGameState, showDialogue, resetGame } = useGame();

  const handleStart = () => {
    // Check if player already exists (from save)
    const savedPlayer = localStorage.getItem('soul_shards_player');
    if (savedPlayer) {
      setGameState('OVERWORLD');
      return;
    }

    showDialogue([
      "PERFORMANCE REVIEW INITIATED.",
      "ASSESSING PROGRESS FOR CYCLE OMEGA.",
      "STATUS: DELINQUENT.",
      "SCHEDULED TERMINATION EVENT WILL COMMENCE IN: 217 DAYS",
      "FAILURE TO COMPLY WILL RESULT IN FORCED REDUNDANCY.",
      "HAVE A PRODUCTIVE DAY."
    ], 'CHARACTER_SELECT');
    setGameState('CUTSCENE');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-black text-white crt font-pixel p-8 text-center overflow-hidden">
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
      <h1 className="text-4xl md:text-7xl text-red-500 mb-4 crt-flicker glitch-text tracking-tighter">HORSEMEN CHRONICLES</h1>
      <h2 className="text-2xl md:text-3xl text-purple-400 mb-12 tracking-widest opacity-80">CYCLE OMEGA</h2>
      
      <p className="text-gray-400 mb-12 max-w-2xl text-sm leading-relaxed font-retro text-xl">
        "The world is ending. Embrace the chaos. Embrace the nightmare."<br/><br/>
        Play as one of the four cosmic forces of destruction, or the tragic anti-god Ena, as you navigate a neon-soaked, broken reality.<br/><br/>
        Explore Shibuya, Blackwood University, The Metaverse, and Hell itself. Face off against Lux, Velvette, Eri Vaun, and the Architect.
      </p>

      <div className="flex flex-col gap-4">
        <button 
          onClick={handleStart}
          className="px-12 py-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-2xl font-bold tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]"
        >
          START CYCLE OMEGA
        </button>

        <button 
          onClick={() => {
            if (window.confirm("Are you sure you want to delete all progress? This cannot be undone.")) {
              resetGame();
            }
          }}
          className="px-6 py-2 text-red-500 hover:text-red-400 transition-colors text-sm font-bold tracking-widest opacity-50 hover:opacity-100"
        >
          RESET SYSTEM DATA
        </button>
      </div>
    </div>
  );
};
