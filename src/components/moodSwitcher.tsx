"use client";

import { useMood } from "@/context/moodContext";
import { moodThemes } from "@/lib/logo/moodThemes";

export default function MoodSwitcher() {
  const { mood, setMood } = useMood();

  const moods = Object.keys(moodThemes) as (keyof typeof moodThemes)[];

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {moods.map((m) => (
        <button
          key={m}
          onClick={() => setMood(m)}
          className={`px-4 py-2 rounded shadow-md transition-all duration-200 ${
            mood === m ? "bg-white border border-black" : "bg-gray-200"
          }`}
        >
          {moodThemes[m].emoji} {m.charAt(0).toUpperCase() + m.slice(1)}
        </button>
      ))}
    </div>
  );
}
