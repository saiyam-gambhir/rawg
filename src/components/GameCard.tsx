import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"

interface GameProps {
  game: Game
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </CardBody>
    </Card>
  )
}

export default GameCard