import styles from "./styles.module.sass";
import Link from "next/link";
import IconUser from "../../assets/icons/user.svg"
import IconTrash from "../../assets/icons/trash.svg"

export default function Auth() {
  return <div className={styles.auth}>
    <Link href="/" className={styles.auth_btn}>
      <IconUser />
    </Link>
    <Link href="/" className={styles.auth_btn}>
      <IconTrash />
    </Link>
  </div>;
}
