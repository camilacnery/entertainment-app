import type { GetStaticProps, NextPage } from "next";
import MoviePage from "../../src/components/pages/Movie";
import { TMovie } from "../../src/domain/Movie";
import { getMovie } from "../../src/services/movie";

const Movie: NextPage<{ movie: TMovie }> = (props) => <MoviePage {...props} />;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = (context?.params?.id as string) || "";
  const movie = await getMovie(id);

  return {
    props: {
      movie,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Movie;
