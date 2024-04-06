"use client";

import React, { useState, useEffect } from "react";
import { parseCsv } from "./src/util/parseCsv";
import DataTable from "./src/component/DataTable";
import { Box, Tabs, Tab } from "@mui/material";

import Typography from "@mui/material/Typography";

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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const columnsGrandMaster = [
  { Header: "JYUNI", accessor: "JYUNI" },
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

export default function Home() {
  const [data, setData] = useState([]);

  const [difficultyValue, setdifficultyValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setdifficultyValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await parseCsv("/csv/gm_result.csv");
      console.log(result);
      setData(result);
    };
    fetchData();
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={difficultyValue}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="☆9↓" {...a11yProps(0)} />
          <Tab label="☆10" {...a11yProps(1)} />
          <Tab label="☆11" {...a11yProps(2)} />
          <Tab label="☆12" {...a11yProps(3)} />
          <Tab label="GRANDMASTER" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={difficultyValue} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={difficultyValue} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={difficultyValue} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={difficultyValue} index={3}>
        Item Four
      </CustomTabPanel>
      <CustomTabPanel value={difficultyValue} index={4}>
        <DataTable columns={columnsGrandMaster} data={data} />
      </CustomTabPanel>
    </main>
  );
}
