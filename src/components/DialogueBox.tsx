import React, { useState, useEffect } from 'react';
import { useGame } from '../game/GameEngine';

export const DialogueBox = () => {
  const { dialogue, clearDialogue, currentEnemy, setGameState } = useGame();
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!dialogue || dialogue.length === 0) return;
    
    const fullText = dialogue[lineIndex];
    let charIndex = 0;
    
    const interval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [lineIndex, dialogue]);

  if (!dialogue || dialogue.length === 0) return null;

  const handleNext = () => {
    if (displayedText.length < dialogue[lineIndex].length) {
      // Skip typing animation
      setDisplayedText(dialogue[lineIndex]);
    } else if (lineIndex < dialogue.length - 1) {
      setLineIndex(prev => prev + 1);
      setDisplayedText('');
    } else {
      // End of dialogue
      if (currentEnemy) {
        // If we were talking to an enemy, start combat
        setGameState('COMBAT');
      } else {
        clearDialogue();
      }
    }
  };

  return (
    <div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl bg-black border-4 border-white p-6 font-retro text-2xl text-white crt z-50 cursor-pointer"
      onClick={handleNext}
    >
      <p>{displayedText}</p>
      {displayedText.length === dialogue[lineIndex].length && (
        <div className="absolute bottom-4 right-4 animate-bounce">▼</div>
      )}
    </div>
  );
};
