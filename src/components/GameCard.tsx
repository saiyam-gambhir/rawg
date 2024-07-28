import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageurl from "../services/image-url"

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageurl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
        <HStack justify="space-between">
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
