"use client";

import React, { useState, useEffect } from "react";
import { parseCsv } from "./src/util/parseCsv";
import { Box, Tabs, Tab } from "@mui/material";
import ResultPage from "./src/component/resultPage/ResultPage";

import Typography from "@mui/material/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ResultPage />
    </main>
  );
}
