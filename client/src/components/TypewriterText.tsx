import { useEffect, useState } from "react";

interface TypewriterTextProps {
  items: string[];
  speed?: number;
  pause?: number;
  loop?: boolean;
  className?: string;
}

export default function TypewriterText({
  items,
  speed = 100,
  pause = 2000,
  loop = true,
  className = "",
}: TypewriterTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Find the longest phrase to reserve space
  const longestPhrase = items.reduce(
    (a, b) => (a.length > b.length ? a : b),
    ""
  );

  useEffect(() => {
    const currentPhrase = items[phraseIndex];
    const typingSpeed = isDeleting ? speed / 2 : speed;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        if (!loop && phraseIndex === items.length - 1) return;
        setTimeout(() => setIsDeleting(true), pause);
        return;
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % items.length);
        return;
      }

      setText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentPhrase.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, items, speed, pause, loop]);

  return (
    <span className={`block relative ${className}`}>
      {/* Ghost element for stable height */}
      <span className="invisible" aria-hidden="true">
        {longestPhrase}
      </span>
      <span className="absolute top-0 left-0 w-full">
        {text}
        <span className="animate-pulse text-primary">|</span>
      </span>
    </span>
  );
}
