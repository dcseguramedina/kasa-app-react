// Internal libraries
import { Link } from "react-router-dom";

// Import styles
import styles from "./Return.module.css";

// Create Return component
export default function Return({ message }) {
  if (!message) {
    console.error("Return component: Message prop is required.");
    return null;
  }

  return (
    <Link className={styles.return} to="/" aria-label={message}>
      {message}
    </Link>
  );
}
