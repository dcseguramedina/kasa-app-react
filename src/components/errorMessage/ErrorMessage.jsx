// Import styles
import styles from "./ErrorMessage.module.css";

// Create ErrorMessage component
export default function ErrorMessage({ message }) {
  if (!message) {
    console.error("ErrorMessage component: Message prop is required.");
    return null;
  }

  return (
    <p
      className={styles.error_message}
      aria-label={`Error message: ${message}`}
    >
      {message}
    </p>
  );
}
