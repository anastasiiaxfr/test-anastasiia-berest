import styles from "./styles.module.sass";
import Contacts from "../contacts";
import Soc from "../soc";
import Fields from "./fields";


export default function Form() {
  return (
    <div className={styles.form}>
      <div className={styles.form_content}>
        <div className={styles.form_contact}>
          <hgroup>
          <div className={styles.form_title}>Contact Information</div>
          <div className={styles.form_subtitle}>
            Say something to start a live chat!
          </div>
          </hgroup>
          <div className={styles.form_info}>
            <Contacts />
          </div>
          <Soc />
        </div>
        <div className={styles.form_form}>
          <Fields />
        </div>
      </div>
    </div>
  );
}
