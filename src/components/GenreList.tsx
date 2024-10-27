import { Button, Heading, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import getCroppedImageurl from '../services/image-url';
import useGameQueryStore from '../store';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading marginBottom={4}>Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY='8px'>
            <HStack>
              <Image boxSize='32px' borderRadius={8} src={getCroppedImageurl(genre.image_background)} objectFit='cover' />
              <Button
                whiteSpace='normal'
                textAlign='left'
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                onClick={() => setSelectedGenreId(genre.id)}
                variant='link'
                fontSize='large'>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
