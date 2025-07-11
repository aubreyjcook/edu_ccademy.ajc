'use client'
import React, { useState } from 'react'
import BackgroundManager from './BackgroundManager';

export default function ThemeSwitch() {
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  return (
  <>
    <BackgroundManager light={!isNightMode} />
    <button onClick={() => setIsNightMode(!isNightMode)})>
        {isNightMode ? 'Switch to Day Mode': 'Switch to Night Mode'} 
    </button>
  </>
  );
}

