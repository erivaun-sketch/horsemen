import React from 'react';
import { useGame } from '../game/GameEngine';
import { MAPS } from '../game/constants';

export const MapUI = () => {
  const { player, currentMap, setGameState, setCurrentMap, setPlayerPos, addLog } = useGame();

  const handleFastTravel = (mapId: string) => {
    if (mapId === currentMap.id) return;
    
    if (player && player.energy >= 10) {
      const nextMap = MAPS[mapId];
      if (nextMap) {
        setCurrentMap(nextMap);
        setPlayerPos(nextMap.startPos);
        addLog(`Fast traveled to ${nextMap.name}. (-10 Energy)`);
        setGameState('OVERWORLD');
      }
    } else {
      addLog("Not enough energy to fast travel.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-black text-white crt font-pixel relative">
      <h2 className="text-4xl text-blue-400 mb-8 font-retro">WORLD MAP</h2>
      
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        {Object.values(MAPS).map((map) => {
          const isVisited = player?.visitedMaps.includes(map.id);
          const isCurrent = currentMap.id === map.id;
          
          if (!isVisited) return null;

          return (
            <div 
              key={map.id}
              className={`border-2 p-4 cursor-pointer transition-colors ${isCurrent ? 'border-blue-500 bg-blue-900/30' : 'border-gray-600 hover:border-white'}`}
              onClick={() => handleFastTravel(map.id)}
            >
              <h3 className="text-xl mb-2">{map.name}</h3>
              {isCurrent ? (
                <p className="text-sm text-blue-400">Current Location</p>
              ) : (
                <p className="text-sm text-gray-400">Click to fast travel (10 Energy)</p>
              )}
            </div>
          );
        })}
      </div>

      <button 
        onClick={() => setGameState('OVERWORLD')}
        className="mt-8 px-6 py-2 border-2 border-white hover:bg-white hover:text-black font-retro"
      >
        BACK TO OVERWORLD
      </button>
    </div>
  );
};
