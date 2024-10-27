import { SimpleGrid, Text } from '@chakra-ui/react';
import CriticScore from './CriticScore';
import DefinationItem from './DefinationItem';
import { Game } from '../entities/Game';

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid
      columns={2}
      as="dl"
    >
      <DefinationItem term="Platform">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationItem>

      <DefinationItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinationItem>

      <DefinationItem term="Genre">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinationItem>

      <DefinationItem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinationItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
