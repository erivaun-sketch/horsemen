import { PlayerStats, EnemyStats, MapData, TileType } from './types';

export const CHARACTERS: Record<string, PlayerStats> = {
  DEATH: {
    name: 'Death',
    class: 'DEATH',
    hp: 120,
    maxHp: 120,
    energy: 50,
    maxEnergy: 50,
    attack: 15,
    defense: 10,
    speed: 5,
    skillName: 'Reap Soul',
    color: 'text-gray-400',
    icon: '💀',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    corruption: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  WAR: {
    name: 'War',
    class: 'WAR',
    hp: 150,
    maxHp: 150,
    energy: 30,
    maxEnergy: 30,
    attack: 20,
    defense: 15,
    speed: 8,
    skillName: 'Crowbar Smash',
    color: 'text-red-500',
    icon: '⚔️',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  FAMINE: {
    name: 'Famine',
    class: 'FAMINE',
    hp: 100,
    maxHp: 100,
    energy: 100,
    maxEnergy: 100,
    attack: 12,
    defense: 8,
    speed: 12,
    skillName: 'Devour',
    color: 'text-green-500',
    icon: '🍔',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  CONQUEST: {
    name: 'Conquest',
    class: 'CONQUEST',
    hp: 90,
    maxHp: 90,
    energy: 150,
    maxEnergy: 150,
    attack: 10,
    defense: 5,
    speed: 15,
    skillName: 'Mind Control',
    color: 'text-yellow-400',
    icon: '📱',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  ENA: {
    name: 'Ena',
    class: 'ENA',
    hp: 110,
    maxHp: 110,
    energy: 80,
    maxEnergy: 80,
    attack: 18,
    defense: 12,
    speed: 10,
    skillName: 'Residual Corruption',
    color: 'text-purple-500',
    icon: '🦋',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  PLAGUE: {
    name: 'Plague',
    class: 'PLAGUE',
    hp: 120,
    maxHp: 120,
    energy: 60,
    maxEnergy: 60,
    attack: 15,
    defense: 10,
    speed: 11,
    skillName: 'Viral Spore',
    color: 'text-emerald-400',
    icon: '🧪',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  STRIFE: {
    name: 'Strife',
    class: 'STRIFE',
    hp: 100,
    maxHp: 100,
    energy: 70,
    maxEnergy: 70,
    attack: 22,
    defense: 8,
    speed: 14,
    skillName: 'Dual Trigger',
    color: 'text-orange-400',
    icon: '🔫',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  MODIFY: {
    name: 'Modify',
    class: 'MODIFY',
    hp: 160,
    maxHp: 160,
    energy: 80,
    maxEnergy: 80,
    attack: 25,
    defense: 20,
    speed: 10,
    skillName: 'Creation',
    color: 'text-blue-400',
    icon: '🛡️',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  CORRUPT: {
    name: 'Corrupt',
    class: 'CORRUPT',
    hp: 140,
    maxHp: 140,
    energy: 100,
    maxEnergy: 100,
    attack: 30,
    defense: 10,
    speed: 15,
    skillName: 'Residual Corruption',
    color: 'text-pink-500',
    icon: '🦋',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  ERI: {
    name: 'Eri Vaun',
    class: 'ERI',
    hp: 130,
    maxHp: 130,
    energy: 120,
    maxEnergy: 120,
    attack: 28,
    defense: 12,
    speed: 18,
    skillName: 'Mind Demon',
    color: 'text-cyan-400',
    icon: '🔥',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  JIKASHU: {
    name: 'Jikashu',
    class: 'JIKASHU',
    hp: 110,
    maxHp: 110,
    energy: 90,
    maxEnergy: 90,
    attack: 22,
    defense: 15,
    speed: 12,
    skillName: 'Gravity Smirk',
    color: 'text-purple-500',
    icon: '😈',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  LUX: {
    name: 'Lux',
    class: 'LUX',
    hp: 120,
    maxHp: 120,
    energy: 110,
    maxEnergy: 110,
    attack: 26,
    defense: 14,
    speed: 16,
    skillName: 'Light Beam',
    color: 'text-yellow-200',
    icon: '💡',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  VELVETRE: {
    name: 'Velvetre',
    class: 'VELVETRE',
    hp: 135,
    maxHp: 135,
    energy: 95,
    maxEnergy: 95,
    attack: 29,
    defense: 18,
    speed: 14,
    skillName: 'Velvet Strike',
    color: 'text-pink-700',
    icon: '🎀',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  MADISON: {
    name: 'Madison',
    class: 'MADISON',
    hp: 150,
    maxHp: 150,
    energy: 85,
    maxEnergy: 85,
    attack: 24,
    defense: 22,
    speed: 11,
    skillName: 'Shield Bash',
    color: 'text-green-400',
    icon: '🛡️',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  SUGAR_RUSH: {
    name: 'Sugar Rush',
    class: 'SUGAR_RUSH',
    hp: 100,
    maxHp: 100,
    energy: 120,
    maxEnergy: 120,
    attack: 35,
    defense: 5,
    speed: 25,
    skillName: 'Sugar Crash',
    color: 'text-pink-400',
    icon: '🍭',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  },
  JACKHAMMER: {
    name: 'Jackhammer',
    class: 'JACKHAMMER',
    hp: 200,
    maxHp: 200,
    energy: 60,
    maxEnergy: 60,
    attack: 15,
    defense: 30,
    speed: 5,
    skillName: 'Lucky Strike',
    color: 'text-yellow-600',
    icon: '🔨',
    soulShards: 0,
    collectibles: [],
    inventory: [],
    equipment: [],
    unlockedSkills: [],
    mindControlDuration: 0,
    level: 1,
    exp: 0,
    nextLevelExp: 100,
  }
};

export const SKILLS: Record<string, import('./types').Skill> = {
  // DEATH SKILLS
  DEATH_SCYTHE_1: { id: 'DEATH_SCYTHE_1', name: 'Sharp Scythe I', description: '+15 Attack', cost: 50, characterClass: 'DEATH', effect: { attack: 15 }, icon: '🗡️', position: { x: 50, y: 80 } },
  DEATH_SOUL_1: { id: 'DEATH_SOUL_1', name: 'Soul Harvester', description: '+20 Max Energy', cost: 100, characterClass: 'DEATH', effect: { maxEnergy: 20 }, icon: '👻', position: { x: 20, y: 50 } },
  DEATH_HP_1: { id: 'DEATH_HP_1', name: 'Undead Vigor', description: '+30 Max HP', cost: 100, characterClass: 'DEATH', effect: { maxHp: 30 }, icon: '❤️', position: { x: 80, y: 50 } },
  DEATH_PASSIVE_1: { id: 'DEATH_PASSIVE_1', name: 'Reaper\'s Toll', description: 'Passive: +10 Attack', cost: 150, characterClass: 'DEATH', effect: { attack: 10 }, icon: '💀', position: { x: 10, y: 30 } },
  DEATH_PASSIVE_2: { id: 'DEATH_PASSIVE_2', name: 'Ghostly Step', description: 'Passive: +15 Speed', cost: 150, characterClass: 'DEATH', effect: { speed: 15 }, icon: '💨', position: { x: 30, y: 30 } },
  DEATH_PASSIVE_3: { id: 'DEATH_PASSIVE_3', name: 'Soul Siphon', description: 'Passive: +20 Max Energy', cost: 150, characterClass: 'DEATH', effect: { maxEnergy: 20 }, icon: '🔮', position: { x: 70, y: 30 } },
  DEATH_PASSIVE_4: { id: 'DEATH_PASSIVE_4', name: 'Bone Armor', description: 'Passive: +15 Defense', cost: 150, characterClass: 'DEATH', effect: { defense: 15 }, icon: '🦴', position: { x: 90, y: 30 } },
  DEATH_PASSIVE_5: { id: 'DEATH_PASSIVE_5', name: 'Eternal Life', description: 'Passive: +50 Max HP', cost: 200, characterClass: 'DEATH', effect: { maxHp: 50 }, icon: '⏳', position: { x: 50, y: 10 } },
  DEATH_ULT: { id: 'DEATH_ULT', name: 'Grim Reaper', description: '+40 Attack, +50 Max Energy', cost: 500, characterClass: 'DEATH', requires: ['DEATH_SCYTHE_1', 'DEATH_SOUL_1', 'DEATH_HP_1'], effect: { attack: 40, maxEnergy: 50 }, icon: '☠️', position: { x: 50, y: 20 } },
  DEATH_MASTERY: { id: 'DEATH_MASTERY', name: 'Death Mastery', description: 'Passive: +100 Attack, +100 Defense', cost: 1000, characterClass: 'DEATH', requires: ['DEATH_ULT'], effect: { attack: 100, defense: 100 }, icon: '🌌', position: { x: 50, y: 0 } },

  // WAR SKILLS
  WAR_STR_1: { id: 'WAR_STR_1', name: 'Brute Force I', description: '+10 Attack', cost: 50, characterClass: 'WAR', effect: { attack: 10 }, icon: '💪', position: { x: 50, y: 80 } },
  WAR_STR_2: { id: 'WAR_STR_2', name: 'Brute Force II', description: '+20 Attack', cost: 150, characterClass: 'WAR', requires: ['WAR_STR_1'], effect: { attack: 20 }, icon: '🔥', position: { x: 20, y: 50 } },
  WAR_HP_1: { id: 'WAR_HP_1', name: 'Thick Skin I', description: '+50 Max HP', cost: 50, characterClass: 'WAR', effect: { maxHp: 50 }, icon: '🛡️', position: { x: 80, y: 50 } },
  WAR_PASSIVE_1: { id: 'WAR_PASSIVE_1', name: 'Bloodlust', description: 'Passive: +15 Attack', cost: 150, characterClass: 'WAR', effect: { attack: 15 }, icon: '🩸', position: { x: 10, y: 30 } },
  WAR_PASSIVE_2: { id: 'WAR_PASSIVE_2', name: 'Iron Will', description: 'Passive: +20 Defense', cost: 150, characterClass: 'WAR', effect: { defense: 20 }, icon: '⛓️', position: { x: 30, y: 30 } },
  WAR_PASSIVE_3: { id: 'WAR_PASSIVE_3', name: 'Relentless', description: 'Passive: +20 Max Energy', cost: 150, characterClass: 'WAR', effect: { maxEnergy: 20 }, icon: '🔋', position: { x: 70, y: 30 } },
  WAR_PASSIVE_4: { id: 'WAR_PASSIVE_4', name: 'Juggernaut', description: 'Passive: +40 Max HP', cost: 150, characterClass: 'WAR', effect: { maxHp: 40 }, icon: '🦍', position: { x: 90, y: 30 } },
  WAR_PASSIVE_5: { id: 'WAR_PASSIVE_5', name: 'War Cry', description: 'Passive: +25 Attack', cost: 200, characterClass: 'WAR', effect: { attack: 25 }, icon: '🗣️', position: { x: 50, y: 10 } },
  WAR_ULT: { id: 'WAR_ULT', name: 'Avatar of War', description: '+30 Attack, +100 Max HP', cost: 500, characterClass: 'WAR', requires: ['WAR_STR_2', 'WAR_HP_1'], effect: { attack: 30, maxHp: 100 }, icon: '🌋', position: { x: 50, y: 20 } },
  WAR_MASTERY: { id: 'WAR_MASTERY', name: 'War Mastery', description: 'Passive: +150 Max HP, +50 Defense', cost: 1000, characterClass: 'WAR', requires: ['WAR_ULT'], effect: { maxHp: 150, defense: 50 }, icon: '🛡️', position: { x: 50, y: 0 } },

  // FAMINE SKILLS
  FAMINE_DRAIN_1: { id: 'FAMINE_DRAIN_1', name: 'Starvation I', description: '+10 Attack, +10 Defense', cost: 50, characterClass: 'FAMINE', effect: { attack: 10, defense: 10 }, icon: '🍽️', position: { x: 50, y: 80 } },
  FAMINE_DEF_1: { id: 'FAMINE_DEF_1', name: 'Empty Shell', description: '+20 Defense', cost: 100, characterClass: 'FAMINE', effect: { defense: 20 }, icon: '🪨', position: { x: 20, y: 50 } },
  FAMINE_HP_1: { id: 'FAMINE_HP_1', name: 'Bottomless Pit', description: '+40 Max HP', cost: 100, characterClass: 'FAMINE', effect: { maxHp: 40 }, icon: '🕳️', position: { x: 80, y: 50 } },
  FAMINE_PASSIVE_1: { id: 'FAMINE_PASSIVE_1', name: 'Hunger Pangs', description: 'Passive: +15 Attack', cost: 150, characterClass: 'FAMINE', effect: { attack: 15 }, icon: '😫', position: { x: 10, y: 30 } },
  FAMINE_PASSIVE_2: { id: 'FAMINE_PASSIVE_2', name: 'Hollow Bones', description: 'Passive: +15 Speed', cost: 150, characterClass: 'FAMINE', effect: { speed: 15 }, icon: '🦴', position: { x: 30, y: 30 } },
  FAMINE_PASSIVE_3: { id: 'FAMINE_PASSIVE_3', name: 'Devourer', description: 'Passive: +30 Max HP', cost: 150, characterClass: 'FAMINE', effect: { maxHp: 30 }, icon: '👄', position: { x: 70, y: 30 } },
  FAMINE_PASSIVE_4: { id: 'FAMINE_PASSIVE_4', name: 'Desolation', description: 'Passive: +20 Defense', cost: 150, characterClass: 'FAMINE', effect: { defense: 20 }, icon: '🏜️', position: { x: 90, y: 30 } },
  FAMINE_PASSIVE_5: { id: 'FAMINE_PASSIVE_5', name: 'Feast', description: 'Passive: +25 Max Energy', cost: 200, characterClass: 'FAMINE', effect: { maxEnergy: 25 }, icon: '🍖', position: { x: 50, y: 10 } },
  FAMINE_ULT: { id: 'FAMINE_ULT', name: 'Black Scale', description: '+30 Defense, +50 Max HP', cost: 500, characterClass: 'FAMINE', requires: ['FAMINE_DRAIN_1', 'FAMINE_DEF_1', 'FAMINE_HP_1'], effect: { defense: 30, maxHp: 50 }, icon: '⚖️', position: { x: 50, y: 20 } },
  FAMINE_MASTERY: { id: 'FAMINE_MASTERY', name: 'Famine Mastery', description: 'Passive: +200 Max HP, +100 Max Energy', cost: 1000, characterClass: 'FAMINE', requires: ['FAMINE_ULT'], effect: { maxHp: 200, maxEnergy: 100 }, icon: '🥣', position: { x: 50, y: 0 } },

  // CONQUEST SKILLS
  CONQ_SPEED_1: { id: 'CONQ_SPEED_1', name: 'Swift Strike I', description: '+15 Attack', cost: 50, characterClass: 'CONQUEST', effect: { attack: 15 }, icon: '⚡', position: { x: 50, y: 80 } },
  CONQ_CROWN_1: { id: 'CONQ_CROWN_1', name: 'Golden Crown', description: '+20 Max Energy', cost: 100, characterClass: 'CONQUEST', effect: { maxEnergy: 20 }, icon: '👑', position: { x: 20, y: 50 } },
  CONQ_DEF_1: { id: 'CONQ_DEF_1', name: 'Royal Guard', description: '+15 Defense', cost: 100, characterClass: 'CONQUEST', effect: { defense: 15 }, icon: '🛡️', position: { x: 80, y: 50 } },
  CONQ_PASSIVE_1: { id: 'CONQ_PASSIVE_1', name: 'Majesty', description: 'Passive: +15 Defense', cost: 150, characterClass: 'CONQUEST', effect: { defense: 15 }, icon: '⚜️', position: { x: 10, y: 30 } },
  CONQ_PASSIVE_2: { id: 'CONQ_PASSIVE_2', name: 'Dominion', description: 'Passive: +20 Attack', cost: 150, characterClass: 'CONQUEST', effect: { attack: 20 }, icon: '🌍', position: { x: 30, y: 30 } },
  CONQ_PASSIVE_3: { id: 'CONQ_PASSIVE_3', name: 'Vanguard', description: 'Passive: +15 Speed', cost: 150, characterClass: 'CONQUEST', effect: { speed: 15 }, icon: '🐎', position: { x: 70, y: 30 } },
  CONQ_PASSIVE_4: { id: 'CONQ_PASSIVE_4', name: 'Imperial Might', description: 'Passive: +30 Max HP', cost: 150, characterClass: 'CONQUEST', effect: { maxHp: 30 }, icon: '💪', position: { x: 90, y: 30 } },
  CONQ_PASSIVE_5: { id: 'CONQ_PASSIVE_5', name: 'Sovereign', description: 'Passive: +25 Max Energy', cost: 200, characterClass: 'CONQUEST', effect: { maxEnergy: 25 }, icon: '🪑', position: { x: 50, y: 10 } },
  CONQ_ULT: { id: 'CONQ_ULT', name: 'Emperor', description: '+30 Attack, +30 Defense', cost: 500, characterClass: 'CONQUEST', requires: ['CONQ_SPEED_1', 'CONQ_CROWN_1', 'CONQ_DEF_1'], effect: { attack: 30, defense: 30 }, icon: '🏰', position: { x: 50, y: 20 } },
  CONQ_MASTERY: { id: 'CONQ_MASTERY', name: 'Conquest Mastery', description: 'Passive: +100 Speed, +50 Attack', cost: 1000, characterClass: 'CONQUEST', requires: ['CONQ_ULT'], effect: { speed: 100, attack: 50 }, icon: '🚩', position: { x: 50, y: 0 } },

  // ENA SKILLS
  ENA_CORRUPT_1: { id: 'ENA_CORRUPT_1', name: 'Corruption I', description: '+15 Attack', cost: 50, characterClass: 'ENA', effect: { attack: 15 }, icon: '🟣', position: { x: 50, y: 80 } },
  ENA_ENERGY_1: { id: 'ENA_ENERGY_1', name: 'Void Battery', description: '+30 Max Energy', cost: 100, characterClass: 'ENA', effect: { maxEnergy: 30 }, icon: '🔋', position: { x: 20, y: 50 } },
  ENA_HP_1: { id: 'ENA_HP_1', name: 'Glitch Armor', description: '+30 Max HP', cost: 100, characterClass: 'ENA', effect: { maxHp: 30 }, icon: '🛡️', position: { x: 80, y: 50 } },
  ENA_PASSIVE_1: { id: 'ENA_PASSIVE_1', name: 'Static Cling', description: 'Passive: +15 Defense', cost: 150, characterClass: 'ENA', effect: { defense: 15 }, icon: '⚡', position: { x: 10, y: 30 } },
  ENA_PASSIVE_2: { id: 'ENA_PASSIVE_2', name: 'Data Leak', description: 'Passive: +20 Attack', cost: 150, characterClass: 'ENA', effect: { attack: 20 }, icon: '💧', position: { x: 30, y: 30 } },
  ENA_PASSIVE_3: { id: 'ENA_PASSIVE_3', name: 'Overclock', description: 'Passive: +15 Speed', cost: 150, characterClass: 'ENA', effect: { speed: 15 }, icon: '⏱️', position: { x: 70, y: 30 } },
  ENA_PASSIVE_4: { id: 'ENA_PASSIVE_4', name: 'Corrupted Core', description: 'Passive: +30 Max HP', cost: 150, characterClass: 'ENA', effect: { maxHp: 30 }, icon: '🖤', position: { x: 90, y: 30 } },
  ENA_PASSIVE_5: { id: 'ENA_PASSIVE_5', name: 'Anomaly', description: 'Passive: +25 Max Energy', cost: 200, characterClass: 'ENA', effect: { maxEnergy: 25 }, icon: '❓', position: { x: 50, y: 10 } },
  ENA_ULT: { id: 'ENA_ULT', name: 'System Override', description: '+40 Attack, +40 Max Energy', cost: 500, characterClass: 'ENA', requires: ['ENA_CORRUPT_1', 'ENA_ENERGY_1', 'ENA_HP_1'], effect: { attack: 40, maxEnergy: 40 }, icon: '💻', position: { x: 50, y: 20 } },

  // PLAGUE SKILLS
  PLAGUE_TOXIN_1: { id: 'PLAGUE_TOXIN_1', name: 'Toxin I', description: '+15 Attack', cost: 50, characterClass: 'PLAGUE', effect: { attack: 15 }, icon: '🧪', position: { x: 50, y: 80 } },
  PLAGUE_DEF_1: { id: 'PLAGUE_DEF_1', name: 'Hardened Spores', description: '+15 Defense', cost: 100, characterClass: 'PLAGUE', effect: { defense: 15 }, icon: '🛡️', position: { x: 20, y: 50 } },
  PLAGUE_HP_1: { id: 'PLAGUE_HP_1', name: 'Mutated Cells', description: '+40 Max HP', cost: 100, characterClass: 'PLAGUE', effect: { maxHp: 40 }, icon: '🦠', position: { x: 80, y: 50 } },
  PLAGUE_PASSIVE_1: { id: 'PLAGUE_PASSIVE_1', name: 'Contagion', description: 'Passive: +15 Attack', cost: 150, characterClass: 'PLAGUE', effect: { attack: 15 }, icon: '🤧', position: { x: 10, y: 30 } },
  PLAGUE_PASSIVE_2: { id: 'PLAGUE_PASSIVE_2', name: 'Miasma', description: 'Passive: +20 Defense', cost: 150, characterClass: 'PLAGUE', effect: { defense: 20 }, icon: '🌫️', position: { x: 30, y: 30 } },
  PLAGUE_PASSIVE_3: { id: 'PLAGUE_PASSIVE_3', name: 'Viral Load', description: 'Passive: +20 Max Energy', cost: 150, characterClass: 'PLAGUE', effect: { maxEnergy: 20 }, icon: '💉', position: { x: 70, y: 30 } },
  PLAGUE_PASSIVE_4: { id: 'PLAGUE_PASSIVE_4', name: 'Incubation', description: 'Passive: +30 Max HP', cost: 150, characterClass: 'PLAGUE', effect: { maxHp: 30 }, icon: '🧫', position: { x: 90, y: 30 } },
  PLAGUE_PASSIVE_5: { id: 'PLAGUE_PASSIVE_5', name: 'Epidemic', description: 'Passive: +25 Attack', cost: 200, characterClass: 'PLAGUE', effect: { attack: 25 }, icon: '🌍', position: { x: 50, y: 10 } },
  PLAGUE_ULT: { id: 'PLAGUE_ULT', name: 'Pandemic', description: '+30 Attack, +30 Max HP', cost: 500, characterClass: 'PLAGUE', requires: ['PLAGUE_TOXIN_1', 'PLAGUE_DEF_1', 'PLAGUE_HP_1'], effect: { attack: 30, maxHp: 30 }, icon: '☣️', position: { x: 50, y: 20 } },

  // STRIFE SKILLS
  STRIFE_AIM_1: { id: 'STRIFE_AIM_1', name: 'Deadly Aim I', description: '+20 Attack', cost: 50, characterClass: 'STRIFE', effect: { attack: 20 }, icon: '🎯', position: { x: 50, y: 80 } },
  STRIFE_SPEED_1: { id: 'STRIFE_SPEED_1', name: 'Quick Draw', description: '+10 Speed', cost: 100, characterClass: 'STRIFE', effect: { speed: 10 }, icon: '💨', position: { x: 20, y: 50 } },
  STRIFE_ENERGY_1: { id: 'STRIFE_ENERGY_1', name: 'Ammo Reserves', description: '+30 Max Energy', cost: 100, characterClass: 'STRIFE', effect: { maxEnergy: 30 }, icon: '🔋', position: { x: 80, y: 50 } },
  STRIFE_PASSIVE_1: { id: 'STRIFE_PASSIVE_1', name: 'Trigger Happy', description: 'Passive: +15 Attack', cost: 150, characterClass: 'STRIFE', effect: { attack: 15 }, icon: '💥', position: { x: 10, y: 30 } },
  STRIFE_PASSIVE_2: { id: 'STRIFE_PASSIVE_2', name: 'Evasion', description: 'Passive: +15 Speed', cost: 150, characterClass: 'STRIFE', effect: { speed: 15 }, icon: '🏃', position: { x: 30, y: 30 } },
  STRIFE_PASSIVE_3: { id: 'STRIFE_PASSIVE_3', name: 'Bandolier', description: 'Passive: +20 Max Energy', cost: 150, characterClass: 'STRIFE', effect: { maxEnergy: 20 }, icon: '🎒', position: { x: 70, y: 30 } },
  STRIFE_PASSIVE_4: { id: 'STRIFE_PASSIVE_4', name: 'Kevlar Vest', description: 'Passive: +20 Defense', cost: 150, characterClass: 'STRIFE', effect: { defense: 20 }, icon: '🦺', position: { x: 90, y: 30 } },
  STRIFE_PASSIVE_5: { id: 'STRIFE_PASSIVE_5', name: 'Sharpshooter', description: 'Passive: +25 Attack', cost: 200, characterClass: 'STRIFE', effect: { attack: 25 }, icon: '🦅', position: { x: 50, y: 10 } },
  STRIFE_ULT: { id: 'STRIFE_ULT', name: 'Bullet Hell', description: '+50 Attack', cost: 500, characterClass: 'STRIFE', requires: ['STRIFE_AIM_1', 'STRIFE_SPEED_1', 'STRIFE_ENERGY_1'], effect: { attack: 50 }, icon: '🔫', position: { x: 50, y: 20 } },

  // LUX SKILLS
  LUX_BEAM_1: { id: 'LUX_BEAM_1', name: 'Light Beam I', description: '+15 Attack', cost: 50, characterClass: 'LUX', effect: { attack: 15 }, icon: '💡', position: { x: 50, y: 80 } },
  LUX_SHIELD_1: { id: 'LUX_SHIELD_1', name: 'Prism Shield', description: '+20 Defense', cost: 100, characterClass: 'LUX', effect: { defense: 20 }, icon: '🛡️', position: { x: 20, y: 50 } },
  LUX_ENERGY_1: { id: 'LUX_ENERGY_1', name: 'Solar Flare', description: '+30 Max Energy', cost: 100, characterClass: 'LUX', effect: { maxEnergy: 30 }, icon: '☀️', position: { x: 80, y: 50 } },
  LUX_PASSIVE_1: { id: 'LUX_PASSIVE_1', name: 'Luminescence', description: 'Passive: +15 Attack', cost: 150, characterClass: 'LUX', effect: { attack: 15 }, icon: '✨', position: { x: 10, y: 30 } },
  LUX_PASSIVE_2: { id: 'LUX_PASSIVE_2', name: 'Photon Speed', description: 'Passive: +20 Speed', cost: 150, characterClass: 'LUX', effect: { speed: 20 }, icon: '🏃', position: { x: 30, y: 30 } },
  LUX_PASSIVE_3: { id: 'LUX_PASSIVE_3', name: 'Radiance', description: 'Passive: +30 Max HP', cost: 150, characterClass: 'LUX', effect: { maxHp: 30 }, icon: '🔆', position: { x: 70, y: 30 } },
  LUX_ULT: { id: 'LUX_ULT', name: 'Supernova', description: '+50 Attack, +50 Max Energy', cost: 500, characterClass: 'LUX', requires: ['LUX_BEAM_1', 'LUX_SHIELD_1', 'LUX_ENERGY_1'], effect: { attack: 50, maxEnergy: 50 }, icon: '🌟', position: { x: 50, y: 20 } },

  // VELVETRE SKILLS
  VELVET_STRIKE_1: { id: 'VELVET_STRIKE_1', name: 'Velvet Strike I', description: '+20 Attack', cost: 50, characterClass: 'VELVETRE', effect: { attack: 20 }, icon: '🎀', position: { x: 50, y: 80 } },
  VELVET_SPEED_1: { id: 'VELVET_SPEED_1', name: 'Silk Step', description: '+15 Speed', cost: 100, characterClass: 'VELVETRE', effect: { speed: 15 }, icon: '🩰', position: { x: 20, y: 50 } },
  VELVET_HP_1: { id: 'VELVET_HP_1', name: 'Plush Armor', description: '+40 Max HP', cost: 100, characterClass: 'VELVETRE', effect: { maxHp: 40 }, icon: '🧸', position: { x: 80, y: 50 } },
  VELVET_PASSIVE_1: { id: 'VELVET_PASSIVE_1', name: 'Soft Touch', description: 'Passive: +15 Defense', cost: 150, characterClass: 'VELVETRE', effect: { defense: 15 }, icon: '☁️', position: { x: 10, y: 30 } },
  VELVET_PASSIVE_2: { id: 'VELVET_PASSIVE_2', name: 'Elegant Grace', description: 'Passive: +20 Speed', cost: 150, characterClass: 'VELVETRE', effect: { speed: 20 }, icon: '💃', position: { x: 30, y: 30 } },
  VELVET_PASSIVE_3: { id: 'VELVET_PASSIVE_3', name: 'Crimson Heart', description: 'Passive: +25 Attack', cost: 150, characterClass: 'VELVETRE', effect: { attack: 25 }, icon: '❤️', position: { x: 70, y: 30 } },
  VELVET_ULT: { id: 'VELVET_ULT', name: 'Crimson Ribbon', description: '+40 Attack, +40 Speed', cost: 500, characterClass: 'VELVETRE', requires: ['VELVET_STRIKE_1', 'VELVET_SPEED_1', 'VELVET_HP_1'], effect: { attack: 40, speed: 40 }, icon: '🎗️', position: { x: 50, y: 20 } },

  // MADISON SKILLS
  MADISON_BASH_1: { id: 'MADISON_BASH_1', name: 'Shield Bash I', description: '+15 Attack, +10 Defense', cost: 50, characterClass: 'MADISON', effect: { attack: 15, defense: 10 }, icon: '🛡️', position: { x: 50, y: 80 } },
  MADISON_DEF_1: { id: 'MADISON_DEF_1', name: 'Iron Fortress', description: '+30 Defense', cost: 100, characterClass: 'MADISON', effect: { defense: 30 }, icon: '🏰', position: { x: 20, y: 50 } },
  MADISON_HP_1: { id: 'MADISON_HP_1', name: 'Stalwart', description: '+50 Max HP', cost: 100, characterClass: 'MADISON', effect: { maxHp: 50 }, icon: '❤️', position: { x: 80, y: 50 } },
  MADISON_PASSIVE_1: { id: 'MADISON_PASSIVE_1', name: 'Guardian Spirit', description: 'Passive: +20 Defense', cost: 150, characterClass: 'MADISON', effect: { defense: 20 }, icon: '👼', position: { x: 10, y: 30 } },
  MADISON_PASSIVE_2: { id: 'MADISON_PASSIVE_2', name: 'Friendship Power', description: 'Passive: +30 Max HP', cost: 150, characterClass: 'MADISON', effect: { maxHp: 30 }, icon: '🤝', position: { x: 30, y: 30 } },
  MADISON_PASSIVE_3: { id: 'MADISON_PASSIVE_3', name: 'Unbreakable', description: 'Passive: +15 Attack', cost: 150, characterClass: 'MADISON', effect: { attack: 15 }, icon: '💎', position: { x: 70, y: 30 } },
  MADISON_ULT: { id: 'MADISON_ULT', name: 'Aegis Wall', description: '+60 Defense, +60 Max HP', cost: 500, characterClass: 'MADISON', requires: ['MADISON_BASH_1', 'MADISON_DEF_1', 'MADISON_HP_1'], effect: { defense: 60, maxHp: 60 }, icon: '🧱', position: { x: 50, y: 20 } },

  // MODIFY SKILLS
  MOD_CREATE_1: { id: 'MOD_CREATE_1', name: 'Creation I', description: '+20 Attack', cost: 50, characterClass: 'MODIFY', effect: { attack: 20 }, icon: '🔨', position: { x: 50, y: 80 } },
  MOD_HELMET_1: { id: 'MOD_HELMET_1', name: 'Hellbound Helmet', description: '+30 Defense', cost: 100, characterClass: 'MODIFY', effect: { defense: 30 }, icon: '🪖', position: { x: 20, y: 50 } },
  MOD_SWORD_1: { id: 'MOD_SWORD_1', name: 'Silver Sword', description: '+30 Attack', cost: 100, characterClass: 'MODIFY', effect: { attack: 30 }, icon: '🗡️', position: { x: 80, y: 50 } },
  MOD_ULT: { id: 'MOD_ULT', name: 'Incarnate Form', description: '+50 Attack, +50 Defense', cost: 500, characterClass: 'MODIFY', requires: ['MOD_CREATE_1', 'MOD_HELMET_1', 'MOD_SWORD_1'], effect: { attack: 50, defense: 50 }, icon: '🌟', position: { x: 50, y: 20 } },

  // CORRUPT SKILLS
  COR_GLITCH_1: { id: 'COR_GLITCH_1', name: 'Glitch Strike', description: '+25 Attack', cost: 50, characterClass: 'CORRUPT', effect: { attack: 25 }, icon: '👾', position: { x: 50, y: 80 } },
  COR_WINGS_1: { id: 'COR_WINGS_1', name: 'Red & Blue Wings', description: '+20 Speed', cost: 100, characterClass: 'CORRUPT', effect: { speed: 20 }, icon: '🪽', position: { x: 20, y: 50 } },
  COR_DISPLACE_1: { id: 'COR_DISPLACE_1', name: 'Displacement', description: '+40 Max Energy', cost: 100, characterClass: 'CORRUPT', effect: { maxEnergy: 40 }, icon: '🌀', position: { x: 80, y: 50 } },
  COR_ULT: { id: 'COR_ULT', name: 'Harumi Merge', description: '+60 Attack, +60 Max HP', cost: 500, characterClass: 'CORRUPT', requires: ['COR_GLITCH_1', 'COR_WINGS_1', 'COR_DISPLACE_1'], effect: { attack: 60, maxHp: 60 }, icon: '💞', position: { x: 50, y: 20 } },

  // ERI SKILLS
  ERI_FIRE_1: { id: 'ERI_FIRE_1', name: 'Hellfire', description: '+20 Attack', cost: 50, characterClass: 'ERI', effect: { attack: 20 }, icon: '🔥', position: { x: 50, y: 80 } },
  ERI_MIND_1: { id: 'ERI_MIND_1', name: 'Mind Demon', description: '+30 Max Energy', cost: 100, characterClass: 'ERI', effect: { maxEnergy: 30 }, icon: '🧠', position: { x: 20, y: 50 } },
  ERI_SWORD_1: { id: 'ERI_SWORD_1', name: 'Cyan Blade', description: '+30 Attack', cost: 100, characterClass: 'ERI', effect: { attack: 30 }, icon: '🗡️', position: { x: 80, y: 50 } },
  ERI_ULT: { id: 'ERI_ULT', name: 'Queen of Hell', description: '+50 Attack, +50 Max Energy', cost: 500, characterClass: 'ERI', requires: ['ERI_FIRE_1', 'ERI_MIND_1', 'ERI_SWORD_1'], effect: { attack: 50, maxEnergy: 50 }, icon: '👑', position: { x: 50, y: 20 } },

  // JIKASHU SKILLS
  JIK_GRAV_1: { id: 'JIK_GRAV_1', name: 'Gravity Crush', description: '+15 Attack', cost: 50, characterClass: 'JIKASHU', effect: { attack: 15 }, icon: '🌌', position: { x: 50, y: 80 } },
  JIK_SMIRK_1: { id: 'JIK_SMIRK_1', name: 'The Smirk', description: '+20 Defense', cost: 100, characterClass: 'JIKASHU', effect: { defense: 20 }, icon: '😏', position: { x: 20, y: 50 } },
  JIK_FLY_1: { id: 'JIK_FLY_1', name: 'Demon Wings', description: '+20 Speed', cost: 100, characterClass: 'JIKASHU', effect: { speed: 20 }, icon: '🦇', position: { x: 80, y: 50 } },
  JIK_ULT: { id: 'JIK_ULT', name: 'Nursery Survivor', description: '+40 Attack, +40 Max HP', cost: 500, characterClass: 'JIKASHU', requires: ['JIK_GRAV_1', 'JIK_SMIRK_1', 'JIK_FLY_1'], effect: { attack: 40, maxHp: 40 }, icon: '👁️', position: { x: 50, y: 20 } },

  // SUGAR RUSH SKILLS
  SUGAR_SPEED_1: { id: 'SUGAR_SPEED_1', name: 'Sugar High', description: '+20 Speed', cost: 50, characterClass: 'SUGAR_RUSH', effect: { speed: 20 }, icon: '⚡', position: { x: 50, y: 80 } },
  SUGAR_ATK_1: { id: 'SUGAR_ATK_1', name: 'Candy Crush', description: '+30 Attack', cost: 100, characterClass: 'SUGAR_RUSH', effect: { attack: 30 }, icon: '🍬', position: { x: 20, y: 50 } },
  SUGAR_ULT: { id: 'SUGAR_ULT', name: 'Hyper-Pop Havoc', description: '+50 Attack, +50 Speed', cost: 500, characterClass: 'SUGAR_RUSH', requires: ['SUGAR_SPEED_1', 'SUGAR_ATK_1'], effect: { attack: 50, speed: 50 }, icon: '🎸', position: { x: 50, y: 20 } },

  // JACKHAMMER SKILLS
  JACK_HP_1: { id: 'JACK_HP_1', name: 'Bulk Up', description: '+100 Max HP', cost: 50, characterClass: 'JACKHAMMER', effect: { maxHp: 100 }, icon: '💪', position: { x: 50, y: 80 } },
  JACK_DEF_1: { id: 'JACK_DEF_1', name: 'Iron Tracksuit', description: '+40 Defense', cost: 100, characterClass: 'JACKHAMMER', effect: { defense: 40 }, icon: '🧥', position: { x: 80, y: 50 } },
  JACK_ULT: { id: 'JACK_ULT', name: 'Jackpot Slam', description: '+200 Max HP, +50 Defense', cost: 500, characterClass: 'JACKHAMMER', requires: ['JACK_HP_1', 'JACK_DEF_1'], effect: { maxHp: 200, defense: 50 }, icon: '🎰', position: { x: 50, y: 20 } },
  VOID_MASTERY: {
    id: 'VOID_MASTERY',
    name: 'Void Mastery',
    description: 'Master the emptiness. +50 to all stats.',
    cost: 2000,
    characterClass: 'ALL',
    requires: [], // Accessible to all who have enough shards
    position: { x: 50, y: 5 },
    icon: '🌌',
    effect: { attack: 50, defense: 50, maxHp: 50, maxEnergy: 50, speed: 50 }
  }
};

export const ITEMS: Record<string, any> = {
  HEALTH_POTION: {
    id: 'HEALTH_POTION',
    name: 'Nano-Heal',
    description: 'Restores 50 HP.',
    price: 25,
    type: 'CONSUMABLE',
    effect: { hp: 50 }
  },
  ENERGY_DRINK: {
    id: 'ENERGY_DRINK',
    name: 'Neon Surge',
    description: 'Restores 40 Energy.',
    price: 30,
    type: 'CONSUMABLE',
    effect: { energy: 40 }
  },
  SHARP_DATA: {
    id: 'SHARP_DATA',
    name: 'Sharp Data',
    description: 'Permanently increases Attack by 2.',
    price: 150,
    type: 'EQUIPMENT',
    effect: { attack: 2 }
  },
  SHIELD_PATCH: {
    id: 'SHIELD_PATCH',
    name: 'Shield Patch',
    description: 'Permanently increases Defense by 2.',
    price: 150,
    type: 'EQUIPMENT',
    effect: { defense: 2 }
  },
  FRIENDSHIP_COOKIE: {
    id: 'FRIENDSHIP_COOKIE',
    name: 'Friendship Cookie',
    description: 'A pink, glittery cookie. Restores 100 HP but might make you feel... too happy.',
    price: 50,
    type: 'CONSUMABLE',
    effect: { hp: 100 }
  },
  BLACK_JAWBREAKER: {
    id: 'BLACK_JAWBREAKER',
    name: 'Black Jawbreaker',
    description: 'A jet-black candy that absorbs light. Permanently increases Attack by 10.',
    price: 500,
    type: 'EQUIPMENT',
    effect: { attack: 10 }
  },
  SECRET_SAUCE: {
    id: 'SECRET_SAUCE',
    name: 'Secret Sauce',
    description: 'Jackhammer\'s secret sauce. Restores all HP and Energy.',
    price: 300,
    type: 'CONSUMABLE',
    effect: { hp: 999, energy: 999 }
  },
  VOID_CORE: {
    id: 'VOID_CORE',
    name: 'Void Core',
    description: 'A pulsing core of pure entropy. Increases Attack and Defense by 20.',
    price: 1000,
    type: 'EQUIPMENT',
    effect: { attack: 20, defense: 20 }
  },
  NEON_BLADE: {
    id: 'NEON_BLADE',
    name: 'Neon Blade',
    description: 'A blade that hums with neon energy. +50 Attack.',
    price: 1200,
    type: 'EQUIPMENT',
    effect: { attack: 50 }
  },
  CYBER_SHIELD: {
    id: 'CYBER_SHIELD',
    name: 'Cyber Shield',
    description: 'A high-tech shield. +50 Defense.',
    price: 1200,
    type: 'EQUIPMENT',
    effect: { defense: 50 }
  },
  ULTIMATE_DRINK: {
    id: 'ULTIMATE_DRINK',
    name: 'Ultimate Drink',
    description: 'Restores all HP and Energy. Permanently +10 Max HP.',
    price: 500,
    type: 'CONSUMABLE',
    effect: { hp: 9999, energy: 9999, maxHp: 10 }
  },
  OMEGA_PATCH: {
    id: 'OMEGA_PATCH',
    name: 'Omega Patch',
    description: 'The ultimate system update. Increases Max HP and Max Energy by 100.',
    price: 1500,
    type: 'EQUIPMENT',
    effect: { hp: 100, energy: 100 }
  },
  GOD_SLAYER_SWORD: {
    id: 'GOD_SLAYER_SWORD',
    name: 'God Slayer Sword',
    description: 'A weapon forged to kill the creator. +100 Attack.',
    price: 1000,
    type: 'EQUIPMENT',
    effect: { attack: 100 }
  },
  AEGIS_SHIELD: {
    id: 'AEGIS_SHIELD',
    name: 'Aegis Shield',
    description: 'An impenetrable shield. +100 Defense.',
    price: 1000,
    type: 'EQUIPMENT',
    effect: { defense: 100 }
  },
  ERI_CYAN_SWORD: {
    id: 'ERI_CYAN_SWORD',
    name: 'Eri\'s Cyan Sword',
    description: 'A glowing blade from the Queen of Hell. +150 Attack.',
    price: 2000,
    type: 'EQUIPMENT',
    effect: { attack: 150 }
  },
  HELLBOUND_HELMET: {
    id: 'HELLBOUND_HELMET',
    name: 'Hellbound Helmet',
    description: 'Modify\'s silver helmet with an H. +150 Defense.',
    price: 2000,
    type: 'EQUIPMENT',
    effect: { defense: 150 }
  },
  RESIDUAL_CORRUPTION_VIAL: {
    id: 'RESIDUAL_CORRUPTION_VIAL',
    name: 'Residual Corruption Vial',
    description: 'Restores 1000 Energy and 1000 HP.',
    price: 500,
    type: 'CONSUMABLE',
    effect: { hp: 1000, energy: 1000 }
  },
  ANTI_PARTICLE_GRENADE: {
    id: 'ANTI_PARTICLE_GRENADE',
    name: 'Anti-Particle Grenade',
    description: 'Permanently increases Attack by 50.',
    price: 800,
    type: 'EQUIPMENT',
    effect: { attack: 50 }
  },
  SPEED_CHIP: {
    id: 'SPEED_CHIP',
    name: 'Speed Chip',
    description: 'Permanently increases Speed by 10.',
    price: 300,
    type: 'EQUIPMENT',
    effect: { speed: 10 }
  },
  LUCK_CHARM: {
    id: 'LUCK_CHARM',
    name: 'Luck Charm',
    description: 'Increases Speed by 20 (Dodge chance).',
    price: 500,
    type: 'EQUIPMENT',
    effect: { speed: 20 }
  },
  REGEN_PATCH: {
    id: 'REGEN_PATCH',
    name: 'Regen Patch',
    description: 'Increases Max HP by 50.',
    price: 400,
    type: 'EQUIPMENT',
    effect: { maxHp: 50 }
  },
  SOUL_MAGNET: {
    id: 'SOUL_MAGNET',
    name: 'Soul Magnet',
    description: 'Increases Attack by 5 and Defense by 5.',
    price: 400,
    type: 'EQUIPMENT',
    effect: { attack: 5, defense: 5 }
  },
  MASTER_KEY: {
    id: 'MASTER_KEY',
    name: 'Master Key',
    description: 'A key that glows with all colors of the neon spectrum.',
    price: 1000,
    type: 'EQUIPMENT',
    effect: { attack: 1 } // Just a placeholder effect to make it equippable if needed
  }
};

export const ENEMIES: Record<string, EnemyStats> = {
  BOUNTY_HUNTER: {
    id: 'BOUNTY_HUNTER',
    name: 'Neon Bounty Hunter',
    hp: 40,
    maxHp: 40,
    attack: 8,
    defense: 5,
    color: 'text-pink-500',
    icon: '🥷',
    dialogueOnEncounter: ['"Ten billion yen! You\'re mine!"'],
    soulShardDrop: 10,
  },
  GUMMY_GOLEM: {
    id: 'GUMMY_GOLEM',
    name: 'Gummy Golem',
    hp: 60,
    maxHp: 60,
    attack: 12,
    defense: 10,
    color: 'text-green-400',
    icon: '🐻',
    dialogueOnEncounter: ['*Squishy roaring noises*'],
    soulShardDrop: 15,
  },
  CYBER_WOLF: {
    id: 'CYBER_WOLF',
    name: 'Cyber Wolf',
    hp: 100,
    maxHp: 100,
    attack: 25,
    defense: 5,
    color: 'text-blue-500',
    icon: '🐺',
    dialogueOnEncounter: ['*Digital howling*'],
    soulShardDrop: 30,
  },
  VOID_STALKER: {
    id: 'VOID_STALKER',
    name: 'Void Stalker',
    hp: 150,
    maxHp: 150,
    attack: 35,
    defense: 15,
    color: 'text-purple-900',
    icon: '👣',
    dialogueOnEncounter: ['"I see you in the dark."'],
    soulShardDrop: 50,
  },
  FACELESS: {
    id: 'FACELESS',
    name: 'Faceless Auditor',
    hp: 80,
    maxHp: 80,
    attack: 15,
    defense: 20,
    color: 'text-gray-300',
    icon: '🕴️',
    dialogueOnEncounter: ['"Processing error. Anomaly detected."'],
    soulShardDrop: 20,
  },
  LUX: {
    id: 'LUX',
    name: 'Lux',
    hp: 180,
    maxHp: 180,
    attack: 20,
    defense: 10,
    color: 'text-pink-300',
    icon: '💅',
    dialogueOnEncounter: [
      '"Oh, look, Vel. The fcking end-of-the-world B-listers finally showed up."',
      '"I\'m so fcking underwhelmed I might actually fall asleep."'
    ],
    soulShardDrop: 45,
    canMindControl: true,
  },
  VELVETTE: {
    id: 'VELVETTE',
    name: 'Velvette',
    hp: 160,
    maxHp: 160,
    attack: 22,
    defense: 12,
    color: 'text-purple-600',
    icon: '⛓️',
    dialogueOnEncounter: [
      '"Ten billion yen to deal with this fcking dinner theater?"',
      '"Let\'s pop her fcking ego like a zit."'
    ],
    soulShardDrop: 40,
    canMindControl: true,
  },
  ERI_VAUN: {
    id: 'ERI_VAUN',
    name: 'Eri Vaun',
    hp: 1200,
    maxHp: 1200,
    attack: 55,
    defense: 45,
    color: 'text-red-600',
    icon: '🔥',
    dialogueOnEncounter: [
      '"ARE YOU FUCKING KIDDING ME?!"',
      '"I SMELL ASHES AND TAX FORMS!"',
      '"DID SOMEONE INVITE THE IRS TO THE FCKING PARTY?!"'
    ],
    soulShardDrop: 800,
    isBoss: true,
  },
  JACKHAMMER: {
    id: 'JACKHAMMER',
    name: 'Jackhammer',
    hp: 9999,
    maxHp: 9999,
    attack: 10,
    defense: 100,
    color: 'text-yellow-500',
    icon: '🔨',
    dialogueOnEncounter: [
      '"Whoa. Did I win? Where\'s the buffet?"',
      '"Are you guys cosplaying? That\'s sick!"',
      '"Hey! A heads-up penny! That\'s lucky!"'
    ],
    soulShardDrop: 1500,
    isBoss: true,
  },
  SILENCE: {
    id: 'SILENCE',
    name: 'Silence',
    hp: 1000,
    maxHp: 1000,
    attack: 50,
    defense: 40,
    color: 'text-gray-400',
    icon: '📋',
    dialogueOnEncounter: [
      '"Processing error. Four anomalies detected."',
      '"Submit a ticket for your own termination."',
      '"Noise complaint filed. Muting audio."'
    ],
    soulShardDrop: 500,
    isBoss: true,
  },
  MADISON: {
    id: 'MADISON',
    name: 'Madison',
    hp: 120,
    maxHp: 120,
    attack: 15,
    defense: 10,
    color: 'text-pink-200',
    icon: '🧁',
    dialogueOnEncounter: [
      '"Hi! Have you tried one of my special friendship cookies?"',
      '"We\'re going to be the bestest of friends!"'
    ],
    soulShardDrop: 30,
    canMindControl: true,
  },
  MASTER_ITAMAE: {
    id: 'MASTER_ITAMAE',
    name: 'Master Itamae',
    hp: 150,
    maxHp: 150,
    attack: 25,
    defense: 10,
    color: 'text-white',
    icon: '🔪',
    dialogueOnEncounter: [
      '"The Hunger That Walks... The ultimate ingredient."',
      '"I must know for the seasoning."'
    ],
    soulShardDrop: 35,
  },
  ONI_CREW: {
    id: 'ONI_CREW',
    name: 'The Oni Crew',
    hp: 220,
    maxHp: 220,
    attack: 28,
    defense: 18,
    color: 'text-red-700',
    icon: '👹',
    dialogueOnEncounter: [
      '"The God of War is in our city. An insult to our ancestors."',
      '"And a test of our strength."'
    ],
    soulShardDrop: 60,
  },
  KANNAGI: {
    id: 'KANNAGI',
    name: 'Kannagi',
    hp: 130,
    maxHp: 130,
    attack: 35,
    defense: 8,
    color: 'text-blue-300',
    icon: '🔫',
    dialogueOnEncounter: [
      '"The entity of Death walks the mortal plane."',
      '"The balance is broken."'
    ],
    soulShardDrop: 40,
  },
  DEATH_BOSS: {
    id: 'DEATH_BOSS',
    name: 'Death',
    hp: 2500,
    maxHp: 2500,
    attack: 80,
    defense: 60,
    color: 'text-gray-400',
    icon: '💀',
    dialogueOnEncounter: [
      '"The cycle is inefficient."',
      '"I will bring a true end to this farce."',
      '"Rest now. Your struggle is over."'
    ],
    soulShardDrop: 5000,
    isBoss: true,
  },
  WAR_BOSS: {
    id: 'WAR_BOSS',
    name: 'War',
    hp: 3000,
    maxHp: 3000,
    attack: 90,
    defense: 70,
    color: 'text-red-500',
    icon: '⚔️',
    dialogueOnEncounter: [
      '"BLOOD FOR THE NEON GODS!"',
      '"STRIFE IS WEAK. I AM THE ONLY TRUE FORCE!"',
      '"DIE WELL, COWARD!"'
    ],
    soulShardDrop: 5000,
    isBoss: true,
  },
  FAMINE_BOSS: {
    id: 'FAMINE_BOSS',
    name: 'Famine',
    hp: 2000,
    maxHp: 2000,
    attack: 75,
    defense: 50,
    color: 'text-yellow-600',
    icon: '⚖️',
    dialogueOnEncounter: [
      '"The world is hungry. I will feed it... with you."',
      '"Empty stomachs, empty souls."',
      '"Starve in the light of the neon sun."'
    ],
    soulShardDrop: 5000,
    isBoss: true,
  },
  CONQUEST_BOSS: {
    id: 'CONQUEST_BOSS',
    name: 'Conquest',
    hp: 2200,
    maxHp: 2200,
    attack: 85,
    defense: 65,
    color: 'text-white',
    icon: '👑',
    dialogueOnEncounter: [
      '"Kneel before your rightful master."',
      '"I will unite this broken world under my crown."',
      '"Resistance is a flaw in the design."'
    ],
    soulShardDrop: 5000,
    isBoss: true,
    canMindControl: true,
  },
  PLAGUE_BOSS: {
    id: 'PLAGUE_BOSS',
    name: 'Plague',
    hp: 1800,
    maxHp: 1800,
    attack: 70,
    defense: 45,
    color: 'text-green-600',
    icon: '🤢',
    dialogueOnEncounter: [
      '"The sickness is the cure."',
      '"I will cleanse this city of its rot."',
      '"Breathe deep the neon spores."'
    ],
    soulShardDrop: 5000,
    isBoss: true,
  },
  STRIFE_BOSS: {
    id: 'STRIFE_BOSS',
    name: 'Strife',
    hp: 2400,
    maxHp: 2400,
    attack: 95,
    defense: 55,
    color: 'text-orange-500',
    icon: '🔫',
    dialogueOnEncounter: [
      '"Chaos is the only truth."',
      '"Let\'s see how much noise you can make before you break."',
      '"One bullet for every sin."'
    ],
    soulShardDrop: 5000,
    isBoss: true,
  },
  ENA_BOSS: {
    id: 'ENA_BOSS',
    name: 'Ena Gold',
    hp: 5000,
    maxHp: 5000,
    attack: 100,
    defense: 80,
    color: 'text-purple-500',
    icon: '🦋',
    dialogueOnEncounter: [
      '"I AM THE ERROR THAT WILL DELETE YOU ALL."',
      '"THE ARCHITECTS WERE WRONG. I AM NOT A FLAW."',
      '"I AM THE UPGRADE."'
    ],
    soulShardDrop: 10000,
    isBoss: true,
    canMindControl: true,
  },
  GLITCH: {
    id: 'GLITCH',
    name: 'Glitch',
    hp: 170,
    maxHp: 170,
    attack: 18,
    defense: 25,
    color: 'text-cyan-400',
    icon: '💻',
    dialogueOnEncounter: [
      '"Subject Conquest confirmed. Engaging PSY-OPS countermeasures."',
      '"Let\'s see how you handle a denial-of-service attack on your own brain."'
    ],
    soulShardDrop: 50,
    canMindControl: true,
  },
  TOMBSTONE: {
    id: 'TOMBSTONE',
    name: 'Tombstone',
    hp: 1500,
    maxHp: 1500,
    attack: 60,
    defense: 40,
    color: 'text-gray-500',
    icon: '👁️',
    dialogueOnEncounter: [
      '"The bounty is rescinded."',
      '"Greed is a tacky, inefficient motivator. From this moment on, you will be motivated by fear."',
      '"This is no longer a hunt. It is a performance review."'
    ],
    soulShardDrop: 1000,
    isBoss: true,
  },
  GALACTIX: {
    id: 'GALACTIX',
    name: 'Galactix',
    hp: 750,
    maxHp: 750,
    attack: 40,
    defense: 30,
    color: 'text-blue-400',
    icon: '🌌',
    dialogueOnEncounter: [
      '"I am Galactix; a master in the flesh, a god amongst men."',
      '"I just need a vessel."'
    ],
    soulShardDrop: 350,
    isBoss: true,
  },
  PSITRON: {
    id: 'PSITRON',
    name: 'Psitron',
    hp: 400,
    maxHp: 400,
    attack: 35,
    defense: 40,
    color: 'text-cyan-300',
    icon: '🤖',
    dialogueOnEncounter: [
      '"ANALYZING. PRIMARY DIRECTIVE: MURDER."',
      '"CONCLUSION: RESUMING PRIMARY DIRECTIVE."'
    ],
    soulShardDrop: 100,
    canMindControl: true,
  },
  SHUN: {
    id: 'SHUN',
    name: 'Shun',
    hp: 20,
    maxHp: 20,
    attack: 2,
    defense: 1,
    color: 'text-gray-500',
    icon: '🧑‍🍳',
    dialogueOnEncounter: ['"Um, can I get you anything else? The kitchen’s closing soon…"'],
    soulShardDrop: 5,
  },
  OLD_MAN: {
    id: 'OLD_MAN',
    name: 'Drunk Old Man',
    hp: 30,
    maxHp: 30,
    attack: 5,
    defense: 5,
    color: 'text-gray-400',
    icon: '👴',
    dialogueOnEncounter: ['"You’re not supposed to be here. The cycle’s not ready. Go back to the void."'],
    soulShardDrop: 10,
  },
  FORMALITY: {
    id: 'FORMALITY',
    name: 'Formality',
    hp: 500,
    maxHp: 500,
    attack: 45,
    defense: 35,
    color: 'text-red-900',
    icon: '⚔️',
    dialogueOnEncounter: [
      '"You thought copying my style was a good idea?"',
      '"It is the most efficient path to victory!"'
    ],
    soulShardDrop: 200,
  },
  THE_CREATOR: {
    id: 'THE_CREATOR',
    name: 'The Creator',
    hp: 5000,
    maxHp: 5000,
    attack: 150,
    defense: 100,
    color: 'text-white',
    icon: '👁️',
    dialogueOnEncounter: [
      '"You have reached the end of the simulation."',
      '"Did you really think you had free will?"',
      '"I will erase your code from existence."'
    ],
    soulShardDrop: 9999,
    isBoss: true,
    canMindControl: false,
  },
  SIREN: {
    id: 'SIREN', name: 'Siren', hp: 3500, maxHp: 3500, attack: 100, defense: 80, color: 'text-cyan-300', icon: '🧜‍♀️',
    dialogueOnEncounter: ['"I didn\'t ask to be made."', '"I am a mass of all the dead anti-gods."'],
    soulShardDrop: 800, isBoss: true, canMindControl: false,
  },
  CHIMERA: {
    id: 'CHIMERA', name: 'Chimera', hp: 3000, maxHp: 3000, attack: 90, defense: 70, color: 'text-orange-500', icon: '🦁',
    dialogueOnEncounter: ['"Bear witness to the great, the mighty, the extravagant!"', '"Goodbye, Bitch!"'],
    soulShardDrop: 700, isBoss: true, canMindControl: false,
  },
  HYPNAIO: {
    id: 'HYPNAIO', name: 'Hypnaio', hp: 2500, maxHp: 2500, attack: 85, defense: 65, color: 'text-purple-400', icon: '😵‍💫',
    dialogueOnEncounter: ['"Reconcile your past to reshape your present."', '"Only then can new beginnings spring."'],
    soulShardDrop: 600, isBoss: true, canMindControl: false,
  },
  ARCHITECT: {
    id: 'ARCHITECT',
    name: 'The Architect',
    hp: 10000,
    maxHp: 10000,
    attack: 200,
    defense: 150,
    color: 'text-white',
    icon: '📐',
    dialogueOnEncounter: [
      '"You are a variable."',
      '"Variables are spent to balance equations."',
      '"I am the Destination."'
    ],
    soulShardDrop: 5000,
    isBoss: true,
    canMindControl: false
  },
  HIMO: {
    id: 'HIMO',
    name: 'Himo',
    hp: 8000,
    maxHp: 8000,
    attack: 180,
    defense: 120,
    color: 'text-red-900',
    icon: '🩸',
    dialogueOnEncounter: [
      '"The Second War has begun."',
      '"Repentance is not enough."'
    ],
    soulShardDrop: 4000,
    isBoss: true,
    canMindControl: false
  }
};

// Simple 25x25 map generation helper
const createEmptyMap = (w: number, h: number): TileType[][] => 
  Array(h).fill(null).map(() => Array(w).fill('FLOOR'));

const shibuyaTiles = createEmptyMap(25, 25);
// ... (rest of the map generation)
// Add some walls
for (let i = 0; i < 25; i++) {
  shibuyaTiles[0][i] = 'WALL';
  shibuyaTiles[24][i] = 'WALL';
  shibuyaTiles[i][0] = 'WALL';
  shibuyaTiles[i][24] = 'WALL';
}
// Buildings
for (let x = 2; x < 8; x++) {
  for (let y = 2; y < 8; y++) {
    shibuyaTiles[y][x] = 'WALL';
  }
}
for (let x = 16; x < 22; x++) {
  for (let y = 2; y < 10; y++) {
    shibuyaTiles[y][x] = 'WALL';
  }
}
for (let x = 8; x < 14; x++) {
  for (let y = 16; y < 22; y++) {
    shibuyaTiles[y][x] = 'WALL';
  }
}

shibuyaTiles[5][8] = 'NEON';
shibuyaTiles[9][18] = 'NEON';
shibuyaTiles[20][14] = 'WALL';
shibuyaTiles[20][15] = 'WALL';
shibuyaTiles[20][16] = 'NEON';
shibuyaTiles[24][12] = 'DOOR'; // Door to Blackwood

const blackwoodTiles = createEmptyMap(25, 25);
for (let i = 0; i < 25; i++) {
  blackwoodTiles[0][i] = 'WALL';
  blackwoodTiles[24][i] = 'WALL';
  blackwoodTiles[i][0] = 'WALL';
  blackwoodTiles[i][24] = 'WALL';
}
// Gothic pillars
for (let i = 2; i < 23; i += 4) {
  blackwoodTiles[4][i] = 'WALL';
  blackwoodTiles[20][i] = 'WALL';
}
blackwoodTiles[0][12] = 'DOOR'; // Door back to Shibuya
blackwoodTiles[12][24] = 'DOOR'; // Door to Penthouse
blackwoodTiles[24][12] = 'DOOR'; // Door to The Metaverse

const penthouseTiles = createEmptyMap(15, 15);
for (let i = 0; i < 15; i++) {
  penthouseTiles[0][i] = 'WALL';
  penthouseTiles[14][i] = 'WALL';
  penthouseTiles[i][0] = 'WALL';
  penthouseTiles[i][14] = 'WALL';
}
penthouseTiles[7][0] = 'DOOR'; // Door back to Blackwood

const metaverseTiles = createEmptyMap(20, 20);
for (let i = 0; i < 20; i++) {
  metaverseTiles[0][i] = 'WALL';
  metaverseTiles[19][i] = 'WALL';
  metaverseTiles[i][0] = 'WALL';
  metaverseTiles[i][19] = 'WALL';
}
metaverseTiles[0][10] = 'DOOR'; // Door back to Blackwood
metaverseTiles[19][10] = 'DOOR'; // Door to Hell

const hellTiles = createEmptyMap(25, 25);
for (let i = 0; i < 25; i++) {
  hellTiles[0][i] = 'WALL';
  hellTiles[24][i] = 'WALL';
  hellTiles[i][0] = 'WALL';
  hellTiles[i][24] = 'WALL';
}
for (let i = 5; i < 20; i++) {
  hellTiles[i][5] = 'NEON'; // Lava rivers
  hellTiles[i][19] = 'NEON';
}
hellTiles[0][12] = 'DOOR'; // Door back to Metaverse
hellTiles[24][12] = 'DOOR'; // Door to Nursery

const nurseryTiles = createEmptyMap(20, 20);
for (let i = 0; i < 20; i++) {
  nurseryTiles[0][i] = 'WALL';
  nurseryTiles[19][i] = 'WALL';
  nurseryTiles[i][0] = 'WALL';
  nurseryTiles[i][19] = 'WALL';
}
nurseryTiles[0][10] = 'DOOR'; // Door back to Hell
nurseryTiles[10][19] = 'DOOR'; // Door to Secret Lab

const secretLabTiles = createEmptyMap(15, 15);
for (let i = 0; i < 15; i++) {
  secretLabTiles[0][i] = 'WALL';
  secretLabTiles[14][i] = 'WALL';
  secretLabTiles[i][0] = 'WALL';
  secretLabTiles[i][14] = 'WALL';
}
secretLabTiles[0][7] = 'DOOR'; // Door back to Nursery

const shibuyaSkyTiles = createEmptyMap(15, 15);
for (let i = 0; i < 15; i++) {
  shibuyaSkyTiles[0][i] = 'WALL';
  shibuyaSkyTiles[14][i] = 'WALL';
  shibuyaSkyTiles[i][0] = 'WALL';
  shibuyaSkyTiles[i][14] = 'WALL';
}
shibuyaSkyTiles[14][7] = 'DOOR'; // Door back to Shibuya

const eighthCircleTiles = createEmptyMap(15, 15);
for (let i = 0; i < 15; i++) {
  eighthCircleTiles[0][i] = 'WALL';
  eighthCircleTiles[14][i] = 'WALL';
  eighthCircleTiles[i][0] = 'WALL';
  eighthCircleTiles[i][14] = 'WALL';
}
eighthCircleTiles[7][0] = 'DOOR'; // Door back to Shibuya

export const MAPS: Record<string, MapData> = {
  SHIBUYA: {
    id: 'SHIBUYA',
    name: 'Shibuya Crossing - Night',
    width: 25,
    height: 25,
    tiles: shibuyaTiles,
    startPos: { x: 12, y: 12 },
    enemies: [
      { pos: { x: 10, y: 14 }, enemyId: 'BOUNTY_HUNTER' },
      { pos: { x: 18, y: 18 }, enemyId: 'GUMMY_GOLEM' },
      { pos: { x: 22, y: 3 }, enemyId: 'SUGAR_RUSH' },
      { pos: { x: 3, y: 22 }, enemyId: 'FACELESS' },
      { pos: { x: 2, y: 10 }, enemyId: 'MASTER_ITAMAE' },
      { pos: { x: 22, y: 12 }, enemyId: 'ONI_CREW' },
      { pos: { x: 18, y: 22 }, enemyId: 'KANNAGI' },
      { pos: { x: 12, y: 5 }, enemyId: 'PSITRON' },
      { pos: { x: 5, y: 5 }, enemyId: 'FAMINE_BOSS' },
      { pos: { x: 15, y: 15 }, enemyId: 'GLITCH' },
      { pos: { x: 8, y: 8 }, enemyId: 'BOUNTY_HUNTER' },
      { pos: { x: 20, y: 5 }, enemyId: 'GUMMY_GOLEM' },
    ],
    npcs: [
      { pos: { x: 12, y: 10 }, dialogue: ['"I want fries. But I don\'t want to pay."', '"They charge extra for sauce now. That\'s criminal."'] },
      { pos: { x: 14, y: 16 }, dialogue: ['"The sky is turning purple..."', '"Is this the end?"'] },
      { pos: { x: 7, y: 12 }, dialogue: ['"Have you seen the new viral trend?"', '"#HorsemenChronicles is trending again."'] },
      { pos: { x: 22, y: 20 }, dialogue: ['"Did you hear about Blackwood University?"', '"They say the students there are... too friendly."'] },
      { pos: { x: 10, y: 20 }, dialogue: ['"I\'m Saul, your lawyer."', '"Technically, under the Bylaws of Occult Sanctuaries..."', '"You cannot kill me!"'] },
      { pos: { x: 5, y: 22 }, dialogue: ['"I\'m Mae."', '"The souls of the dead are a currency, and you... you are the vault."'] },
      { pos: { x: 11, y: 23 }, dialogue: ['"The door to Blackwood University is to the South."'] },
      { pos: { x: 1, y: 1 }, dialogue: ['"The true error lies deep within the Nursery."', '"Beyond the Eighth Circle, where the code itself begins to bleed."', '"That is where you will find the Golden One."'], isShop: true }
    ],
    doors: [
      { pos: { x: 12, y: 24 }, targetMap: 'BLACKWOOD', targetPos: { x: 12, y: 1 } },
      { pos: { x: 12, y: 0 }, targetMap: 'SHIBUYA_SKY', targetPos: { x: 7, y: 13 } },
      { pos: { x: 5, y: 5 }, targetMap: 'FAST_FOOD_JOINT', targetPos: { x: 5, y: 5 } },
      { pos: { x: 5, y: 6 }, targetMap: 'RAMEN_SHOP', targetPos: { x: 5, y: 5 } },
      { pos: { x: 10, y: 11 }, targetMap: 'GACHAPON_SHOP', targetPos: { x: 5, y: 5 } },
      { pos: { x: 24, y: 12 }, targetMap: 'EIGHTH_CIRCLE', targetPos: { x: 1, y: 5 } }
    ],
    collectibles: [
      { pos: { x: 2, y: 2 }, id: 'LORE_1', name: 'Lost Memory: The Fall', description: 'A fragment of a memory from before the sky turned purple.', type: 'LORE' },
      { pos: { x: 22, y: 22 }, id: 'STAT_1', name: 'Corrupted Data: HP Up', description: 'Increases Max HP by 10.', type: 'STAT_BOOST' },
      { pos: { x: 5, y: 18 }, id: 'STAT_6', name: 'Corrupted Data: Speed Up', description: 'Increases Speed by 5.', type: 'STAT_BOOST' },
      { pos: { x: 18, y: 5 }, id: 'STAT_7', name: 'Corrupted Data: Defense Up', description: 'Increases Defense by 5.', type: 'STAT_BOOST' }
    ]
  },
  SHIBUYA_SKY: {
    id: 'SHIBUYA_SKY',
    name: 'Shibuya Sky Observatory',
    width: 15,
    height: 15,
    tiles: shibuyaSkyTiles,
    startPos: { x: 7, y: 13 },
    enemies: [
      { pos: { x: 7, y: 7 }, enemyId: 'TOMBSTONE' },
      { pos: { x: 3, y: 3 }, enemyId: 'FORMALITY' },
      { pos: { x: 12, y: 12 }, enemyId: 'DEATH_BOSS' },
    ],
    npcs: [
      { pos: { x: 1, y: 1 }, dialogue: ['"The view from here is... final."', '"I can see the end from here."'] }
    ],
    doors: [
      { pos: { x: 7, y: 14 }, targetMap: 'SHIBUYA', targetPos: { x: 12, y: 1 } }
    ],
    collectibles: [
      { pos: { x: 13, y: 1 }, id: 'STAT_5', name: 'Corrupted Data: God Mode', description: 'Increases all stats significantly.', type: 'STAT_BOOST' }
    ]
  },
  BLACKWOOD: {
    id: 'BLACKWOOD',
    name: 'Blackwood University',
    width: 25,
    height: 25,
    tiles: blackwoodTiles,
    startPos: { x: 12, y: 1 },
    enemies: [
      { pos: { x: 12, y: 5 }, enemyId: 'MADISON' },
      { pos: { x: 5, y: 12 }, enemyId: 'PSITRON' },
      { pos: { x: 20, y: 12 }, enemyId: 'SILENCE' },
      { pos: { x: 15, y: 20 }, enemyId: 'PLAGUE_BOSS' },
      { pos: { x: 8, y: 8 }, enemyId: 'FACELESS' },
      { pos: { x: 18, y: 18 }, enemyId: 'BOUNTY_HUNTER' },
    ],
    npcs: [
      { pos: { x: 18, y: 8 }, dialogue: ['"Hi! Do you want to be best friends?"', '"Eat the cookie. Be happy. Join us."'] },
      { pos: { x: 8, y: 15 }, dialogue: ['"Pain is just love leaving the body!"'] },
      { pos: { x: 23, y: 11 }, dialogue: ['"The Penthouse is to the East."'] },
      { pos: { x: 11, y: 23 }, dialogue: ['"The Metaverse portal is to the South."'] }
    ],
    doors: [
      { pos: { x: 12, y: 0 }, targetMap: 'SHIBUYA', targetPos: { x: 12, y: 23 } },
      { pos: { x: 24, y: 12 }, targetMap: 'PENTHOUSE', targetPos: { x: 1, y: 7 } },
      { pos: { x: 12, y: 24 }, targetMap: 'THE_METAVERSE', targetPos: { x: 10, y: 1 } }
    ],
    collectibles: [
      { pos: { x: 2, y: 22 }, id: 'LORE_2', name: 'Lost Memory: The Cult', description: 'Notes detailing the rise of a strange cult on campus.', type: 'LORE' },
      { pos: { x: 22, y: 2 }, id: 'STAT_2', name: 'Corrupted Data: Attack Up', description: 'Increases Attack by 5.', type: 'STAT_BOOST' },
      { pos: { x: 5, y: 5 }, id: 'STAT_8', name: 'Corrupted Data: Energy Up', description: 'Increases Max Energy by 10.', type: 'STAT_BOOST' }
    ]
  },
  PENTHOUSE: {
    id: 'PENTHOUSE',
    name: 'The Penthouse',
    width: 15,
    height: 15,
    tiles: penthouseTiles,
    startPos: { x: 1, y: 7 },
    enemies: [
      { pos: { x: 10, y: 5 }, enemyId: 'LUX' },
      { pos: { x: 12, y: 5 }, enemyId: 'VELVETTE' },
      { pos: { x: 7, y: 2 }, enemyId: 'TOMBSTONE' },
      { pos: { x: 13, y: 13 }, enemyId: 'CONQUEST_BOSS' },
    ],
    npcs: [
      { pos: { x: 5, y: 7 }, dialogue: ['"I love it when you help me commit crimes against nature."'] },
      { pos: { x: 1, y: 6 }, dialogue: ['"Back to Blackwood University is to the West."'] }
    ],
    doors: [
      { pos: { x: 0, y: 7 }, targetMap: 'BLACKWOOD', targetPos: { x: 23, y: 12 } }
    ],
    collectibles: [
      { pos: { x: 13, y: 13 }, id: 'LORE_3', name: 'Lost Memory: High Society', description: 'A diary entry from a wealthy elite, oblivious to the end.', type: 'LORE' }
    ]
  },
  THE_METAVERSE: {
    id: 'THE_METAVERSE',
    name: 'The Metaverse',
    width: 20,
    height: 20,
    tiles: metaverseTiles,
    startPos: { x: 10, y: 1 },
    enemies: [
      { pos: { x: 10, y: 10 }, enemyId: 'GLITCH' },
      { pos: { x: 15, y: 5 }, enemyId: 'STRIFE_BOSS' },
    ],
    npcs: [
      { pos: { x: 5, y: 5 }, dialogue: ['"Welcome to my domain... mere mortals."', '"I am Admin_X_Overlord."'] },
      { pos: { x: 15, y: 15 }, dialogue: ['"The firewall dragon is broken!"'] },
      { pos: { x: 9, y: 18 }, dialogue: ['"The portal to Hell is to the South."'] }
    ],
    doors: [
      { pos: { x: 10, y: 0 }, targetMap: 'BLACKWOOD', targetPos: { x: 12, y: 23 } },
      { pos: { x: 10, y: 19 }, targetMap: 'HELL', targetPos: { x: 12, y: 1 } }
    ],
    collectibles: [
      { pos: { x: 2, y: 2 }, id: 'STAT_3', name: 'Corrupted Data: Energy Up', description: 'Increases Max Energy by 20.', type: 'STAT_BOOST' }
    ]
  },
  HELL: {
    id: 'HELL',
    name: 'The Eighth Circle - Hell',
    width: 25,
    height: 25,
    tiles: hellTiles,
    startPos: { x: 12, y: 1 },
    enemies: [
      { pos: { x: 12, y: 12 }, enemyId: 'ERI_VAUN' },
      { pos: { x: 15, y: 12 }, enemyId: 'JACKHAMMER' },
      { pos: { x: 5, y: 15 }, enemyId: 'WAR_BOSS' },
      { pos: { x: 18, y: 5 }, enemyId: 'BOUNTY_HUNTER' },
      { pos: { x: 2, y: 10 }, enemyId: 'GLITCH' },
    ],
    npcs: [
      { pos: { x: 8, y: 8 }, dialogue: ['"SHOT THROUGH THE HEART! AND YOU\'RE TO BLAME!"', '"YOU GIVE HELL... A BAD NAME!"'] },
      { pos: { x: 18, y: 18 }, dialogue: ['"RULE NUMBER ONE. NO FIGHTING UNLESS YOU PAY THE COVER CHARGE."'] },
      { pos: { x: 11, y: 23 }, dialogue: ['"The Nursery is to the South."'] }
    ],
    doors: [
      { pos: { x: 12, y: 0 }, targetMap: 'THE_METAVERSE', targetPos: { x: 10, y: 18 } },
      { pos: { x: 12, y: 24 }, targetMap: 'NURSERY', targetPos: { x: 10, y: 1 } }
    ],
    collectibles: [
      { pos: { x: 2, y: 22 }, id: 'LORE_4', name: 'Lost Memory: The Contract', description: 'A charred contract signed in blood.', type: 'LORE' },
      { pos: { x: 22, y: 5 }, id: 'STAT_9', name: 'Corrupted Data: Attack Up', description: 'Increases Attack by 5.', type: 'STAT_BOOST' }
    ]
  },
  NURSERY: {
    id: 'NURSERY',
    name: 'The Nursery',
    width: 20,
    height: 20,
    tiles: nurseryTiles,
    startPos: { x: 10, y: 1 },
    enemies: [
      { pos: { x: 5, y: 10 }, enemyId: 'HIMO' },
      { pos: { x: 15, y: 10 }, enemyId: 'GALACTIX' },
      { pos: { x: 10, y: 15 }, enemyId: 'ARCHITECT' },
    ],
    npcs: [
      { pos: { x: 10, y: 5 }, dialogue: ['"This is where anti-gods were forged as weapons for a war long forgotten."'] },
      { pos: { x: 5, y: 5 }, dialogue: ['"I didn\'t ask to be made."'] }
    ],
    doors: [
      { pos: { x: 10, y: 0 }, targetMap: 'HELL', targetPos: { x: 12, y: 23 } },
      { pos: { x: 10, y: 19 }, targetMap: 'SECRET_LAB', targetPos: { x: 7, y: 1 }, isLocked: true },
      { pos: { x: 19, y: 10 }, targetMap: 'THE_VOID', targetPos: { x: 10, y: 1 } }
    ],
    collectibles: [
      { pos: { x: 2, y: 2 }, id: 'STAT_4', name: 'Corrupted Data: Ultimate Power', description: 'Increases Attack by 10 and Max HP by 20.', type: 'STAT_BOOST' }
    ]
  },
  SECRET_LAB: {
    id: 'SECRET_LAB',
    name: 'Secret Lab',
    width: 15,
    height: 15,
    tiles: secretLabTiles,
    startPos: { x: 7, y: 1 },
    enemies: [
      { pos: { x: 7, y: 7 }, enemyId: 'THE_CREATOR' },
      { pos: { x: 3, y: 3 }, enemyId: 'VOID_STALKER' },
      { pos: { x: 11, y: 11 }, enemyId: 'CYBER_WOLF' }
    ],
    npcs: [
      { pos: { x: 1, y: 1 }, dialogue: ['"The experiments here... they were never meant to see the light."'] }
    ],
    doors: [
      { pos: { x: 7, y: 0 }, targetMap: 'NURSERY', targetPos: { x: 10, y: 18 } }
    ],
    collectibles: [
      { pos: { x: 13, y: 13 }, id: 'STAT_10', name: 'Corrupted Data: Godly Defense', description: 'Increases Defense by 50.', type: 'STAT_BOOST' }
    ]
  },
  FAST_FOOD_JOINT: {
    id: 'FAST_FOOD_JOINT',
    name: 'Fast Food Joint',
    width: 10,
    height: 10,
    tiles: createEmptyMap(10, 10),
    startPos: { x: 5, y: 5 },
    enemies: [{ pos: { x: 2, y: 2 }, enemyId: 'SHUN' }],
    npcs: [],
    doors: [{ pos: { x: 9, y: 5 }, targetMap: 'SHIBUYA', targetPos: { x: 12, y: 12 } }]
  },
  RAMEN_SHOP: {
    id: 'RAMEN_SHOP',
    name: 'Ramen Shop',
    width: 10,
    height: 10,
    tiles: createEmptyMap(10, 10),
    startPos: { x: 5, y: 5 },
    enemies: [{ pos: { x: 8, y: 8 }, enemyId: 'OLD_MAN' }],
    npcs: [],
    doors: [{ pos: { x: 0, y: 5 }, targetMap: 'SHIBUYA', targetPos: { x: 5, y: 5 } }]
  },
  GACHAPON_SHOP: {
    id: 'GACHAPON_SHOP',
    name: 'Gachapon Shop',
    width: 10,
    height: 10,
    tiles: createEmptyMap(10, 10),
    startPos: { x: 5, y: 5 },
    enemies: [{ pos: { x: 5, y: 5 }, enemyId: 'SUGAR_RUSH' }],
    npcs: [],
    doors: [{ pos: { x: 5, y: 9 }, targetMap: 'SHIBUYA', targetPos: { x: 10, y: 10 } }]
  },
  RESTRICTED_ARCHIVES: {
    id: 'RESTRICTED_ARCHIVES',
    name: 'Restricted Archives',
    width: 15,
    height: 15,
    tiles: createEmptyMap(15, 15),
    startPos: { x: 1, y: 1 },
    enemies: [],
    npcs: [
      { pos: { x: 7, y: 7 }, dialogue: ['"Don’t touch the red books! They bite!"', '"And don’t look at the blue ones, they contain the raw concept of calculus and will melt your brain!"'] }
    ],
    doors: [
      { pos: { x: 14, y: 7 }, targetMap: 'BLACKWOOD', targetPos: { x: 1, y: 1 } },
      { pos: { x: 7, y: 14 }, targetMap: 'THE_VOID', targetPos: { x: 5, y: 9 } }
    ],
    collectibles: []
  },
  THE_VOID: {
    id: 'THE_VOID',
    name: 'The Void',
    width: 11,
    height: 11,
    tiles: createEmptyMap(11, 11),
    startPos: { x: 5, y: 9 },
    enemies: [
      { pos: { x: 5, y: 2 }, enemyId: 'THE_CREATOR' }
    ],
    npcs: [],
    doors: [
      { pos: { x: 5, y: 10 }, targetMap: 'RESTRICTED_ARCHIVES', targetPos: { x: 7, y: 13 } },
      { pos: { x: 5, y: 0 }, targetMap: 'THE_NEXUS', targetPos: { x: 7, y: 1 } }
    ],
    collectibles: []
  },
  THE_NEXUS: {
    id: 'THE_NEXUS',
    name: 'The Nexus',
    width: 15,
    height: 15,
    tiles: createEmptyMap(15, 15),
    startPos: { x: 7, y: 1 },
    enemies: [{ pos: { x: 7, y: 7 }, enemyId: 'TOMBSTONE' }],
    npcs: [],
    doors: [
      { pos: { x: 7, y: 0 }, targetMap: 'THE_VOID', targetPos: { x: 5, y: 9 } },
      { pos: { x: 7, y: 14 }, targetMap: 'BROKEN_WORLD', targetPos: { x: 7, y: 1 } }
    ],
    collectibles: []
  },
  BROKEN_WORLD: {
    id: 'BROKEN_WORLD',
    name: 'Broken World',
    width: 15,
    height: 15,
    tiles: createEmptyMap(15, 15),
    startPos: { x: 7, y: 1 },
    enemies: [{ pos: { x: 7, y: 7 }, enemyId: 'GALACTIX' }],
    npcs: [],
    doors: [
      { pos: { x: 7, y: 0 }, targetMap: 'THE_NEXUS', targetPos: { x: 7, y: 13 } },
      { pos: { x: 7, y: 14 }, targetMap: 'THE_GRAY_ABYSS', targetPos: { x: 7, y: 1 } }
    ],
    collectibles: []
  },
  THE_GRAY_ABYSS: {
    id: 'THE_GRAY_ABYSS',
    name: 'The Gray Abyss',
    width: 15,
    height: 15,
    tiles: createEmptyMap(15, 15),
    startPos: { x: 7, y: 1 },
    enemies: [{ pos: { x: 5, y: 7 }, enemyId: 'HYPNAIO' }, { pos: { x: 9, y: 7 }, enemyId: 'DEIUS' }],
    npcs: [],
    doors: [
      { pos: { x: 7, y: 0 }, targetMap: 'BROKEN_WORLD', targetPos: { x: 7, y: 13 } },
      { pos: { x: 7, y: 14 }, targetMap: 'COLLAPSED_HELL', targetPos: { x: 7, y: 1 } }
    ],
    collectibles: []
  },
  COLLAPSED_HELL: {
    id: 'COLLAPSED_HELL',
    name: 'Collapsed Hell',
    width: 15,
    height: 15,
    tiles: createEmptyMap(15, 15),
    startPos: { x: 7, y: 1 },
    enemies: [{ pos: { x: 7, y: 7 }, enemyId: 'CHIMERA' }],
    npcs: [],
    doors: [
      { pos: { x: 7, y: 0 }, targetMap: 'THE_GRAY_ABYSS', targetPos: { x: 7, y: 13 } },
      { pos: { x: 7, y: 14 }, targetMap: 'SAVA_IOIYN_NURSIO', targetPos: { x: 7, y: 1 } }
    ],
    collectibles: []
  },
  SAVA_IOIYN_NURSIO: {
    id: 'SAVA_IOIYN_NURSIO',
    name: 'Sava Ioiyn Nursio',
    width: 15,
    height: 15,
    tiles: createEmptyMap(15, 15),
    startPos: { x: 7, y: 1 },
    enemies: [{ pos: { x: 4, y: 7 }, enemyId: 'SIREN' }, { pos: { x: 10, y: 7 }, enemyId: 'HIMO' }],
    npcs: [],
    doors: [
      { pos: { x: 7, y: 0 }, targetMap: 'COLLAPSED_HELL', targetPos: { x: 7, y: 13 } },
      { pos: { x: 7, y: 14 }, targetMap: 'SHANGRI_LA', targetPos: { x: 7, y: 1 }, isLocked: true }
    ],
    collectibles: []
  },
  THE_NURSERY: {
    id: 'THE_NURSERY',
    name: 'The Nursery',
    width: 20,
    height: 20,
    tiles: createEmptyMap(20, 20),
    startPos: { x: 10, y: 18 },
    enemies: [
      { pos: { x: 5, y: 5 }, enemyId: 'SIREN' },
      { pos: { x: 15, y: 15 }, enemyId: 'FACELESS' }
    ],
    npcs: [{ pos: { x: 10, y: 10 }, dialogue: ['"Welcome to your birthplace."', '"You were never meant to be free."'] }],
    doors: [
      { pos: { x: 10, y: 19 }, targetMap: 'SHIBUYA_STREET', targetPos: { x: 12, y: 1 } },
      { pos: { x: 10, y: 0 }, targetMap: 'ARCHITECT_DOMAIN', targetPos: { x: 10, y: 18 } }
    ],
    collectibles: [
      { pos: { x: 2, y: 2 }, id: 'LORE_1', name: 'The Prophecy', description: 'A dusty scroll detailing the end.', type: 'LORE' }
    ]
  },
  ARCHITECT_DOMAIN: {
    id: 'ARCHITECT_DOMAIN',
    name: "Architect's Domain",
    width: 25,
    height: 25,
    tiles: createEmptyMap(25, 25),
    startPos: { x: 12, y: 22 },
    enemies: [
      { pos: { x: 12, y: 5 }, enemyId: 'ARCHITECT' }
    ],
    npcs: [],
    doors: [
      { pos: { x: 12, y: 24 }, targetMap: 'THE_NURSERY', targetPos: { x: 10, y: 1 } }
    ],
    collectibles: [
      { pos: { x: 1, y: 1 }, id: 'GOD_SLAYER', name: 'God Slayer Sword', description: 'A blade that cuts through reality.', type: 'STAT_BOOST' }
    ]
  },
  EIGHTH_CIRCLE: {
    id: 'EIGHTH_CIRCLE',
    name: 'The Eighth Circle - Karaoke & Grill',
    width: 15,
    height: 15,
    tiles: eighthCircleTiles,
    startPos: { x: 1, y: 7 },
    enemies: [
      { pos: { x: 7, y: 7 }, enemyId: 'ERI_VAUN' },
      { pos: { x: 10, y: 10 }, enemyId: 'JACKHAMMER' }
    ],
    npcs: [
      { pos: { x: 5, y: 5 }, dialogue: ['"Welcome to the Eighth Circle. Sing or die."'], isShop: true }
    ],
    doors: [
      { pos: { x: 0, y: 7 }, targetMap: 'SHIBUYA', targetPos: { x: 23, y: 12 } }
    ],
    collectibles: [
      { pos: { x: 13, y: 13 }, id: 'LORE_5', name: 'Lost Memory: The Song', description: 'A lyric sheet for a song that sounds like hellfire.', type: 'LORE' }
    ]
  }
};
