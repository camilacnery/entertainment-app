import type { GetStaticProps, NextPage } from "next";
import MoviePage from "@/components/pages/Movie";
import { IMovie } from "@/domain/Movie";
import { getMovie } from "@/services/movie";
import { ErrorStatus } from "@/domain/Error";
import ErrorPage from "@/components/pages/Error";

const Movie: NextPage<{ movie: IMovie; errorStatus: ErrorStatus }> = (props) => {
  if (props.errorStatus) return <ErrorPage status={props.errorStatus} />;

  return <MoviePage {...props} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = (context?.params?.id as string) || "";
    const movie = await getMovie(id);

    console.log("aquii", movie);
    return {
      props: { movie },
    };
  } catch {
    return {
      props: { errorStatus: 500, revalidate: 60 },
    };
  }
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Movie;
