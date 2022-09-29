/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Image from "next/image";
import LazyLoad from "react-lazyload";
import { TRail } from "../../../domain/Rail";
import styles from "./index.module.scss";

const Rail: FC<TRail> = ({ name, items }) => {
  return (
    <section className={styles.rail}>
      <h1>{name}</h1>
      <div className={styles.railList}>
        {items.map((item) => (
          <div key={`rail-item-${item.title}`} className={styles.railListItem}>
            <LazyLoad height={200}>
              <img
                loading="lazy"
                src={item.posterUrl}
                alt={`Movie poster for ${item.title}`}
              />
            </LazyLoad>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rail;
