import React from 'react';
import { useGame } from '../game/GameEngine';
import { ENEMIES } from '../game/constants';

export const Overworld = () => {
  const { currentMap, playerPos, player } = useGame();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-black text-white crt font-pixel overflow-hidden">
      <div className="absolute inset-0 scanlines pointer-events-none opacity-10" />
      <div className="mb-4 text-center relative z-10">
        <h2 className="text-xl text-purple-400 glitch-text">{currentMap.name}</h2>
        <p className="text-[10px] text-gray-500 font-retro uppercase tracking-widest">WASD to Move | I for Inventory</p>
      </div>

      <div 
        className="grid bg-gray-900 border-4 border-gray-800 pixel-borders relative z-10 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
        style={{ 
          gridTemplateColumns: `repeat(${currentMap.width}, 1.5rem)`,
          gridTemplateRows: `repeat(${currentMap.height}, 1.5rem)`
        }}
      >
        {currentMap.tiles.map((row, y) => 
          row.map((tile, x) => {
            // Determine what is on this tile
            let content = '';
            let bgColor = 'bg-gray-900';
            
            if (tile === 'WALL') bgColor = 'bg-gray-800 border border-gray-700';
            if (tile === 'NEON') bgColor = 'bg-pink-900 border border-pink-500 crt-flicker';
            if (tile === 'DOOR') bgColor = 'bg-blue-900 border border-blue-500';

            const isPlayer = playerPos.x === x && playerPos.y === y;
            const enemy = currentMap.enemies.find(e => e.pos.x === x && e.pos.y === y);
            const npc = currentMap.npcs.find(n => n.pos.x === x && n.pos.y === y);
            const door = currentMap.doors?.find(d => d.pos.x === x && d.pos.y === y);
            const collectible = currentMap.collectibles?.find(c => c.pos.x === x && c.pos.y === y);

            if (isPlayer) {
              content = player?.icon || '👤';
            } else if (enemy) {
              content = ENEMIES[enemy.enemyId]?.icon || '👾';
            } else if (npc) {
              content = npc.isShop ? '🏪' : '🧍';
            } else if (door) {
              content = '🚪';
            } else if (collectible) {
              content = collectible.type === 'LORE' ? '📜' : '💾';
            }

            return (
              <div 
                key={`${x}-${y}`} 
                className={`w-6 h-6 flex items-center justify-center text-sm ${bgColor}`}
              >
                {content}
              </div>
            );
          })
        )}
      </div>
      
      {/* Player Stats HUD */}
      <div className="mt-8 flex flex-col gap-2 font-retro border-2 border-gray-800 p-4 bg-gray-900/80 backdrop-blur-sm w-full max-w-2xl relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-3xl">
              {player?.icon}
            </div>
            <div className="flex flex-col">
              <span className={`text-xl ${player?.color} tracking-tight`}>{player?.name}</span>
              <span className="text-[10px] text-gray-500 uppercase">LVL {player?.level}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-purple-400 text-lg">SHARDS: {player?.soulShards}</div>
            <div className="text-[10px] text-gray-500 uppercase">EXP: {player?.exp}/{player?.nextLevelExp}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-red-400"><span>HP</span><span>{player?.hp}/{player?.maxHp}</span></div>
            <div className="w-full h-2 bg-gray-800 border border-gray-700">
              <div className="h-full bg-red-600 transition-all" style={{ width: `${((player?.hp || 0) / (player?.maxHp || 1)) * 100}%` }} />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-blue-400"><span>ENG</span><span>{player?.energy}/{player?.maxEnergy}</span></div>
            <div className="w-full h-2 bg-gray-800 border border-gray-700">
              <div className="h-full bg-blue-600 transition-all" style={{ width: `${((player?.energy || 0) / (player?.maxEnergy || 1)) * 100}%` }} />
            </div>
          </div>
        </div>

        <div className="w-full h-1 bg-gray-800 mt-2">
          <div 
            className="h-full bg-yellow-500 transition-all" 
            style={{ width: `${((player?.exp || 0) / (player?.nextLevelExp || 1)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
