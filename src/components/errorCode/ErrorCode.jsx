// Import styles
import styles from "./ErrorCode.module.css";

// Create ErrorCode component
export default function ErrorCode({ code }) {
  if (!code) {
    console.error("ErrorCode component: Code prop is required.");
    return null;
  }

  return (
    <h1 className={styles.error_code} aria-label={`Error code: ${code}`}>
      {code}
    </h1>
  );
}
