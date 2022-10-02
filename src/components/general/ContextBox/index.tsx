import { FC, ReactNode } from "react";
import styles from "./index.module.scss";

type TContentBox = {
  children: ReactNode;
};

const ContentBox: FC<TContentBox> = ({ children }) => {
  return <section className={styles.content}>{children}</section>;
};

export default ContentBox;
