import { FC } from "react";
import Image from "next/future/image";
import { TRail } from "../../../domain/Rail";
import styles from "./index.module.scss";

const Rail: FC<TRail> = ({ name, items }) => {
  return (
    <section className={styles.rail}>
      <h1>{name}</h1>
      <div className={styles.railList}>
        {items.map((item) => (
          <div key={`rail-item-${item.title}`} className={styles.railListItem}>
            <Image
              loading="lazy"
              width={200}
              height={280}
              src={item.posterUrl}
              alt={`Movie poster for ${item.title}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rail;
