import { FC } from "react";
import Link from "next/link";
import Image from "next/future/image";
import { IRail } from "@/domain/Rail";
import styles from "./index.module.scss";

const Rail: FC<IRail> = ({ name, items }) => {
  const key = `rail-heading-${name.replace(/\s/g, "")}`;

  if (!items.length) return <></>;

  return (
    <section className={styles.rail}>
      <h1 id={key}>{name}</h1>
      <ul className={styles.railList} aria-labelledby={key}>
        {items.map((item) => (
          <Link key={`rail-item-${item.title}`} href={`/movie/${item.id}`}>
            <li className={styles.railListItem}>
              <Image
                loading="lazy"
                width={200}
                height={280}
                src={item.posterUrl}
                alt={item.title}
              />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Rail;
