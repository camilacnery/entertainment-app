import { FC } from "react";
import Image from "next/future/image";
import styles from "./index.module.scss";

type TBanner = {
  imageUrl?: string;
};

const Banner: FC<TBanner> = ({ imageUrl }) => {
  return (
    <div className={styles.banner}>
      {imageUrl && <Image src={imageUrl} alt={""} width={1024} height={768} priority />}
    </div>
  );
};

export default Banner;
