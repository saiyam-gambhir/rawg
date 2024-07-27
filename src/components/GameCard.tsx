import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageurl from "../services/image-url"

interface GameProps {
  game: Game
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
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
