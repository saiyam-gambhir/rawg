import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SearchInput from './components/SearchInput';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import ColorModeSwitch from './components/ColorModeSwitch';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  searchText: string;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      padding="10px"
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <Show above="lg">
        <GridItem
          area="aside"
          paddingX="5px"
        >
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack
          align="center"
          justify="space-between"
        >
          <GameHeading gameQuery={gameQuery} />
          <ColorModeSwitch />
        </HStack>
        <HStack
          gap={4}
          paddingLeft={2}
          marginBottom={2}
          marginTop={4}
        >
          <SearchInput onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platformId: platform.id })}
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
