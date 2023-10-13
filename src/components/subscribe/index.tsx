import { useRef } from "react";
import styles from "./styles.module.sass";

export default function Subscribe() {
    const form = useRef();
    const onFormSend = (e) => {
        e.preventDefault();
        if (form.current) {
            const user_email = form.current.email.value;
            if(user_email.length > 0){
                alert(user_email);
            } 
            form.current.reset();
        }
    }

    return <form className={styles.subscribe} noValidate method="POST" action="/" ref={form}>
        <div className={styles.subscribe_title}>
            Join Our Newsletter
        </div>
        <div className={styles.subscribe_field_group}>
            <input type="email" placeholder="Your email address" name="email" id="" maxLength={32} />
            <input type="submit" name="" id="" value="Subscribe" onClick={onFormSend}/>
        </div>
        <div className={styles.subscribe_note}>
            *  Will send you weekly updates for your better tool management.
        </div>
    </form>;
}
  