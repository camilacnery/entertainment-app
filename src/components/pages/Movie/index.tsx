import { FC } from "react";
import Image from "next/future/image";
import { IMovie } from "../../../domain/Movie";
import Rail from "../../general/Rail";
import Meta from "../../general/Meta";
import styles from "./index.module.scss";
import Banner from "../../general/Banner";

type TProps = {
  movie: IMovie;
};

const MoviePage: FC<TProps> = ({ movie }) => {
  return (
    <>
      <Banner imageUrl={movie.backdropUrl} />
      <main className={styles.main}>
        <Meta
          title={`The Catalog | ${movie.title}`}
          description={movie.description || "Movie details page"}
        />

        <div className={styles.content}>
          <div className={styles.movie}>
            <Image
              loading="lazy"
              width={300}
              height={380}
              src={movie.posterUrl}
              alt={""}
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
    </>
  );
};

export default MoviePage;
