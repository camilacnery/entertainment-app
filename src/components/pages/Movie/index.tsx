import { FC } from "react";
import Image from "next/future/image";
import { IMovie } from "@/domain/Movie";
import Rail from "@/components/general/Rail";
import styles from "./index.module.scss";
import Layout from "@/components/general/Layout";

type TProps = {
  movie: IMovie;
};

const MoviePage: FC<TProps> = ({ movie }) => {
  const info: string[] = [];

  if (movie.releaseDate) info.push(movie.releaseDate);
  if (movie.genres?.length) info.push(movie.genres.join(", "));
  if (movie.runtime) info.push(`${movie.runtime}min`);

  return (
    <Layout
      meta={{
        title: `The Catalog | ${movie.title}`,
        description: `Movie description - ${movie.description}`,
      }}
      backgroundUrl={movie.backdropUrl}
    >
      <div className={styles.content}>
        {movie.posterUrl && (
          <Image loading="lazy" width={300} height={380} src={movie.posterUrl} alt={""} />
        )}
        <section className={styles.movieDetails}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p>{info.join(" • ")}</p>
          <p>{movie.tagline}</p>
          <h2>Overview</h2>
          <p>{movie.description}</p>
        </section>
      </div>
      <Rail name="Recommendations" items={movie.recommendations} />
    </Layout>
  );
};

export default MoviePage;
