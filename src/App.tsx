import { Genre } from "./hooks/useGenres"
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import { Platform } from "./hooks/usePlatforms"
import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import PlatformSelector from "./components/PlatformSelector"
import SearchInput from "./components/SearchInput"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"
import ColorModeSwitch from "./components/ColorModeSwitch"

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid padding="10px" templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack align="center" justify="space-between">
          <GameHeading gameQuery={gameQuery} />
          <ColorModeSwitch />
        </HStack>
        <HStack gap={4} paddingLeft={2} marginBottom={2} marginTop={4}>
          <SearchInput onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
