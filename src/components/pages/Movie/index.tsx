import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import { TMovie } from "../../../domain/Movie";
import styles from "./index.module.scss";
import Rail from "../../general/Rail";

type TProps = {
  movie: TMovie;
};

const MoviePage: FC<TProps> = ({ movie }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{movie.title}</title>
        <meta name="description" content="Movie catalog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.banner}>
          <img src={movie.backdropUrl} alt={`Imagem ${movie.title}`} />
        </div>

        <div className={styles.content}>
          <Rail name="Recommendations" items={movie.recommendations} />
        </div>
      </main>
    </div>
  );
};

export default MoviePage;
