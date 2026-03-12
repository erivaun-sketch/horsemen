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
  const [shopItems, setShopItems] = useState<string[]>(['HEALTH_POTION', 'ENERGY_DRINK', 'SHARP_DATA', 'SHIELD_PATCH', 'FRIENDSHIP_COOKIE', 'BLACK_JAWBREAKER', 'SECRET_SAUCE', 'VOID_CORE', 'OMEGA_PATCH', 'GOD_SLAYER_SWORD', 'AEGIS_SHIELD', 'ERI_CYAN_SWORD', 'HELLBOUND_HELMET', 'RESIDUAL_CORRUPTION_VIAL', 'ANTI_PARTICLE_GRENADE']);

  const addLog = (msg: string) => setLogs(prev => [msg, ...prev].slice(0, 50));
  const clearLogs = () => setLogs([]);

  const gainExp = (amount: number) => {
    if (!player) return;
    let newExp = player.exp + amount;
    let newLevel = player.level;
    let newNextLevelExp = player.nextLevelExp;
    let newMaxHp = player.maxHp;
    let newMaxEnergy = player.maxEnergy;
    let newAttack = player.attack;
    let newDefense = player.defense;

    while (newExp >= newNextLevelExp) {
      newExp -= newNextLevelExp;
      newLevel++;
      newNextLevelExp = Math.floor(newNextLevelExp * 1.5);
      newMaxHp += 20;
      newMaxEnergy += 10;
      newAttack += 5;
      newDefense += 3;
      addLog(`LEVEL UP! Reached level ${newLevel}! Stats increased!`);
    }

    setPlayer({
      ...player,
      level: newLevel,
      exp: newExp,
      nextLevelExp: newNextLevelExp,
      maxHp: newMaxHp,
      maxEnergy: newMaxEnergy,
      hp: newMaxHp, // Heal on level up
      energy: newMaxEnergy,
      attack: newAttack,
      defense: newDefense,
    });
  };

  const buyItem = (itemId: string) => {
    if (!player) return;
    const item = ITEMS[itemId];
    if (player.soulShards >= item.price) {
      setPlayer({
        ...player,
        soulShards: player.soulShards - item.price,
        inventory: [...player.inventory, itemId]
      });
      addLog(`Bought ${item.name}!`);
    } else {
      addLog(`Not enough Soul Shards for ${item.name}!`);
    }
  };

  const useItem = (itemId: string, index: number) => {
    if (!player) return;
    const item = ITEMS[itemId];
    if (item.type === 'CONSUMABLE') {
      const newInventory = [...player.inventory];
      newInventory.splice(index, 1);
      
      let newHp = player.hp;
      let newEnergy = player.energy;
      
      if (item.effect?.hp) newHp = Math.min(player.maxHp, player.hp + item.effect.hp);
      if (item.effect?.energy) newEnergy = Math.min(player.maxEnergy, player.energy + item.effect.energy);
      
      setPlayer({
        ...player,
        hp: newHp,
        energy: newEnergy,
        inventory: newInventory
      });
      addLog(`Used ${item.name}!`);
    } else if (item.type === 'EQUIPMENT') {
      const newInventory = [...player.inventory];
      newInventory.splice(index, 1);
      
      setPlayer({
        ...player,
        attack: player.attack + (item.effect?.attack || 0),
        defense: player.defense + (item.effect?.defense || 0),
        maxHp: player.maxHp + (item.effect?.hp || 0),
        hp: player.hp + (item.effect?.hp || 0),
        maxEnergy: player.maxEnergy + (item.effect?.energy || 0),
        energy: player.energy + (item.effect?.energy || 0),
        inventory: newInventory
      });
      addLog(`Equipped ${item.name}! Stats permanently increased!`);
    }
  };

  const unlockSkill = (skillId: string) => {
    if (!player) return;
    const skill = SKILLS[skillId];
    if (!skill) return;

    if (player.soulShards >= skill.cost && !player.unlockedSkills.includes(skillId)) {
      setPlayer({
        ...player,
        soulShards: player.soulShards - skill.cost,
        unlockedSkills: [...player.unlockedSkills, skillId],
        maxHp: player.maxHp + (skill.effect.maxHp || 0),
        hp: player.hp + (skill.effect.maxHp || 0),
        maxEnergy: player.maxEnergy + (skill.effect.maxEnergy || 0),
        energy: player.energy + (skill.effect.maxEnergy || 0),
        attack: player.attack + (skill.effect.attack || 0),
        defense: player.defense + (skill.effect.defense || 0),
        speed: player.speed + (skill.effect.speed || 0),
      });
      addLog(`Unlocked skill: ${skill.name}!`);
    } else {
      addLog(`Cannot unlock ${skill.name}.`);
    }
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
      const levelScale = 1 + (player.level - 1) * 0.2;
      const scaledEnemy = {
        ...enemy,
        hp: Math.floor(enemy.hp * levelScale),
        maxHp: Math.floor(enemy.maxHp * levelScale),
        attack: Math.floor(enemy.attack * levelScale),
        defense: Math.floor(enemy.defense * levelScale),
        speed: Math.floor((enemy.speed || 10) * levelScale),
        soulShardDrop: Math.floor(enemy.soulShardDrop * levelScale)
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
          const newPlayer = { ...player };
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
          setPlayer(newPlayer);
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
        if (e.key === 'Escape' || e.key === 'i' || e.key === 'k') setGameState('OVERWORLD');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, playerPos, currentMap, player]);

  return (
    <GameContext.Provider value={{
      gameState, setGameState,
      player, setPlayer,
      currentMap, playerPos, movePlayer,
      currentEnemy, startCombat,
      dialogue, showDialogue, clearDialogue,
      logs, addLog, clearLogs,
      gainExp,
      shopItems, buyItem, useItem, unlockSkill
    }}>
      {children}
    </GameContext.Provider>
  );
};
