import { FC, Fragment } from "react";
import { IRail } from "../../../domain/Rail";
import Banner from "../../general/Banner";
import Meta from "../../general/Meta";
import Rail from "../../general/Rail";
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
            <Fragment key={`rail-${rail.name}`}>{!!rail.items?.length && <Rail {...rail} />}</Fragment>
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
