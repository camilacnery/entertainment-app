import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>The Catalog</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
