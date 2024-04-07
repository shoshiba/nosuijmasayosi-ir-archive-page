import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface SidebarProps {
  tournaments: string[];
  onSelect: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ tournaments, onSelect }) => {
  return (
    <List>
      {tournaments.map((tournament, index) => (
        <ListItem button key={index} onClick={() => onSelect(index)}>
          <ListItemText primary={tournament} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;