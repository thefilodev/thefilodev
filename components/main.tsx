"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import Header from "@/components/header";
import JapanEfficientMoving from "@/components/japan-efficient-moving";

export default function Main() {
  const [ticks, setTicks] = useState({
    japanEfficientMovingDialogOpen: false,
  })

  return (
    <main className="relative flex-1 bg-background">
      <Header />

      <div className="h-[9000px]" />

      <div className={cn("absolute inset-0 hidden", ticks.japanEfficientMovingDialogOpen && "flex items-center justify-center")}>
        <JapanEfficientMoving />
      </div>
    </main>
  );
}