import React ,{ useState }from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface SidebarProps {
  tournaments: string[];
  onSelect: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ tournaments, onSelect }) => {
  const [activeItemId, setActiveItemId] = useState(11);
  return (
    <List>
      {tournaments.map((tournament, index) => (
        <ListItem
        key={index}
        className={`${activeItemId===index ? `bg-blue-500` : ''}`}
        button key={index} onClick={() => {onSelect(index); setActiveItemId(index)}}>
          <ListItemText primary={tournament} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;