import styles from "./styles.module.sass";
import IconArrow from "../../assets/icons/arr-top.svg";

function BtnToTop() {
  //@ts-ignore
  const isBrowser = () => typeof window !== 'undefined'; 
  const scrollToTop = () => {
    if (!isBrowser()) return;
    //@ts-ignore
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <button
      className={styles.btn}
      onClick={scrollToTop}
    >
      <IconArrow />
    </button>
  );
}
export default BtnToTop;
