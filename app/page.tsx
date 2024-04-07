"use client";

import React from "react";
import ResultPage from "./src/component/ResultPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <ResultPage />
    </main>
  );
}
