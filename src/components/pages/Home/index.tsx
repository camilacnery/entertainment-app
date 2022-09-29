import Head from "next/head";
import { FC } from "react";
import { TRail } from "../../../domain/Rail";
import Rail from "../../general/Rail";
import styles from "./index.module.scss";

type TProps = {
  homeRails: TRail[];
};

const HomePage: FC<TProps> = ({ homeRails }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie catalog</title>
        <meta name="description" content="Movie catalog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Movie catalog</h1>

        {homeRails.map((rail) => (
          <Rail key={`rail-${rail.name}`} {...rail} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;
