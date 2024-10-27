import { BsChevronBarDown } from 'react-icons/bs';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import useGameQueryStore from '../store';

const SortSelector = () => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronBarDown />}>
          Order By - {currentSortOrder?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => setSelectedSortOrder(order.value)}
              key={order.value}
              value={order.value}>
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortSelector;
