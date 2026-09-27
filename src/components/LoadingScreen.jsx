import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState();
  const [progress, setProgress] = useState(0);
  const fullText = "Loading vite app...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      setProgress((index / fullText.length) * 100);
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center px-4">
      {/* invisible full text reserves the width so typing doesn't shift the line */}
      <div className="mb-4 grid text-2xl sm:text-4xl font-mono font-bold whitespace-nowrap">
        <span className="invisible col-start-1 row-start-1" aria-hidden="true">
          {fullText}
          <span className="ml-1"> | </span>
        </span>
        <span className="col-start-1 row-start-1">
          {text}
          <span className="animate-blink ml-1"> | </span>
        </span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div
          className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
