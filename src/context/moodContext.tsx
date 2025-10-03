'use client';
import { Mood } from "@/lib/logo/moodThemes";
import { createContext, useContext, useState } from "react";

const MoodContext = createContext<{ mood: Mood; setMood: (m: Mood) => void}>({
  mood: 'neutral',
  setMood: () => {},
});

export const MoodProvider = ({ children }: { children: React.ReactNode }) => { 
    const [mood, setMood] = useState<Mood>('neutral');
    return <MoodContext.Provider value={{ mood, setMood }}>{children}</MoodContext.Provider>
}

export const useMood = () => useContext(MoodContext);