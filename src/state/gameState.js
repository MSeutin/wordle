// Contains the core state of the game, possibly utilizing React's useState or useReducer for more complex state logic.

import React, { useState, useEffect } from 'react';
import { useGameState } from './useGameState';
import wordList from '../data/data';

export function getRandomWord() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

