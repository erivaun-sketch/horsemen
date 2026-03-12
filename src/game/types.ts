export type GameState = 'TITLE' | 'CHARACTER_SELECT' | 'OVERWORLD' | 'COMBAT' | 'DIALOGUE' | 'GAME_OVER' | 'SHOP' | 'INVENTORY' | 'CUTSCENE' | 'SKILL_TREE' | 'LORE_BOOK';

export type CharacterClass = 'DEATH' | 'WAR' | 'FAMINE' | 'CONQUEST' | 'ENA' | 'PLAGUE' | 'STRIFE' | 'MODIFY' | 'CORRUPT' | 'ERI' | 'JIKASHU' | 'LUX' | 'VELVETTE' | 'MADISON' | 'SUGAR_RUSH' | 'JACKHAMMER' | 'HIMO' | 'ARCHITECT';

export interface Skill {
  id: string;
  name: string;
  description: string;
  cost: number;
  characterClass: CharacterClass | 'ALL';
  requires?: string[];
  effect: {
    maxHp?: number;
    maxEnergy?: number;
    attack?: number;
    defense?: number;
    speed?: number;
  };
  icon: string;
  position: { x: number; y: number }; // For rendering the tree
}

export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  type: 'CONSUMABLE' | 'EQUIPMENT' | 'KEY';
  effect?: {
    hp?: number;
    energy?: number;
    attack?: number;
    defense?: number;
  };
}

export interface PlayerStats {
  name: string;
  class: CharacterClass;
  hp: number;
  maxHp: number;
  energy: number;
  maxEnergy: number;
  attack: number;
  defense: number;
  speed: number;
  skillName: string;
  color: string;
  icon: string;
  soulShards: number;
  collectibles: string[];
  inventory: string[]; // Array of item IDs
  equipment: string[]; // Array of equipped item IDs
  unlockedSkills: string[];
  mindControlDuration: number;
  corruption?: number; // 0-100
  level: number;
  exp: number;
  nextLevelExp: number;
}

export interface EnemyStats {
  id: string;
  name: string;
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
  speed?: number;
  color: string;
  icon: string;
  dialogueOnEncounter?: string[];
  soulShardDrop: number;
  canMindControl?: boolean;
  isBoss?: boolean;
}

export interface Position {
  x: number;
  y: number;
}

export type TileType = 'WALL' | 'FLOOR' | 'DOOR' | 'NEON' | 'NPC' | 'ENEMY' | 'BOSS' | 'COLLECTIBLE' | 'SHOP';

export interface MapData {
  id: string;
  name: string;
  width: number;
  height: number;
  tiles: TileType[][];
  startPos: Position;
  enemies: { pos: Position; enemyId: string }[];
  npcs: { pos: Position; dialogue: string[]; isShop?: boolean }[];
  doors?: { pos: Position; targetMap: string; targetPos: Position; isLocked?: boolean }[];
  collectibles?: { pos: Position; id: string; name: string; description: string; type: 'LORE' | 'STAT_BOOST' }[];
}
