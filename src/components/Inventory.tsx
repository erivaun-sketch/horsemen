import React from 'react';
import { useGame } from '../game/GameEngine';
import { ITEMS } from '../game/constants';

export const Inventory = () => {
  const { player, useItem, setGameState } = useGame();

  if (!player) return null;

  const sortedInventory = [...player.inventory].sort((a, b) => {
    const itemA = ITEMS[a];
    const itemB = ITEMS[b];
    if (itemA.type !== itemB.type) {
      return itemA.type === 'EQUIPMENT' ? -1 : 1;
    }
    return itemA.name.localeCompare(itemB.name);
  });

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-black text-white crt font-pixel p-8">
      <h1 className="text-5xl mb-8 text-cyan-400 tracking-widest animate-pulse">INVENTORY</h1>
      
      <div className="w-full max-w-3xl bg-zinc-900 border-2 border-zinc-700 p-8 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.2)]">
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-zinc-800">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-zinc-800 rounded-2xl flex items-center justify-center text-5xl border-2 border-zinc-700 shadow-inner">
              {player.icon}
            </div>
            <div>
              <div className={`text-3xl font-bold ${player.color}`}>{player.name}</div>
              <div className="text-zinc-500 uppercase tracking-tighter text-sm">Level {player.level} {player.class}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setGameState('LORE_BOOK')}
              className="px-6 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300 font-bold rounded-xl"
            >
              LORE
            </button>
            <button 
              onClick={() => setGameState('OVERWORLD')}
              className="px-8 py-3 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 font-bold rounded-xl"
            >
              CLOSE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 max-h-[450px] overflow-y-auto pr-4 custom-scrollbar">
          {player.inventory.length === 0 && (
            <div className="text-center text-zinc-600 py-12 text-xl italic">"Your pockets are empty, wanderer..."</div>
          )}
          {sortedInventory.map((itemId, index) => {
            const item = ITEMS[itemId];
            const isEquipped = player.equipment.includes(itemId);
            return (
              <div key={`${itemId}-${index}`} className={`flex justify-between items-center p-5 border ${isEquipped ? 'border-cyan-500 bg-cyan-950/20' : 'border-zinc-800 bg-zinc-900/50'} rounded-xl hover:border-zinc-600 transition-all group`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${item.type === 'EQUIPMENT' ? 'bg-purple-900/30 text-purple-400' : 'bg-green-900/30 text-green-400'}`}>
                    {item.type === 'EQUIPMENT' ? '⚔️' : '🧪'}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.name} {isEquipped && <span className="text-xs bg-cyan-500 text-black px-2 py-0.5 rounded ml-2">EQUIPPED</span>}
                    </div>
                    <div className="text-sm text-zinc-500 max-w-md">{item.description}</div>
                  </div>
                </div>
                <button 
                  onClick={() => useItem(itemId, index)}
                  className={`px-8 py-2 border-2 ${item.type === 'EQUIPMENT' ? 'border-purple-500 text-purple-500 hover:bg-purple-500' : 'border-green-500 text-green-500 hover:bg-green-500'} hover:text-white transition-all duration-300 font-bold rounded-lg`}
                >
                  {item.type === 'EQUIPMENT' ? (isEquipped ? 'UNEQUIP' : 'EQUIP') : 'USE'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-10 grid grid-cols-4 gap-12 text-center">
        <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
          <div className="text-zinc-500 text-xs uppercase mb-1">Health</div>
          <div className="text-2xl font-bold text-red-400">{player.hp} / {player.maxHp}</div>
        </div>
        <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
          <div className="text-zinc-500 text-xs uppercase mb-1">Energy</div>
          <div className="text-2xl font-bold text-blue-400">{player.energy} / {player.maxEnergy}</div>
        </div>
        <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
          <div className="text-zinc-500 text-xs uppercase mb-1">Attack</div>
          <div className="text-2xl font-bold text-orange-400">{player.attack}</div>
        </div>
        <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
          <div className="text-zinc-500 text-xs uppercase mb-1">Defense</div>
          <div className="text-2xl font-bold text-emerald-400">{player.defense}</div>
        </div>
      </div>
    </div>
  );
};
