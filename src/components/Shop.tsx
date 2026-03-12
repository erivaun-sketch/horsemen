import React from 'react';
import { useGame } from '../game/GameEngine';
import { ITEMS } from '../game/constants';

export const Shop = () => {
  const { player, shopItems, buyItem, setGameState, gacha } = useGame();

  if (!player) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-black text-white crt font-pixel p-8">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-6xl text-yellow-400 tracking-tighter font-black italic">NEON EMPORIUM</h1>
        <div className="h-1 w-64 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-2"></div>
      </div>
      
      <div className="w-full max-w-3xl bg-zinc-900 border-2 border-zinc-700 p-10 rounded-3xl shadow-[0_0_50px_rgba(250,204,21,0.1)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400/20"></div>
        
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-zinc-800">
          <div className="flex items-center gap-4 bg-zinc-800/50 px-6 py-3 rounded-2xl border border-zinc-700">
            <span className="text-2xl">💎</span>
            <span className="text-3xl font-black text-cyan-400">{player.soulShards}</span>
            <span className="text-zinc-500 text-xs uppercase font-bold tracking-widest ml-2">Available</span>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={gacha}
              disabled={player.soulShards < 100}
              className="px-6 py-4 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 font-black rounded-2xl tracking-widest disabled:opacity-50"
            >
              GACHAPON (100💎)
            </button>
            <button 
              onClick={() => setGameState('OVERWORLD')}
              className="px-10 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 font-black rounded-2xl tracking-widest"
            >
              LEAVE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
          {shopItems.map(itemId => {
            const item = ITEMS[itemId];
            const canAfford = player.soulShards >= item.price;
            return (
              <div key={itemId} className="flex justify-between items-center p-6 border border-zinc-800 bg-zinc-900/80 rounded-2xl hover:border-yellow-500/50 transition-all group">
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl ${item.type === 'EQUIPMENT' ? 'bg-purple-900/20' : 'bg-green-900/20'}`}>
                    {item.type === 'EQUIPMENT' ? '⚔️' : '🧪'}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">{item.name}</div>
                    <div className="text-sm text-zinc-500 max-w-xs">{item.description}</div>
                    <div className="mt-2 text-xs font-mono text-zinc-600 uppercase tracking-widest">{item.type}</div>
                  </div>
                </div>
                <button 
                  onClick={() => buyItem(itemId)}
                  disabled={!canAfford}
                  className={`px-8 py-4 border-2 ${canAfford ? 'border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black' : 'border-zinc-700 text-zinc-700'} transition-all duration-300 font-black rounded-xl flex flex-col items-center min-w-[160px]`}
                >
                  <span className="text-xl">{item.price}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase opacity-70">SHARDS</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-12 flex items-center gap-4 text-zinc-600 italic text-lg">
        <span className="w-12 h-px bg-zinc-800"></span>
        <span>"Everything has a price in the digital void..."</span>
        <span className="w-12 h-px bg-zinc-800"></span>
      </div>
    </div>
  );
};
