import styles from "./styles.module.sass";
import Link from "next/link";

import IconTel from "../../assets/icons/tel.svg";
import IconEmail from "../../assets/icons/email.svg";
import IconMap from "../../assets/icons/map.svg";

const contacts = {
  info: [
    {
      data: "+1012 3456 789",
      url: "tel:+10123456789",
      icon: <IconTel width={16} height={16} />,
    },
    {
      data: "demo@gmail.com",
      url: "mailto:demo@gmail.com",
      icon: <IconEmail width={16} height={16} />,
    },
    {
      data: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
      url: "",
      icon: <IconMap width={16} height={16} />,
    },
  ],
};

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      {contacts.info.map((i, k) => (
        <Link href={i.url} key={k}>
          {i.icon}
          {i.data}
        </Link>
      ))}
    </div>
  );
}
