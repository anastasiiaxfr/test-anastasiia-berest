import styles from "./styles.module.sass";

import Link from "next/link";

import IconTw from "../../assets/icons/tw.svg";
import IconIm from "../../assets/icons/im.svg";
import IconMap from "../../assets/icons/map.svg";

const soc = [
  {
    icon: <IconTw width={16} height={16} />,
    url: "/",
  },
  {
    icon: <IconIm width={16} height={16} />,
    url: "/",
  },
  {
    icon: <IconMap width={16} height={16} />,
    url: "/",
  },
];

export default function Soc() {
  return (
    <div className={styles.soc}>
      {soc.map((i, k) => (
        <Link href={i.url} key={k}>{i.icon}</Link>
      ))}
    </div>
  );
}
