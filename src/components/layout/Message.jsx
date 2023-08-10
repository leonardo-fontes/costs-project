import { useState, useEffect } from "react";
import styles from "./Message.module.css";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <div
          className={`w-full border-solid border-[1px] p-[1em] my-[2em] ${styles[type]}`}
        >
          {msg}
        </div>
      )}
    </>
  );
}

export default Message;
