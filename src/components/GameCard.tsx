import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"

interface GameProps {
  game: Game
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="lg">{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
