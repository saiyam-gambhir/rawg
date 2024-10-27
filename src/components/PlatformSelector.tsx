import { BsChevronBarDown } from 'react-icons/bs';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import useGameQueryStore from '../store';
import usePlatform from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;

  const selectedPlatform = usePlatform(selectedPlatformId);

  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronBarDown />}>
          {selectedPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
            <MenuItem
              onClick={() => setSelectedPlatformId(platform.id)}
              key={platform.id}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformSelector;
