"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const HIGH_INTENSITY_SECONDS = 3 * 60;
const LOW_INTENSITY_SECONDS = 3 * 60;
const TOTAL_ROUNDS = 5;

export default function JapanEfficientMoving() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentState, setCurrentState] = useState({
    phase: "WALK",
    round: 1,
    time: LOW_INTENSITY_SECONDS
  });

  const playSound = (type: string) => {
    const audio = new Audio(`/sound/${type}.mp3`);
    audio.play();
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCurrentState((prev) => {
        if (prev.time <= 1) {
          if (prev.round <= TOTAL_ROUNDS) {
            if (prev.phase !== "RUN") {
              playSound("run");
              return {
                ...prev,
                phase: "RUN",
                time: HIGH_INTENSITY_SECONDS
              }
            } else {
              if (prev.round == TOTAL_ROUNDS) {
                clearInterval(interval);
                setIsRunning(false);
                return {
                  ...prev,
                  time: 0
                };
              }
              playSound("walk");
              return {
                ...prev,
                round: prev.round + 1,
                phase: "WALK",
                time: LOW_INTENSITY_SECONDS
              }
            }
          }

          clearInterval(interval);
          setIsRunning(false);
          return {
            ...prev,
            time: 0
          };
        }
        return {
          ...prev,
          time: prev.time - 1
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(
      s % 60
    ).padStart(2, "0")}`;

  const handleReset = () => {
    setIsRunning(false);
    setCurrentState({
      phase: "WALK",
      round: 1,
      time: LOW_INTENSITY_SECONDS
    });
  }

  return (
    <div className="p-3">
      <div className="p-3 border-3 border-gray-900 dark:border-zinc-50 flex flex-col items-center gap-3">
        <div className="text-sm font-medium">
          Round {currentState.round}/{TOTAL_ROUNDS}
        </div>

        <div className="font-bold text-7xl tabular-nums">
          {formatTime(currentState.time)}
        </div>

        <div
          className={`font-bold text-5xl ${currentState.phase === "RUN"
            ? "text-green-600"
            : "text-blue-600"
            }`}
        >
          {!isRunning ? "DONE" : currentState.phase}
        </div>

        <div className="flex gap-2">
          <Button
            className="h-10 px-6 text-lg"
            onClick={() => {
              playSound("walk");
              handleReset();
              setIsRunning(true);
            }}
            disabled={isRunning}
          >
            Start
          </Button>

          <Button
            variant="outline"
            className="h-10 px-6 text-lg"
            onClick={() => {
              handleReset();
            }}
          >
            Reset
          </Button>
        </div>
      </div>
    </div >
  );
}