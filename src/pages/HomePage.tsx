import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import ColorModeSwitch from '../components/ColorModeSwitch';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SearchInput from '../components/SearchInput';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <Grid
      padding='10px'
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}>
      <Show above='lg'>
        <GridItem
          area='aside'
          paddingX='5px'>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack
          align='center'
          justify='space-between'>
          <GameHeading />
          <ColorModeSwitch />
        </HStack>
        <HStack
          gap={4}
          paddingLeft={2}
          marginBottom={2}
          marginTop={4}>
          <SearchInput />
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
