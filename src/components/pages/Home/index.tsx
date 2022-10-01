import { FC, Fragment } from "react";
import { IRail } from "@/domain/Rail";
import Banner from "@/components/general/Banner";
import Meta from "@/components/general/Meta";
import Rail from "@/components/general/Rail";
import styles from "./index.module.scss";

type TProps = {
  homeRails: IRail[];
};

const HomePage: FC<TProps> = ({ homeRails }) => {
  const bannerUrl = homeRails[0]?.items[0]?.backdropUrl;

  return (
    <>
      {bannerUrl && <Banner imageUrl={bannerUrl} />}
      <main className={styles.main}>
        <Meta title="The Catalog" description="List of movies, movie details, and more" />

        <div className={styles.rails}>
          {homeRails.map((rail) => (
            <Rail key={`rail-${rail.name}`} {...rail} />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
