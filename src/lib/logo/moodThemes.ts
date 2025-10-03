export type Mood = 'happy' | 'sad' | 'angry' | 'neutral' | 'calm';

export const moodThemes: Record<
  Mood,
  {
    emoji: string;
    bg: string;
    text: string;
  }
> = {
  happy: { emoji: "😄", bg: "bg-yellow-100", text: "text-yellow-800" },
  sad: { emoji: "😢", bg: "bg-blue-100", text: "text-blue-800" },
  angry: { emoji: "😠", bg: "bg-red-100", text: "text-red-800" },
  calm: { emoji: "😌", bg: "bg-green-100", text: "text-green-800" },
  neutral: { emoji: "🙂", bg: "bg-gray-100", text: "text-gray-800" },
};