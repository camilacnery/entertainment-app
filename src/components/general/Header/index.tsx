import { FC } from "react";
import Link from "next/link";
import { useUserContext } from "@/contexts/User";
import Avatar from "../Avatar";
import styles from "./index.module.scss";

const Header: FC = () => {
  const { profile } = useUserContext();

  return (
    <header className={styles.header}>
      <div className={styles.leftContent}>
        <h1>The Catalog</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        {profile ? (
          <Link href="/profile">
            <div className={styles.user}>
              <span>{profile.firstName}</span>
              <Avatar size={40} imageUrl={profile.imageUrl} />
            </div>
          </Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
