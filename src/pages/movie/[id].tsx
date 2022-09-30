import type { GetStaticProps, NextPage } from "next";
import MoviePage from "@/components/pages/Movie";
import { IMovie } from "@/domain/Movie";
import { getMovie } from "@/services/movie";

const Movie: NextPage<{ movie: IMovie }> = (props) => <MoviePage {...props} />;

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