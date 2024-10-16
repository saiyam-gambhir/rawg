import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import getCroppedImageurl from "../services/image-url"
import useGenres, { Genre } from "../hooks/useGenres"

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if(error) return null;

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Heading marginBottom={4}>Genres</Heading>
      <List>
        {data?.results.map(genre => <ListItem key={genre.id} paddingY='8px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageurl(genre.image_background)} objectFit="cover" />
            <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant="link" fontSize='large'>{genre.name}</Button>
          </HStack>
        </ListItem>)}
      </List>
    </>
  )
}

export default GenreList
