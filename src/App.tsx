import React from 'react';
import { GameProvider, useGame } from './game/GameEngine';
import { TitleScreen } from './components/TitleScreen';
import { CharacterSelect } from './components/CharacterSelect';
import { Overworld } from './components/Overworld';
import { Combat } from './components/Combat';
import { DialogueBox } from './components/DialogueBox';
import { GameOver } from './components/GameOver';
import { Shop } from './components/Shop';
import { Inventory } from './components/Inventory';
import { Cutscene } from './components/Cutscene';
import { SkillTree } from './components/SkillTree';

const GameContainer = () => {
  const { gameState } = useGame();

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden select-none">
      {gameState === 'TITLE' && <TitleScreen />}
      {gameState === 'CHARACTER_SELECT' && <CharacterSelect />}
      {(gameState === 'OVERWORLD' || gameState === 'DIALOGUE') && <Overworld />}
      {gameState === 'COMBAT' && <Combat />}
      {gameState === 'GAME_OVER' && <GameOver />}
      {gameState === 'SHOP' && <Shop />}
      {gameState === 'INVENTORY' && <Inventory />}
      {gameState === 'CUTSCENE' && <Cutscene />}
      {gameState === 'SKILL_TREE' && <SkillTree />}
      
      {gameState === 'DIALOGUE' && <DialogueBox />}
    </div>
  );
};

export default function App() {
  return (
    <GameProvider>
      <GameContainer />
    </GameProvider>
  );
}
