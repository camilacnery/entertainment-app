import { FC } from "react";
import Image from "next/future/image";
import styles from "./index.module.scss";

type TAvatar = {
  imageUrl: string;
  size?: number;
};

const Avatar: FC<TAvatar> = ({ imageUrl, size = 100 }) => {
  return <Image className={styles.avatar} src={imageUrl} alt={""} width={size} height={size} />;
};

export default Avatar;
