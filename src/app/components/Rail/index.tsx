import { FC } from "react";
import Image from "next/image";
import { TRail } from "../../../domain/Rail";
import styles from "./index.module.scss";

const Rail: FC<TRail> = ({ items }) => {
  return (
    <div className={styles.rail}>
      <div className={styles.railList}>
        {items.map((item) => (
          <div key={`rail-item-${item.title}`} className={styles.railListItem}>
            <Image
              src={item.posterUrl}
              alt={`Movie poster for ${item.title}`}
              layout="fill"
            />
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rail;
