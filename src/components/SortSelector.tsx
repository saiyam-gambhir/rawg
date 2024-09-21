import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronBarDown } from "react-icons/bs"

const SortSelector = () => {

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          Order By -
        </MenuButton>
        <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}

export default SortSelector
