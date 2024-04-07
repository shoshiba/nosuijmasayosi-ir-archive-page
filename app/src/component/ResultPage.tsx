"use client";

import React, { useState, useEffect } from "react";
import { parseCsv } from "../util/parseCsv";
import { generateCsvPath } from "../service/generateCsvPath";
import DataTable from "./resultPage/DataTable";
import DifficultyTabs from "./resultPage/DifficultyTabs";
import { Box, Container } from "@mui/material";
import Sidebar from "./common/Sidebar";
import Typography from "@mui/material/Typography";
import DetailTournament from "./resultPage/DetailTournament";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const columnsScore = [
  { Header: "順位", accessor: "JYUNI" },
  { Header: "PLAYER NAME", accessor: "PLAYER NAME" },
  { Header: "SCORE", accessor: "SCORE" },
  { Header: "RATE", accessor: "RATE" },
  { Header: "RANK", accessor: "RANK" },
  { Header: "RANK+", accessor: "RANK+" },
  { Header: "NEXT", accessor: "NEXT" },
  { Header: "LEFT", accessor: "LEFT" },
  { Header: "RIGHT", accessor: "RIGHT" },
  { Header: "FLIP", accessor: "FLIP" },
  { Header: "Platform", accessor: "Platform" },
];

const columnsGrandMaster = [
  { Header: "順位", accessor: "JYUNI" },
  { Header: "PLAYER NAME", accessor: "PLAYER NAME" },
  { Header: "☆9↓", accessor: "☆9↓" },
  { Header: "☆10", accessor: "☆10" },
  { Header: "☆11", accessor: "☆11" },
  { Header: "☆12", accessor: "☆12" },
  { Header: "TOTAL", accessor: "TOTAL" },
  { Header: "RATE", accessor: "RATE" },
  { Header: "RANK", accessor: "RANK" },
  { Header: "RANK+", accessor: "RANK+" },
  { Header: "NEXT", accessor: "NEXT" },
];

const csvFiles = [
  "/csv/11/9_result.csv",
  "/csv/11/10_result.csv",
  "/csv/11/11_result.csv",
  "/csv/11/12_result.csv",
  "/csv/11/gm_result.csv",
];

const tournaments = [
  "第1回",
  "第2回",
  "第3回",
  "第4回",
  "第5回",
  "第6回",
  "第7回",
  "第8回",
  "第8.5回",
  "第9回",
  "第10回",
  "第11回",
];

export default function ResultPage() {
  const [data, setData] = useState([]);
  const [difficultyValue, setdifficultyValue] = React.useState(0);
  const [tournamentNumber, setTournamentNumber] = useState(0);

  const handleSelectTournament = (index: number) => {
    setTournamentNumber(index);
    // ここで選択された大会のデータを取得するロジックを追加
  };

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await parseCsv(
        generateCsvPath(tournamentNumber, difficultyValue)
      );
      console.log(result);
      setData(result);
    };
    fetchData();
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <Sidebar
            tournaments={tournaments}
            onSelect={handleSelectTournament}
          />
        </Box>
        <Box>
          <DetailTournament />
          <DifficultyTabs
            difficultyValue={difficultyValue}
            handleChange={(event, newValue) => setdifficultyValue(newValue)}
          />
          <CustomTabPanel value={difficultyValue} index={0}>
            <DataTable columns={columnsScore} data={data} />
          </CustomTabPanel>
          <CustomTabPanel value={difficultyValue} index={1}>
            <DataTable columns={columnsScore} data={data} />
          </CustomTabPanel>
          <CustomTabPanel value={difficultyValue} index={2}>
            <DataTable columns={columnsScore} data={data} />
          </CustomTabPanel>
          <CustomTabPanel value={difficultyValue} index={3}>
            <DataTable columns={columnsScore} data={data} />
          </CustomTabPanel>
          <CustomTabPanel value={difficultyValue} index={4}>
            <DataTable columns={columnsGrandMaster} data={data} />
          </CustomTabPanel>
        </Box>
      </Container>
    </main>
  );
}
