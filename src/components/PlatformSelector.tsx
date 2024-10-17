import { BsChevronBarDown } from "react-icons/bs"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { Platform } from "../hooks/usePlatforms"
import usePlatforms from "../hooks/usePlatforms"
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();

  if(error) return null;

  const selectedPlatform = usePlatform(selectedPlatformId);

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          { selectedPlatform?.name || 'Platforms' }
        </MenuButton>
        <MenuList>
          {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
      </Menu>
    </div>
  )
}

export default PlatformSelector
