// src/components/layout/Header.tsx

import { Mood } from "@/lib/logo/moodThemes";
import Logo from "../logo/logo";



export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <Logo />
      {/* Add mood switcher or nav links here */}
    </header>
  );
}
