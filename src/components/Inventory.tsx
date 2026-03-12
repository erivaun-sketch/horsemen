import React from 'react';
import { useGame } from '../game/GameEngine';
import { ITEMS } from '../game/constants';

export const Inventory = () => {
  const { player, useItem, setGameState } = useGame();

  if (!player) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-black text-white crt font-pixel p-8">
      <h1 className="text-4xl mb-8 text-cyan-400">INVENTORY</h1>
      
      <div className="w-full max-w-2xl bg-gray-900 border-2 border-gray-700 p-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{player.icon}</span>
            <span className={`text-xl ${player.color}`}>{player.name} (LVL {player.level})</span>
          </div>
          <button 
            onClick={() => setGameState('OVERWORLD')}
            className="px-4 py-2 border-2 border-red-500 text-red-500 hover:bg-red-900 transition-colors"
          >
            EXIT
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto pr-2">
          {player.inventory.length === 0 && (
            <div className="text-center text-gray-500 py-8">Your inventory is empty...</div>
          )}
          {player.inventory.map((itemId, index) => {
            const item = ITEMS[itemId];
            return (
              <div key={`${itemId}-${index}`} className="flex justify-between items-center p-4 border border-gray-800 hover:bg-gray-800 transition-colors">
                <div>
                  <div className="text-xl text-cyan-400">{item.name}</div>
                  <div className="text-sm text-gray-400">{item.description}</div>
                </div>
                <button 
                  onClick={() => useItem(itemId, index)}
                  className="px-6 py-2 border-2 border-green-500 text-green-500 hover:bg-green-900 transition-colors"
                >
                  USE
                </button>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-3 gap-8 text-xl font-retro text-gray-400">
        <div>HP: <span className="text-red-400">{player.hp}/{player.maxHp}</span></div>
        <div>ENG: <span className="text-blue-400">{player.energy}/{player.maxEnergy}</span></div>
        <div>EXP: <span className="text-yellow-400">{player.exp}/{player.nextLevelExp}</span></div>
      </div>
    </div>
  );
};
