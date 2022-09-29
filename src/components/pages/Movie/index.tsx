import { FC } from "react";
import Head from "next/head";
import Image from "next/future/image";
import { IMovie } from "../../../domain/Movie";
import Rail from "../../general/Rail";
import Meta from "../../general/Meta";
import styles from "./index.module.scss";

type TProps = {
  movie: IMovie;
};

const MoviePage: FC<TProps> = ({ movie }) => {
  return (
    <div className={styles.container}>
      <Head>
        <Meta
          title={movie.title}
          description={movie.description || "Movie details page"}
        ></Meta>
      </Head>

      <main className={styles.main}>
        <div className={styles.banner}>
          <Image
            src={movie.backdropUrl}
            alt={`Imagem ${movie.title}`}
            width={800}
            height={600}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.movie}>
            <Image
              loading="lazy"
              width={300}
              height={380}
              src={movie.posterUrl}
              alt={`Movie poster for ${movie.title}`}
            />
            <section className={styles.movieDetails}>
              <h1 className={styles.title}>{movie.title}</h1>
              <p>{`${movie.releaseDate} • ${movie.genres.join(", ")} • ${
                movie.runtime
              }min`}</p>
              <p>{movie.tagline}</p>
              <h2>Overview</h2>
              <p>{movie.description}</p>
            </section>
          </div>
          <Rail name="Similar content" items={movie.recommendations} />
        </div>
      </main>
    </div>
  );
};

export default MoviePage;
