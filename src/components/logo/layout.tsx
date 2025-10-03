'use client';
import { useMood } from "@/context/moodContext";
import { moodThemes } from "@/lib/logo/moodThemes";
import Header from "../header/header";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const { mood } = useMood();
  const theme = moodThemes[mood];

  return (
    <div
      className={`min-h-screen ${theme.bg} ${theme.text} transition-all duration-300`}
    >
      <Header />
      <main className="p-6">{children}</main>
    </div>
  );
}
