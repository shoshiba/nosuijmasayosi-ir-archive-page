'use client'

import React from 'react';
import { Paper, Tabs, Tab, Box } from '@mui/material'
import { makeStyles } from '@mui/material';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

// 追加
const TabPanel = (props) => {
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
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}


const CenteredTabs = (props) => {
const classes = useStyles();
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

return (
  <div>
      <Paper className={classes.root}>
          <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
          >
              {props.labels.map(label => <Tab label={label}></Tab>)} {/* さっきの */}
          </Tabs>
      </Paper>



      {/* 追加 */}
      {props.children.map((child, index) => 
          <TabPanel value={value} index={index}>{child}</TabPanel>)
      }
  </div>
);
}

export default CenteredTabs