import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { GameState, PlayerStats, EnemyStats, MapData, Position } from './types';
import { CHARACTERS, MAPS, ENEMIES, ITEMS, SKILLS } from './constants';

interface GameContextType {
  gameState: GameState;
  setGameState: (state: GameState) => void;
  player: PlayerStats | null;
  setPlayer: (player: PlayerStats) => void;
  currentMap: MapData;
  playerPos: Position;
  movePlayer: (dx: number, dy: number) => void;
  currentEnemy: EnemyStats | null;
  startCombat: (enemyId: string) => void;
  dialogue: string[];
  showDialogue: (lines: string[], nextState?: GameState | null) => void;
  clearDialogue: () => void;
  logs: string[];
  addLog: (msg: string) => void;
  clearLogs: () => void;
  gainExp: (amount: number) => void;
  shopItems: string[];
  buyItem: (itemId: string) => void;
  useItem: (itemId: string, index: number) => void;
  unlockSkill: (skillId: string) => void;
  gacha: () => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | null>(null);

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>('TITLE');
  const [player, setPlayer] = useState<PlayerStats | null>(null);
  const [currentMap, setCurrentMap] = useState<MapData>(MAPS.SHIBUYA);
  const [playerPos, setPlayerPos] = useState<Position>(MAPS.SHIBUYA.startPos);
  const [currentEnemy, setCurrentEnemy] = useState<EnemyStats | null>(null);
  const [dialogue, setDialogue] = useState<string[]>([]);
  const [nextStateAfterDialogue, setNextStateAfterDialogue] = useState<GameState | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [shopItems, setShopItems] = useState<string[]>(['HEALTH_POTION', 'ENERGY_DRINK', 'SHARP_DATA', 'SHIELD_PATCH', 'FRIENDSHIP_COOKIE', 'BLACK_JAWBREAKER', 'SECRET_SAUCE', 'VOID_CORE', 'NEON_BLADE', 'CYBER_SHIELD', 'ULTIMATE_DRINK', 'OMEGA_PATCH', 'GOD_SLAYER_SWORD', 'AEGIS_SHIELD', 'ERI_CYAN_SWORD', 'HELLBOUND_HELMET', 'RESIDUAL_CORRUPTION_VIAL', 'ANTI_PARTICLE_GRENADE', 'SPEED_CHIP', 'LUCK_CHARM', 'REGEN_PATCH', 'SOUL_MAGNET', 'MASTER_KEY']);

  const addLog = (msg: string) => setLogs(prev => [msg, ...prev].slice(0, 50));
  const clearLogs = () => setLogs([]);

  const gainExp = (amount: number) => {
    setPlayer(prev => {
      if (!prev) return null;
      let newExp = prev.exp + amount;
      let newLevel = prev.level;
      let newNextLevelExp = prev.nextLevelExp;
      let newMaxHp = prev.maxHp;
      let newMaxEnergy = prev.maxEnergy;
      let newAttack = prev.attack;
      let newDefense = prev.defense;
      let newCorruption = prev.corruption;

      while (newExp >= newNextLevelExp) {
        newExp -= newNextLevelExp;
        newLevel++;
        newNextLevelExp = Math.floor(newNextLevelExp * 1.5);
        newMaxHp += 20;
        newMaxEnergy += 10;
        newAttack += 5;
        newDefense += 3;
        newCorruption += 5; // Leveling up increases corruption
        addLog(`LEVEL UP! Reached level ${newLevel}! Stats increased! Corruption rising...`);
      }

      return {
        ...prev,
        level: newLevel,
        exp: newExp,
        nextLevelExp: newNextLevelExp,
        maxHp: newMaxHp,
        maxEnergy: newMaxEnergy,
        hp: newMaxHp, // Heal on level up
        energy: newMaxEnergy,
        attack: newAttack,
        defense: newDefense,
        corruption: Math.min(100, newCorruption),
      };
    });
  };

  const buyItem = (itemId: string) => {
    const item = ITEMS[itemId];
    setPlayer(prev => {
      if (!prev) return null;
      if (prev.soulShards >= item.price) {
        addLog(`Bought ${item.name}!`);
        return {
          ...prev,
          soulShards: prev.soulShards - item.price,
          inventory: [...prev.inventory, itemId]
        };
      } else {
        addLog(`Not enough Soul Shards for ${item.name}!`);
        return prev;
      }
    });
  };

  const useItem = (itemId: string, index: number) => {
    const item = ITEMS[itemId];
    setPlayer(prev => {
      if (!prev) return null;
      
      if (item.type === 'CONSUMABLE') {
        const newInventory = [...prev.inventory];
        newInventory.splice(index, 1);
        let newHp = Math.min(prev.maxHp, prev.hp + (item.effect?.hp || 0));
        let newEnergy = Math.min(prev.maxEnergy, prev.energy + (item.effect?.energy || 0));
        
        addLog(`Used ${item.name}!`);
        return {
          ...prev,
          hp: newHp,
          energy: newEnergy,
          inventory: newInventory
        };
      } else if (item.type === 'EQUIPMENT') {
        const isEquipped = prev.equipment.includes(itemId);
        let newEquipment = [...prev.equipment];
        let newAttack = prev.attack;
        let newDefense = prev.defense;

        if (isEquipped) {
          // Unequip
          newEquipment = newEquipment.filter(id => id !== itemId);
          newAttack -= (item.effect?.attack || 0);
          newDefense -= (item.effect?.defense || 0);
          addLog(`Unequipped ${item.name}.`);
        } else {
          // Equip
          newEquipment.push(itemId);
          newAttack += (item.effect?.attack || 0);
          newDefense += (item.effect?.defense || 0);
          addLog(`Equipped ${item.name}!`);
        }

        return {
          ...prev,
          attack: newAttack,
          defense: newDefense,
          equipment: newEquipment
        };
      }
      return prev;
    });
  };

  const unlockSkill = (skillId: string) => {
    const skill = SKILLS[skillId];
    if (!skill) return;

    setPlayer(prev => {
      if (!prev) return null;
      if (prev.soulShards >= skill.cost && !prev.unlockedSkills.includes(skillId)) {
        addLog(`Unlocked skill: ${skill.name}!`);
        return {
          ...prev,
          soulShards: prev.soulShards - skill.cost,
          unlockedSkills: [...prev.unlockedSkills, skillId],
          maxHp: prev.maxHp + (skill.effect.maxHp || 0),
          hp: prev.hp + (skill.effect.maxHp || 0),
          maxEnergy: prev.maxEnergy + (skill.effect.maxEnergy || 0),
          energy: prev.energy + (skill.effect.maxEnergy || 0),
          attack: prev.attack + (skill.effect.attack || 0),
          defense: prev.defense + (skill.effect.defense || 0),
          speed: prev.speed + (skill.effect.speed || 0),
        };
      } else {
        addLog(`Cannot unlock ${skill.name}.`);
        return prev;
      }
    });
  };

  const gacha = () => {
    setPlayer(prev => {
      if (!prev) return null;
      if (prev.soulShards < 100) {
        addLog("Not enough Soul Shards for Gachapon (100 required)!");
        return prev;
      }
      
      const itemIds = Object.keys(ITEMS);
      const randomId = itemIds[Math.floor(Math.random() * itemIds.length)];
      const item = ITEMS[randomId];
      
      addLog(`GACHAPON: You got ${item.name}!`);
      return {
        ...prev,
        soulShards: prev.soulShards - 100,
        inventory: [...prev.inventory, randomId]
      };
    });
  };

  const showDialogue = (lines: string[], nextState: GameState | null = null) => {
    setDialogue(lines);
    setNextStateAfterDialogue(nextState);
    setGameState('DIALOGUE');
  };

  const clearDialogue = () => {
    setDialogue([]);
    setGameState(nextStateAfterDialogue || 'OVERWORLD');
    setNextStateAfterDialogue(null);
  };

  const startCombat = (enemyId: string) => {
    const enemy = ENEMIES[enemyId];
    if (enemy && player) {
      // Enhanced Level Scaling Logic
      const levelScale = 1 + (player.level - 1) * 0.25;
      const scaledEnemy = {
        ...enemy,
        hp: Math.floor(enemy.hp * levelScale),
        maxHp: Math.floor(enemy.maxHp * levelScale),
        attack: Math.floor(enemy.attack * (1 + (player.level - 1) * 0.15)),
        defense: Math.floor(enemy.defense * (1 + (player.level - 1) * 0.1)),
        speed: Math.floor((enemy.speed || 10) * (1 + (player.level - 1) * 0.05)),
        soulShardDrop: Math.floor(enemy.soulShardDrop * (1 + (player.level - 1) * 0.3))
      };
      setCurrentEnemy(scaledEnemy); // clone to allow hp modification
      if (enemy.dialogueOnEncounter) {
        setDialogue(enemy.dialogueOnEncounter);
        setGameState('DIALOGUE');
        // Hacky way to transition to combat after dialogue
        setTimeout(() => setGameState('COMBAT'), 100); // Will be overridden by dialogue state, but we handle it in UI
      } else {
        setGameState('COMBAT');
      }
      addLog(`Encountered ${enemy.name}!`);
    }
  };

  const movePlayer = (dx: number, dy: number) => {
    if (gameState !== 'OVERWORLD') return;

    const newX = playerPos.x + dx;
    const newY = playerPos.y + dy;

    // Bounds check
    if (newX < 0 || newX >= currentMap.width || newY < 0 || newY >= currentMap.height) return;

    // Collision check
    const tile = currentMap.tiles[newY][newX];
    if (tile === 'WALL' || tile === 'NEON') return;

    // Check Doors
    if (currentMap.doors) {
      const door = currentMap.doors.find(d => d.pos.x === newX && d.pos.y === newY);
      if (door) {
        if (door.isLocked && !player?.inventory.includes('MASTER_KEY')) {
          addLog("This door is locked. You need the MASTER_KEY.");
          return;
        }
        const nextMap = MAPS[door.targetMap];
        if (nextMap) {
          setCurrentMap(nextMap);
          setPlayerPos(door.targetPos);
          addLog(`Entered ${nextMap.name}`);
          return;
        }
      }
    }

    // Check Collectibles
    if (currentMap.collectibles) {
      const collectibleIdx = currentMap.collectibles.findIndex(c => c.pos.x === newX && c.pos.y === newY);
      if (collectibleIdx !== -1) {
        const collectible = currentMap.collectibles[collectibleIdx];
        
        // Apply effect
        if (player) {
          setPlayer(prev => {
            if (!prev) return null;
            const newPlayer = { ...prev };
            newPlayer.collectibles = [...newPlayer.collectibles, collectible.id];
            
            if (collectible.type === 'STAT_BOOST') {
              if (collectible.name.includes('HP')) {
                newPlayer.maxHp += 10;
                newPlayer.hp += 10;
              } else if (collectible.name.includes('Attack')) {
                newPlayer.attack += 5;
              } else if (collectible.name.includes('Energy')) {
                newPlayer.maxEnergy += 20;
                newPlayer.energy += 20;
              } else if (collectible.name.includes('Ultimate')) {
                newPlayer.attack += 10;
                newPlayer.maxHp += 20;
                newPlayer.hp += 20;
              }
            }
            return newPlayer;
          });
        }

        // Remove from map
        const newCollectibles = [...currentMap.collectibles];
        newCollectibles.splice(collectibleIdx, 1);
        setCurrentMap({ ...currentMap, collectibles: newCollectibles });

        showDialogue([`Found ${collectible.name}!`, collectible.description]);
        setPlayerPos({ x: newX, y: newY });
        return;
      }
    }

    // Check NPCs
    const npc = currentMap.npcs.find(n => n.pos.x === newX && n.pos.y === newY);
    if (npc) {
      showDialogue(npc.dialogue);
      if (npc.isShop) {
        setTimeout(() => setGameState('SHOP'), 1000);
      }
      return;
    }

    // Check Enemies
    const enemyIdx = currentMap.enemies.findIndex(e => e.pos.x === newX && e.pos.y === newY);
    if (enemyIdx !== -1) {
      const enemy = currentMap.enemies[enemyIdx];
      // Remove enemy from map (they don't respawn for now)
      const newEnemies = [...currentMap.enemies];
      newEnemies.splice(enemyIdx, 1);
      setCurrentMap({ ...currentMap, enemies: newEnemies });
      
      startCombat(enemy.enemyId);
      setPlayerPos({ x: newX, y: newY });
      return;
    }

    setPlayerPos({ x: newX, y: newY });
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState === 'OVERWORLD') {
        switch (e.key) {
          case 'ArrowUp':
          case 'w':
            movePlayer(0, -1);
            break;
          case 'ArrowDown':
          case 's':
            movePlayer(0, 1);
            break;
          case 'ArrowLeft':
          case 'a':
            movePlayer(-1, 0);
            break;
          case 'ArrowRight':
          case 'd':
            movePlayer(1, 0);
            break;
          case 'i':
            setGameState('INVENTORY');
            break;
          case 'k':
            setGameState('SKILL_TREE');
            break;
          case 'l':
            setGameState('LORE_BOOK');
            break;
        }
      } else if (gameState === 'DIALOGUE' || gameState === 'GAME_OVER') {
        if (e.key === 'Enter' || e.key === ' ') {
          if (gameState === 'GAME_OVER') {
            setGameState('TITLE');
          } else {
            clearDialogue();
          }
        }
      } else if (gameState === 'INVENTORY' || gameState === 'SHOP' || gameState === 'SKILL_TREE') {
        if (e.key === 'Escape' || e.key === 'i' || e.key === 'k' || e.key === 'l') setGameState('OVERWORLD');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, playerPos, currentMap, player]);

  // Save/Load logic
  useEffect(() => {
    const savedPlayer = localStorage.getItem('soul_shards_player');
    if (savedPlayer) {
      try {
        const parsed = JSON.parse(savedPlayer);
        setPlayer(parsed);
        setGameState('OVERWORLD');
      } catch (e) {
        console.error("Failed to load save", e);
      }
    }
  }, []);

  useEffect(() => {
    if (player) {
      localStorage.setItem('soul_shards_player', JSON.stringify(player));
    }
  }, [player]);

  const resetGame = () => {
    localStorage.removeItem('soul_shards_player');
    setPlayer(null);
    setGameState('TITLE');
    setPlayerPos({ x: 5, y: 5 });
    setCurrentMap('SHIBUYA_STREET');
    setLogs(['Game Reset. Welcome back, wanderer.']);
  };

  return (
    <GameContext.Provider value={{
      gameState, setGameState,
      player, setPlayer,
      currentMap, playerPos, movePlayer,
      currentEnemy, startCombat,
      dialogue, showDialogue, clearDialogue,
      logs, addLog, clearLogs,
      gainExp,
      shopItems, buyItem, useItem, unlockSkill, gacha, resetGame
    }}>
      {children}
    </GameContext.Provider>
  );
};
