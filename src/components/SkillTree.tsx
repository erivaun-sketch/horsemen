import React, { useState } from 'react';
import { useGame } from '../game/GameEngine';
import { SKILLS } from '../game/constants';
import { motion } from 'motion/react';

export const SkillTree = () => {
  const { player, setPlayer, setGameState, unlockSkill, addLog } = useGame();
  const [showRespecConfirm, setShowRespecConfirm] = useState(false);

  if (!player) return null;

  const availableSkills = Object.values(SKILLS).filter(
    skill => skill.characterClass === player.class || skill.characterClass === 'ALL'
  );

  const canUnlock = (skillId: string) => {
    if (player.unlockedSkills.includes(skillId)) return false;
    const skill = SKILLS[skillId];
    if (player.soulShards < skill.cost) return false;
    if (skill.requires) {
      for (const req of skill.requires) {
        if (!player.unlockedSkills.includes(req)) return false;
      }
    }
    return true;
  };

  const isUnlocked = (skillId: string) => player.unlockedSkills.includes(skillId);

  const handleRespec = () => {
    if (player.soulShards >= 500) {
      // Revert stats
      let updatedPlayer = { ...player };
      player.unlockedSkills.forEach(skillId => {
        const skill = SKILLS[skillId];
        if (skill && skill.effect) {
          if (skill.effect.maxHp) updatedPlayer.maxHp -= skill.effect.maxHp;
          if (skill.effect.maxEnergy) updatedPlayer.maxEnergy -= skill.effect.maxEnergy;
          if (skill.effect.attack) updatedPlayer.attack -= skill.effect.attack;
          if (skill.effect.defense) updatedPlayer.defense -= skill.effect.defense;
          if (skill.effect.speed) updatedPlayer.speed -= skill.effect.speed;
        }
      });
      
      // Ensure HP and Energy don't exceed new max
      updatedPlayer.hp = Math.min(updatedPlayer.hp, updatedPlayer.maxHp);
      updatedPlayer.energy = Math.min(updatedPlayer.energy, updatedPlayer.maxEnergy);
      
      updatedPlayer.soulShards -= 500;
      updatedPlayer.unlockedSkills = [];
      setPlayer(updatedPlayer);
      addLog("Respec successful! Skills reset.");
      setShowRespecConfirm(false);
    } else {
      addLog("Not enough Soul Shards to respec (500 required).");
      setShowRespecConfirm(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 p-8"
    >
      <div className="w-full max-w-4xl h-full max-h-[800px] bg-zinc-900 border border-zinc-700 rounded-2xl flex flex-col overflow-hidden shadow-2xl relative">
        
        {showRespecConfirm && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-zinc-900 border-2 border-red-500 p-8 max-w-md text-center rounded-xl shadow-2xl">
              <h3 className="text-2xl text-red-500 mb-4 font-bold">Confirm Respec?</h3>
              <p className="mb-6 text-zinc-300">This will reset all your unlocked skills and cost 500 Soul Shards. You will NOT be refunded the shards spent on skills.</p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={handleRespec}
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-colors"
                >
                  CONFIRM
                </button>
                <button 
                  onClick={() => setShowRespecConfirm(false)}
                  className="px-6 py-2 border border-zinc-500 text-zinc-300 hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Skill Tree</h2>
            <p className="text-zinc-400 mt-1">Enhance {player.name}'s abilities</p>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setShowRespecConfirm(true)}
              className="px-4 py-2 border border-red-500/50 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-sm font-bold tracking-wider"
            >
              RESPEC (500💎)
            </button>
            <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700">
              <span className="text-xl">💎</span>
              <span className="text-xl font-bold text-cyan-400">{player.soulShards}</span>
              <span className="text-zinc-400 text-sm uppercase tracking-wider ml-1">Shards</span>
            </div>
            <button 
              onClick={() => setGameState('OVERWORLD')}
              className="text-zinc-400 hover:text-white transition-colors p-2"
            >
              ✕ ESC
            </button>
          </div>
        </div>

        {/* Skill Tree Canvas */}
        <div className="flex-1 relative overflow-hidden bg-zinc-950 p-8">
          {/* Grid Background */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>

          <div className="relative w-full h-full">
            {/* Draw all lines first so they are under the nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {availableSkills.map(skill => {
                if (!skill.requires) return null;
                return skill.requires.map(reqId => {
                  const reqSkill = SKILLS[reqId];
                  if (!reqSkill) return null;
                  
                  const isReqUnlocked = isUnlocked(reqId);
                  
                  return (
                    <line 
                      key={`${reqId}-${skill.id}`}
                      x1={`${reqSkill.position.x}%`} 
                      y1={`${reqSkill.position.y}%`} 
                      x2={`${skill.position.x}%`} 
                      y2={`${skill.position.y}%`} 
                      stroke={isReqUnlocked ? '#06b6d4' : '#3f3f46'} 
                      strokeWidth="3"
                      strokeDasharray={isReqUnlocked ? 'none' : '5,5'}
                    />
                  );
                });
              })}
            </svg>

            {/* Draw nodes */}
            {availableSkills.map(skill => {
              const unlocked = isUnlocked(skill.id);
              const available = canUnlock(skill.id);

              return (
                <div 
                  key={skill.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group"
                  style={{ left: `${skill.position.x}%`, top: `${skill.position.y}%` }}
                >
                  <button
                    onClick={() => available && unlockSkill(skill.id)}
                    disabled={!available && !unlocked}
                    className={`
                      w-16 h-16 rounded-2xl border-2 flex items-center justify-center text-3xl transition-all duration-200
                      ${unlocked 
                        ? 'bg-cyan-900/50 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]' 
                        : available 
                          ? 'bg-zinc-800 border-zinc-400 hover:border-cyan-400 hover:bg-zinc-700 cursor-pointer' 
                          : 'bg-zinc-900 border-zinc-800 opacity-50 cursor-not-allowed'}
                    `}
                  >
                    {skill.icon}
                  </button>
                  
                  {/* Tooltip */}
                  <div className="absolute top-full mt-4 w-64 bg-zinc-800 border border-zinc-700 rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-50">
                    <h3 className={`font-bold text-lg ${unlocked ? 'text-cyan-400' : 'text-white'}`}>
                      {skill.name}
                    </h3>
                    <p className="text-zinc-400 text-sm mt-1 mb-3">{skill.description}</p>
                    
                    <div className="flex justify-between items-center text-sm font-mono">
                      <span className={unlocked ? 'text-cyan-400' : player.soulShards >= skill.cost ? 'text-white' : 'text-red-400'}>
                        {unlocked ? 'UNLOCKED' : `Cost: ${skill.cost}💎`}
                      </span>
                    </div>
                    
                    {!unlocked && skill.requires && skill.requires.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-zinc-700">
                        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Requires</p>
                        {skill.requires.map(req => (
                          <div key={req} className={`text-xs ${isUnlocked(req) ? 'text-cyan-400' : 'text-red-400'}`}>
                            • {SKILLS[req]?.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
