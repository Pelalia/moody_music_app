"use client";

import { useMood } from "@/context/moodContext";
import { moodThemes } from "@/lib/logo/moodThemes";
import { motion } from "framer-motion";

export default function Logo() {
  const { mood } = useMood();
  const emoji = moodThemes[mood].emoji;

  return (
    <h1 className="text-4xl font-bold flex items-center">
      <span>M</span>
      <motion.span
        key={emoji}
        initial={{ scale: 0, rotate: -45, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="inline-block"
      >
        {emoji}
      </motion.span>
      <motion.span
        key={emoji + "-2"}
        initial={{ scale: 0, rotate: 45, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        className="inline-block"
      >
        {emoji}
      </motion.span>
      <span>DY</span>
    </h1>
  );
}
