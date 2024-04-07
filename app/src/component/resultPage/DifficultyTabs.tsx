// components/TabsComponent.tsx
import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

interface TabsComponentProps {
  difficultyValue: number;
  handleChange: (event: React.SyntheticEvent<Element, Event>, newValue: number) => void;
}

const DifficultyTabs: React.FC<TabsComponentProps> = ({ difficultyValue, handleChange }) => {
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={difficultyValue}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{
          '& .MuiTab-root': {
            color: 'white',
          },
        }}
      >
        <Tab label="☆9↓" {...a11yProps(0)} />
        <Tab label="☆10" {...a11yProps(1)} />
        <Tab label="☆11" {...a11yProps(2)} />
        <Tab label="☆12" {...a11yProps(3)} />
        <Tab label="GRANDMASTER" {...a11yProps(4)} />
      </Tabs>
    </Box>
  );
};

export default DifficultyTabs;