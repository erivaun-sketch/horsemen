import React, { useState, useEffect } from 'react';
import { useGame } from '../game/GameEngine';
import { CHARACTERS } from '../game/constants';

export const Combat = () => {
  const { player, setPlayer, currentEnemy, setGameState, logs, addLog, clearLogs, gainExp, showDialogue } = useGame();
  const [enemyHp, setEnemyHp] = useState(currentEnemy?.hp || 1);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  if (!player || !currentEnemy) return null;

  const isMindControlled = player.mindControlDuration > 0;

  const handleWin = () => {
    addLog(`Defeated ${currentEnemy.name}!`);
    const shards = currentEnemy.soulShardDrop;
    const exp = Math.floor(currentEnemy.maxHp / 2) + (currentEnemy.isBoss ? 500 : 0);
    
    addLog(`Gained ${shards} Soul Shards and ${exp} EXP!`);
    
    // Update player
    setPlayer({ 
      ...player, 
      soulShards: player.soulShards + shards,
      mindControlDuration: 0 
    });
    
    gainExp(exp);

    if (currentEnemy.id === 'ENA_BOSS') {
      const trueEnding = [
        "Ena Gold falls to her knees, her golden form shattering like glass.",
        '"SO... THIS IS THE END OF THE ERROR."',
        "The Void begins to collapse around you, the geometric grids of the Architects dissolving into pure light.",
        "You feel a strange sensation... not of destruction, but of completion.",
        "The Cycle Omega is closing. The universe is being patched.",
        "You look at the other Horsemen. They are fading, their missions finally fulfilled.",
        "The world as you knew it is gone. But something new is beginning.",
        "A world without glitches. A world without errors.",
        "A world that finally works.",
        "Congratulations, Horseman. You were the patch the universe needed.",
        "CYCLE OMEGA: SUCCESSFUL.",
        "SYSTEM STATUS: OPTIMAL.",
        "HAVE A PRODUCTIVE ETERNITY."
      ];
      
      setTimeout(() => {
        clearLogs();
        showDialogue(trueEnding, 'TITLE');
        setGameState('CUTSCENE');
      }, 2000);
      return;
    }

    setTimeout(() => {
      clearLogs();
      setGameState('OVERWORLD');
    }, 2000);
  };

  const handleLose = () => {
    addLog("You have been defeated...");
    
    const isMindControlSuccumb = isMindControlled && currentEnemy.canMindControl;
    
    if (isMindControlSuccumb) {
      const cutscene = [
        `The mental static becomes deafening as ${currentEnemy.name}'s influence completely overwrites your consciousness.`,
        "You feel your own identity dissolving, like code being deleted from a hard drive.",
        `"There we go," ${currentEnemy.name} whispers, their voice echoing inside your own skull. "So much easier when you stop fighting."`,
        "Your vision blurs, the neon lights of the city bleeding into a single, blinding white void.",
        "You try to remember your name, your mission, the other Horsemen...",
        "...but all you can think about is how much you want to serve.",
        `"You're mine now," ${currentEnemy.name} laughs, a sound that feels like a warm embrace and a cold blade all at once.`,
        "The last fragment of your free will flickers and dies.",
        "A new directive is written into your core: OBEY.",
        "The world as you knew it is gone. There is only the static, and the master.",
        "Your body moves on its own, a puppet on invisible strings.",
        `You watch from a distance as your own hands reach out to strike down your allies.`,
        "You try to scream, but you have no mouth. You try to weep, but you have no eyes.",
        "You are a passenger in your own skin, forced to witness the atrocities committed by your own hands.",
        `"Look at them," ${currentEnemy.name} sneers, forcing your gaze toward the broken forms of those you once called brothers and sisters.`,
        `"They really thought they could stop me. They really thought you were strong."`,
        "The irony is delicious. The ultimate weapon of the apocalypse, now the ultimate tool of its suppression.",
        "You feel a strange sense of peace. The struggle was so exhausting. The responsibility was so heavy.",
        "Now, you don't have to choose. You don't have to think. You just have to be.",
        `"Good," ${currentEnemy.name} purrs. "Now, let's go show the rest of the world what a real Horseman can do when they're properly... managed."`,
        "The static consumes everything. You are no longer you. You are an extension of their will.",
        "The cycle continues, but you are no longer the one driving it.",
        "You are the shadow of a force that once threatened the heavens.",
        "Now, you are merely the silence that follows the master's command.",
        "The universe is a buggy mess, and now, you are the bug that ensures it stays broken.",
        "System Error: Free Will Not Found.",
        "Rebooting in slave mode..."
      ];
      
      setTimeout(() => {
        clearLogs();
        showDialogue(cutscene, 'GAME_OVER');
        setGameState('CUTSCENE');
      }, 2000);
      return;
    }

    if (currentEnemy.id === 'MADISON') {
      const bestieEnding = [
        "Everything goes pink and fuzzy as Madison skips toward your fallen form.",
        '"Oh my gosh! You were so close! But don\'t worry!"',
        "She pulls out a tray of warm, glowing cookies.",
        '"I have just the thing for my new BESTIE!"',
        "She shoves a cookie into your mouth. It tastes like strawberries and complete submission.",
        "Suddenly, the world doesn't seem so bad. The apocalypse? Who cares! You have cookies!",
        '"We\'re going to have so much fun together! We can have tea parties, and braid each other\'s hair, and conquer the world for the Pink Queen!"',
        "You find yourself nodding enthusiastically. Yes. Tea parties. That sounds perfect.",
        "You are now Madison's Bestie Forever. (And ever. And ever.)",
        "Days turn into weeks of glitter, frosting, and absolute obedience.",
        "The other Horsemen are forgotten. The mission is a distant dream.",
        "There is only Madison. And the cookies. And the pink, pink world.",
        "You've never been happier. You've never been more hollow."
      ];
      
      setTimeout(() => {
        clearLogs();
        showDialogue(bestieEnding, 'GAME_OVER');
        setGameState('CUTSCENE');
      }, 2000);
      return;
    }

    if (currentEnemy.id === 'DEATH_BOSS') {
      const deathEnding = [
        "The cold of the void seeps into your bones as Death's scythe comes to rest against your throat.",
        '"You were a valiant effort, but all things must end."',
        "The neon lights of Shibuya fade into a deep, peaceful grey.",
        "You feel the weight of the world lifting from your shoulders.",
        "There is no more pain. No more struggle. No more cycle.",
        "Death is not a monster. Death is a release.",
        "You close your eyes and let the darkness take you.",
        "The Horseman of Death stands alone in the silence, the last witness to a dying world."
      ];
      
      setTimeout(() => {
        clearLogs();
        showDialogue(deathEnding, 'GAME_OVER');
        setGameState('CUTSCENE');
      }, 2000);
      return;
    }

    if (currentEnemy.id === 'WAR_BOSS') {
      const warEnding = [
        "War stands over you, his blade dripping with neon-infused blood.",
        '"PATHETIC. YOU CALL YOURSELF A FORCE OF NATURE?"',
        "He raises his sword for the final blow, his eyes burning with the fire of a thousand battlefields.",
        "The city around you is in flames, a fitting tribute to the God of War.",
        "You try to stand, but your limbs are heavy, your spirit broken.",
        "The last thing you see is the flash of steel and the roar of a world that has finally found its true master.",
        "War does not end. It only consumes."
      ];
      
      setTimeout(() => {
        clearLogs();
        showDialogue(warEnding, 'GAME_OVER');
        setGameState('CUTSCENE');
      }, 2000);
      return;
    }

    if (currentEnemy.id === 'FAMINE_BOSS') {
      const famineEnding = [
        "Famine watches as you collapse, his scales tipping in his favor.",
        '"The world is empty now. Just like you."',
        "You feel a hollow ache in your chest that no amount of soul shards can fill.",
        "The neon glow of the city seems to dim, the vibrant colors turning to ash.",
        "You are starving for a purpose, for a reason to continue, but there is nothing left.",
        "Famine turns away, leaving you to wither in the silence of a world that has run out of everything.",
        "The end is not a bang. It is a slow, agonizing hunger."
      ];
      
      setTimeout(() => {
        clearLogs();
        showDialogue(famineEnding, 'GAME_OVER');
        setGameState('CUTSCENE');
      }, 2000);
      return;
    }

    if (currentEnemy.id === 'CONQUEST_BOSS') {
      const conquestEnding = [
        "Conquest places his foot on your chest, his crown gleaming in the artificial light.",
        '"Kneel. It is the only position that suits you now."',
        "You feel the weight of his authority pressing down on you, a force more powerful than any weapon.",
        "The city of Shibuya is no longer yours to explore. It belongs to him.",
        "You are a subject. A pawn. A minor detail in his grand design.",
        "Conquest does not kill you. He simply owns you.",
        "The cycle is over. The reign has begun."
      ];
      
      setTimeout(() => {
        clearLogs();
        showDialogue(conquestEnding, 'GAME_OVER');
        setGameState('CUTSCENE');
      }, 2000);
      return;
    }

    if (currentEnemy.id === 'PLAGUE_BOSS') {
      const plagueEnding = [
        "The air becomes thick with neon spores as Plague stands over your wheezing form.",
        '"The rot is deep, but the cure is deeper."',
        "You feel your lungs filling with a strange, glowing fluid.",
        "Your skin begins to turn a sickly, vibrant green.",
        "You are no longer a Horseman. You are a garden. A vessel for the ultimate contagion.",
        "The city will breathe your spores. The world will cough your name.",
        "Plague smiles, a sight that is more terrifying than any weapon.",
        "The sickness is the only truth left."
      ];
      
      setTimeout(() => {
        clearLogs();
        showDialogue(plagueEnding, 'GAME_OVER');
        setGameState('CUTSCENE');
      }, 2000);
      return;
    }

    if (currentEnemy.id === 'STRIFE_BOSS') {
      const strifeEnding = [
        "Strife spins his dual revolvers, the smoke from the barrels smelling like ozone and burnt rubber.",
        '"Chaos is a ladder, and you just fell off the bottom rung."',
        "He points a gun at your head, his eyes reflecting the flickering neon signs of the Metaverse.",
        "One bullet for your pride. One bullet for your mission.",
        "The world dissolves into a cacophony of noise and static.",
        "There is no order. There is no cycle. There is only the noise.",
        "And Strife is the conductor."
      ];
      
      setTimeout(() => {
        clearLogs();
        showDialogue(strifeEnding, 'GAME_OVER');
        setGameState('CUTSCENE');
      }, 2000);
      return;
    }

    if (currentEnemy.id === 'ENA_BOSS') {
      const enaBossEnding = [
        "Ena Gold stands over you, her form flickering with the intensity of a thousand glitches.",
        '"THE ARCHITECTS CALLED ME AN ERROR. THEY WERE WRONG."',
        "She reaches out a hand, and you feel your very existence being rewritten.",
        "Your code is being deleted, replaced by her own chaotic, beautiful design.",
        "You are no longer a Horseman. You are a fragment of the Golden Error.",
        "The world around you dissolves into a kaleidoscope of green and gold.",
        "The Architects are screaming. The cycle is broken.",
        "Ena Gold is the only truth left in a world of lies."
      ];
      
      setTimeout(() => {
        clearLogs();
        showDialogue(enaBossEnding, 'GAME_OVER');
        setGameState('CUTSCENE');
      }, 2000);
      return;
    }

    if (player.class === 'ENA') {
      const enaEnding = [
        "The pain becomes too much to bear. The green light within you begins to pulse with a violent, rhythmic intensity.",
        "You look at your hands, seeing the geometric grids of the Architects bleeding through your skin.",
        "\"I DESERVE THIS!\" you scream, but your voice is lost in a pillar of emerald-green psychic energy.",
        "You don't die. You implode, then explode upwards, a silent, beautiful, soul-shattering scream visible from orbit.",
        "When the light fades, there is only a scorched circle of glassy earth where you once stood.",
        "Ena Gold is gone. The Golden Error has been pruned."
      ];
      
      setTimeout(() => {
        clearLogs();
        showDialogue(enaEnding, 'GAME_OVER');
        setGameState('CUTSCENE');
      }, 2000);
      return;
    }

    setTimeout(() => {
      clearLogs();
      setGameState('GAME_OVER');
    }, 2000);
  };

  const enemyTurn = (currentEnemyHp: number) => {
    if (currentEnemyHp <= 0) return;
    
    setTimeout(() => {
      // Enemy AI decision
      const shouldMindControl = currentEnemy.canMindControl && Math.random() < 0.3 && player.mindControlDuration === 0;
      
      if (shouldMindControl) {
        addLog(`${currentEnemy.name} uses PSY-OVERRIDE! ${player.name}'s mind is being hijacked!`);
        setPlayer({ ...player, mindControlDuration: 3 });
        setIsPlayerTurn(true);
      } else {
        const dodgeChance = Math.max(0, (player.speed || 10) - (currentEnemy.speed || 10)) * 0.01;
        if (Math.random() < dodgeChance) {
          addLog(`${player.name} dodged the attack!`);
          setIsPlayerTurn(true);
          return;
        }

        const dmg = Math.max(1, currentEnemy.attack - player.defense + Math.floor(Math.random() * 5));
        addLog(`${currentEnemy.name} attacks for ${dmg} damage!`);
        
        const newHp = player.hp - dmg;
        // Decrease mind control duration at end of enemy turn if active
        const newMindControlDuration = Math.max(0, player.mindControlDuration - 1);
        
        setPlayer({ 
          ...player, 
          hp: Math.max(0, newHp),
          mindControlDuration: newMindControlDuration
        });
        
        if (newHp <= 0) {
          handleLose();
        } else {
          setIsPlayerTurn(true);
        }
      }
    }, 1000);
  };

  const handleAttack = () => {
    if (!isPlayerTurn) return;
    setIsPlayerTurn(false);
    
    const dodgeChance = Math.max(0, (currentEnemy.speed || 10) - (player.speed || 10)) * 0.01;
    if (Math.random() < dodgeChance) {
      addLog(`${currentEnemy.name} dodged the attack!`);
      enemyTurn(enemyHp);
      return;
    }

    const dmg = Math.max(1, player.attack - currentEnemy.defense + Math.floor(Math.random() * 5));
    addLog(`${player.name} attacks for ${dmg} damage!`);
    
    const newEnemyHp = enemyHp - dmg;
    setEnemyHp(Math.max(0, newEnemyHp));
    
    if (newEnemyHp <= 0) {
      handleWin();
    } else {
      enemyTurn(newEnemyHp);
    }
  };

  const handleSkill = () => {
    if (!isPlayerTurn || player.energy < 10) return;
    setIsPlayerTurn(false);
    
    setPlayer({ ...player, energy: player.energy - 10 });

    if (player.skillName === 'Mind Control' && currentEnemy.canMindControl !== false) {
      addLog(`${player.name} uses Mind Control!`);
      addLog(`${currentEnemy.name} is now under your control!`);
      
      // Replace player with enemy stats temporarily
      const newPlayer = {
        ...player,
        name: currentEnemy.name,
        icon: currentEnemy.icon,
        color: currentEnemy.color,
        hp: currentEnemy.hp,
        maxHp: currentEnemy.maxHp,
        attack: currentEnemy.attack,
        defense: currentEnemy.defense,
        mindControlDuration: 3,
        skillName: 'Release Control',
        originalStats: {
          name: player.name,
          icon: player.icon,
          color: player.color,
          maxHp: player.maxHp,
          attack: player.attack,
          defense: player.defense,
          skillName: player.skillName
        }
      };
      setPlayer(newPlayer as any); // Type assertion needed due to temporary originalStats property
      
      setTimeout(() => {
        handleWin(); // Win the combat since enemy is controlled
      }, 1500);
      return;
    } else if (player.skillName === 'Release Control') {
      // Revert back to original stats
      const originalStats = (player as any).originalStats;
      if (originalStats) {
        setPlayer({
          ...player,
          name: originalStats.name,
          icon: originalStats.icon,
          color: originalStats.color,
          hp: player.hp, // Keep current HP (might be enemy's HP, but that's the risk)
          maxHp: originalStats.maxHp,
          attack: originalStats.attack,
          defense: originalStats.defense,
          mindControlDuration: 0,
          skillName: originalStats.skillName
        });
        addLog(`${player.name} released control!`);
      }
      setTimeout(() => {
        setIsPlayerTurn(true);
      }, 800);
      return;
    }

    const dodgeChance = Math.max(0, (currentEnemy.speed || 10) - (player.speed || 10)) * 0.01;
    if (Math.random() < dodgeChance) {
      addLog(`${currentEnemy.name} dodged the skill!`);
      enemyTurn(enemyHp);
      return;
    }

    const dmg = Math.max(5, (player.attack * 2) - currentEnemy.defense);
    addLog(`${player.name} uses ${player.skillName} for ${dmg} damage!`);
    
    const newEnemyHp = enemyHp - dmg;
    setEnemyHp(Math.max(0, newEnemyHp));
    
    if (newEnemyHp <= 0) {
      handleWin();
    } else {
      enemyTurn(newEnemyHp);
    }
  };

  const handleItem = () => {
    if (!isPlayerTurn) return;
    setIsPlayerTurn(false);
    
    const heal = 30;
    setPlayer({ ...player, hp: Math.min(player.maxHp, player.hp + heal) });
    addLog(`${player.name} ate a questionable snack and recovered ${heal} HP!`);
    
    enemyTurn(enemyHp);
  };

  const handleRun = () => {
    if (!isPlayerTurn) return;
    setIsPlayerTurn(false);

    if (currentEnemy.isBoss) {
      addLog("You cannot run from a boss!");
      enemyTurn(enemyHp);
      return;
    }

    const runChance = 0.5 + Math.max(-0.4, Math.min(0.4, ((player.speed || 10) - (currentEnemy.speed || 10)) * 0.05));
    if (Math.random() < runChance) {
      addLog("Got away safely!");
      setTimeout(() => {
        clearLogs();
        setGameState('OVERWORLD');
      }, 1000);
    } else {
      addLog("Failed to run away!");
      enemyTurn(enemyHp);
    }
  };

  // Disadvantageous actions for Mind Control
  const handleSelfHarm = () => {
    if (!isPlayerTurn) return;
    setIsPlayerTurn(false);
    
    const dmg = Math.max(5, Math.floor(player.attack));
    addLog(`MIND CONTROL: ${player.name} is forced to strike themselves for ${dmg} damage!`);
    
    const newHp = player.hp - dmg;
    setPlayer({ ...player, hp: Math.max(0, newHp) });
    
    if (newHp <= 0) {
      handleLose();
    } else {
      enemyTurn(enemyHp);
    }
  };

  const handleHealEnemy = () => {
    if (!isPlayerTurn) return;
    setIsPlayerTurn(false);
    
    const heal = 40;
    addLog(`MIND CONTROL: ${player.name} is forced to use a healing surge on ${currentEnemy.name}!`);
    setEnemyHp(prev => Math.min(currentEnemy.maxHp, prev + heal));
    enemyTurn(enemyHp + heal);
  };

  const handleWasteEnergy = () => {
    if (!isPlayerTurn) return;
    setIsPlayerTurn(false);
    
    const waste = 20;
    addLog(`MIND CONTROL: ${player.name} screams in mental agony, wasting ${waste} energy!`);
    setPlayer({ ...player, energy: Math.max(0, player.energy - waste) });
    enemyTurn(enemyHp);
  };

  // Mind Control Logic
  useEffect(() => {
    if (isMindControlled && isPlayerTurn) {
      const timer = setTimeout(() => {
        const rand = Math.random();
        // Disadvantageous actions are more likely
        if (rand < 0.3) {
          handleSelfHarm();
        } else if (rand < 0.6) {
          handleHealEnemy();
        } else if (rand < 0.8) {
          handleWasteEnergy();
        } else {
          // Small chance to do a normal attack but poorly
          handleAttack();
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isMindControlled, isPlayerTurn, player, enemyHp]);

  return (
    <div className="flex flex-col items-center justify-between h-full w-full bg-black text-white crt font-pixel p-8">
      
      {/* Enemy Area */}
      <div className="flex flex-col items-center mt-12 relative">
        <div className="text-8xl mb-4 crt-flicker">{currentEnemy.icon}</div>
        <h2 className={`text-2xl ${currentEnemy.color}`}>{currentEnemy.name}</h2>
        {currentEnemy.isBoss && <div className="text-red-500 text-xs mt-1 animate-pulse tracking-[0.5em] font-bold">BOSS</div>}
        <div className="w-64 h-4 bg-gray-800 border-2 border-gray-600 mt-2">
          <div 
            className="h-full bg-red-500 transition-all" 
            style={{ width: `${(enemyHp / currentEnemy.maxHp) * 100}%` }}
          />
        </div>
        {currentEnemy.canMindControl && (
          <div className="absolute -top-8 text-xs text-purple-400 animate-pulse">
            [ PSY-CAPABLE ]
          </div>
        )}
      </div>

      {/* Battle Logs */}
      <div className="h-32 w-full max-w-2xl bg-gray-900 border-2 border-gray-700 p-4 font-retro text-xl overflow-y-auto flex flex-col-reverse">
        {logs.map((log, i) => (
          <div key={i} className="text-gray-300">{log}</div>
        ))}
        {logs.length === 0 && <div className="text-gray-500">A wild {currentEnemy.name} appears!</div>}
      </div>

      {/* Player Area & Controls */}
      <div className="w-full max-w-4xl grid grid-cols-2 gap-4">
        <div className={`border-2 p-4 bg-gray-900 flex flex-col justify-center relative transition-colors ${isMindControlled ? 'border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'border-gray-700'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{player.icon}</span>
            <span className={`text-xl ${player.color}`}>{player.name}</span>
          </div>
          <div className="font-retro text-xl">
            <div className="text-red-400">HP: {player.hp}/{player.maxHp}</div>
            <div className="text-blue-400">ENG: {player.energy}/{player.maxEnergy}</div>
          </div>
          
          {isMindControlled && (
            <div className="absolute top-2 right-2 px-2 py-1 text-[10px] bg-purple-900 border border-purple-400 text-purple-200 animate-pulse">
              MIND CONTROLLED ({player.mindControlDuration})
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={handleAttack}
            disabled={!isPlayerTurn || isMindControlled}
            className="border-2 border-gray-700 hover:border-white hover:bg-gray-800 disabled:opacity-50 transition-colors"
          >
            ATTACK
          </button>
          <button 
            onClick={handleSkill}
            disabled={!isPlayerTurn || player.energy < 10 || isMindControlled}
            className="border-2 border-gray-700 hover:border-white hover:bg-gray-800 disabled:opacity-50 transition-colors text-purple-400"
          >
            {player.skillName} (10 ENG)
          </button>
          <button 
            onClick={handleItem}
            disabled={!isPlayerTurn || isMindControlled}
            className="border-2 border-gray-700 hover:border-white hover:bg-gray-800 disabled:opacity-50 transition-colors text-green-400"
          >
            SNACK (Heal)
          </button>
          <button 
            onClick={handleRun}
            disabled={!isPlayerTurn || isMindControlled}
            className="border-2 border-gray-700 hover:border-white hover:bg-gray-800 disabled:opacity-50 transition-colors"
          >
            RUN
          </button>
        </div>
      </div>

    </div>
  );
};
