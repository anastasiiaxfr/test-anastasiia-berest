import styles from "./styles.module.sass";
import Link from "next/link";
import Subscribe from "../subscribe";
import Contacts from "../contacts";
import BtnToTop from "../btn-to-top";

const menu = [
  {
    label: "Company",
    links: [
      {
        title: "About",
        url: "/",
      },
      {
        title: "Contact",
        url: "/",
      },
      {
        title: "Blogs",
        url: "/",
      },
    ],
  },
  {
    label: "Legal",
    links: [
      {
        title: "Privacy Policy",
        url: "/",
      },
      {
        title: "Terms & Services",
        url: "/",
      },
      {
        title: "Terms of Use",
        url: "/",
      },
      {
        title: "Refund Policy",
        url: "/",
      },
    ],
  },
  {
    label: "Quick Links",
    links: [
      {
        title: "Techlabz Keybox",
        url: "/",
      },
      {
        title: "Downloads",
        url: "/",
      },
      {
        title: "Forum",
        url: "/",
      },
    ],
  },
];


function Footer() {
  return (
    <>
    <BtnToTop />
    <footer className={styles.footer}>
      
      <div className={styles.footer_top}>
        <div className={`container ${styles.container}`}>
          <Link href="#" className={styles.logo}>
            Logo Here
          </Link>
        </div>
      </div>
      <div className={styles.footer_btm}>
        <div className="container">
         <div className="">
         <div className={styles.container}>
          <div className="">

            <div className={styles.footer_title}>
              Reach us
            </div>
            
            <nav className={styles.footer_nav}>
              <Contacts />
            </nav>
          </div>
            {menu.map((i, k) => (
              <div className={styles.footer_menu_col}>
                <div className={styles.footer_title}>{i.label}</div>
                <nav>
                  {i.links.map((i, k) => (
                    <Link href={i.url} key={k}>
                      {i.title}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          <Subscribe />
          </div>
          </div>
         </div>
        </div>
      
    </footer>
    </>
  );
}
export default Footer;
