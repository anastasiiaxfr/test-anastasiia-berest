import { useState, useRef } from "react";
import styles from "./styles.module.sass";

import IconCheck from "../../../assets/icons/check.svg";

const fields = [
  {
    label: "First Name",
    type: "text",
    required: true,
    placeholder: "Anastasiia",
    error: "This field is required!",
    name: "user_name_first",
  },
  {
    label: "Last Name",
    type: "text",
    required: true,
    placeholder: "Berest",
    error: "This field is required!",
    name: "user_name_last",
  },
  {
    label: "Email",
    type: "email",
    required: true,
    placeholder: "",
    error: "This field is required!",
    name: "user_email",
  },
  {
    label: "Phone Number",
    type: "tel",
    required: true,
    placeholder: "+1 012 3456 789",
    error: "This field is required!",
    name: "user_phone",
  },
];

const radiobuttons = {
  label: "Select Subject?",
  type: "radiobuttons",
  group: [
    {
      type: "radio",
      label: "General Inquiry 1",
    },
    {
      type: "radio",
      label: "General Inquiry 2",
    },
    {
      type: "radio",
      label: "General Inquiry 3",
    },
    {
      type: "radio",
      label: "General Inquiry 4",
    },
  ],
};

export default function Field() {
  const [showError, setShowError] = useState(false);

  const [inputValues, setInputValues] = useState(Array(fields.length).fill(""));
  const [inputComplete, setInputComplete] = useState(
    Array(fields.length).fill(false)
  );

  const [message, setMessage] = useState(true);
  const [checked, setChecked] = useState(0);
  const [checkedVal, setCheckedVal] = useState("");
  const form = useRef();

  const onRadionChecked = (i, val) => {
    setChecked(i);
    setCheckedVal(val);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (form.current) {
      const user_name_first = form.current.user_name_first.value;
      const user_name_last = form.current.user_name_last.value;
      const user_email = form.current.user_email.value;
      const user_phone = form.current.user_phone.value;
      const user_message = form.current.user_message.value;
      const user_subject = checkedVal;

      if (
        user_name_first.length > 0 &&
        user_name_last.length > 0 &&
        user_email.length > 0 &&
        user_phone.length > 0 &&
        user_message.length > 0
      ) {
        alert("form send");
      } else {
        setShowError(true);
        setMessage(true);
        setInputComplete([]);
      }
      form.current.reset();
    }
  };

  const onInputChanged = (e, k) => {
    const val = e.target.value;

    const newInputValues = [...inputValues];
    newInputValues[k] = val;
    setInputValues(newInputValues);

    if (val) {
      const newArr = [...inputComplete];
      newArr[k] = true;
      setInputComplete(newArr);
    }
  };

  const onMessageAdded = (e) => {
    if (e.target.value) {
      setMessage(false);
    }
  };

  return (
    <form
      action="/"
      method="POST"
      noValidate
      className={styles.form}
      ref={form}
    >
      <div className={styles.form_row}>
        {fields.map((i, k) => (
          <div className={styles.form_group} key={k}>
            <label htmlFor={i.name}>{i.label}</label>
            <input
              type={i.type}
              placeholder={i.placeholder}
              required={i.required}
              name={i.name}
              id={i.name}
              onChange={(e) => onInputChanged(e, k)}
            />
            {showError && !inputComplete[k] ? (
              <div className={styles.form_error}>{i.error}</div>
            ) : null}
          </div>
        ))}
      </div>

      <div className={styles.form_group}>
        <div className={styles.form_label}>{radiobuttons.label}</div>

        <div className={styles.form_radiogroup}>
          {radiobuttons.group.map((i, k) => (
            <div
              className={`${styles.form_radio} ${
                checked === k ? styles.checked : ""
              }`}
              key={k}
              onClick={() => onRadionChecked(k, i.label)}
            >
              <b>
                <IconCheck />
              </b>
              <span>{i.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.form_group}>
        <label htmlFor="">Message</label>
        <textarea
          name="user_message"
          id="user_message"
          cols="30"
          rows="3"
          placeholder="Write your message.."
          required
          onChange={(e) => onMessageAdded(e)}
        ></textarea>
        {showError && message ? (
          <div className={styles.form_error}>This field is required</div>
        ) : null}
      </div>

      <button type="submit" onClick={onFormSubmit}>
        Send Message
      </button>
    </form>
  );
}
