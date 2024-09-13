import { Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if(error) return null;

  if(isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>
    </div>
  )
}

export default GenreList
