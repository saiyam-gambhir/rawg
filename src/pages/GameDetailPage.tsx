import { Box, Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTralier from '../components/GameTralier';
import GameScreenShots from '../components/GameScreenShots';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!); // this constant will never be null

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTralier gameId={game.id} />
      <GameScreenShots gameId={game.id} />
    </Box>
  );
};

export default GameDetailPage;
