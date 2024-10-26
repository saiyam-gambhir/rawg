import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../entities/Game';
import CriticScore from './CriticScore';
import getCroppedImageurl from '../services/image-url';
import PlatformIconList from './PlatformIconList';
import { Link } from 'react-router-dom';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={'/games/' + game.slug}>
      <Card>
        <Image src={getCroppedImageurl(game.background_image)}></Image>
        <CardBody>
          <HStack
            justify="space-between"
            marginBottom={2}
          >
            <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform)}></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="lg">{game.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
