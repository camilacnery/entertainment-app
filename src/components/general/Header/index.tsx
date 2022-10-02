import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUserContext } from "@/contexts/User";
import Avatar from "@/components/general/Avatar";
import Button from "@/components/general/Button";
import styles from "./index.module.scss";

const Header: FC = () => {
  const { profile } = useUserContext();
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.leftContent}>
        <Link href="/">
          <h1>The Catalog</h1>
        </Link>
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
          <Button onClick={() => router.push("/login")}>Login</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
