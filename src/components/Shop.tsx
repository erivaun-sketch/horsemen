import React from 'react';
import { useGame } from '../game/GameEngine';
import { ITEMS } from '../game/constants';

export const Shop = () => {
  const { player, shopItems, buyItem, setGameState } = useGame();

  if (!player) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-black text-white crt font-pixel p-8">
      <h1 className="text-4xl mb-8 text-yellow-400">NEON EMPORIUM</h1>
      
      <div className="w-full max-w-2xl bg-gray-900 border-2 border-gray-700 p-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700">
          <span className="text-xl">Your Shards: <span className="text-purple-400">{player.soulShards}</span></span>
          <button 
            onClick={() => setGameState('OVERWORLD')}
            className="px-4 py-2 border-2 border-red-500 text-red-500 hover:bg-red-900 transition-colors"
          >
            EXIT
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 max-h-[60vh] overflow-y-auto pr-2">
          {shopItems.map(itemId => {
            const item = ITEMS[itemId];
            return (
              <div key={itemId} className="flex justify-between items-center p-4 border border-gray-800 hover:bg-gray-800 transition-colors">
                <div>
                  <div className="text-xl text-cyan-400">{item.name}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
                <button 
                  onClick={() => buyItem(itemId)}
                  disabled={player.soulShards < item.price}
                  className="px-6 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-900 disabled:opacity-50 disabled:border-gray-600 disabled:text-gray-600 transition-colors"
                >
                  {item.price} SHARDS
                </button>
              </div>
            );
          })}
        </div>
      </div>
      
      <p className="mt-8 text-gray-500 animate-pulse">"Everything has a price in the digital void..."</p>
    </div>
  );
};
