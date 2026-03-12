import React, { useState, useEffect } from 'react';
import { useGame } from '../game/GameEngine';
import { motion, AnimatePresence } from 'motion/react';

export const Cutscene = () => {
  const { dialogue, clearDialogue, setGameState } = useGame();
  const [index, setIndex] = useState(0);

  if (!dialogue || dialogue.length === 0) return null;

  const handleNext = () => {
    if (index < dialogue.length - 1) {
      setIndex(index + 1);
    } else {
      clearDialogue();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white p-8 font-pixel overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl w-full text-center"
        >
          <p className="text-2xl md:text-3xl leading-relaxed mb-12 text-gray-200 drop-shadow-[0_2px_2px_rgba(255,0,0,0.5)]">
            {dialogue[index]}
          </p>
        </motion.div>
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleNext}
        className="mt-8 px-8 py-3 bg-red-900/50 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all uppercase tracking-widest text-sm"
      >
        {index === dialogue.length - 1 ? 'CONTINUE' : 'NEXT'}
      </motion.button>

      <div className="absolute bottom-4 right-4 text-[10px] text-gray-600 uppercase tracking-tighter">
        Horsemen Chronicles | Episode One
      </div>
    </div>
  );
};
