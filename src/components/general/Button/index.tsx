import { FC, ReactNode } from "react";
import styles from "./index.module.scss";

type TButton = {
  onClick?: () => void;
  children: ReactNode;
};

const Button: FC<TButton> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
