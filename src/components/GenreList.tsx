import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageurl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if(error) return null;

  if(isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='8px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageurl(genre.image_background)} />
            <Button onClick={() => onSelectGenre(genre)} variant="link" fontSize='large'>{genre.name}</Button>
          </HStack>
        </ListItem>)}
      </List>
    </div>
  )
}

export default GenreList
