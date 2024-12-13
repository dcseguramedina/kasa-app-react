// Import styles
import styles from "./Copyright.module.css";

// Create Copyright component
export default function Copyright({ content }) {
  if (!content) {
    console.error("Copyright component: Content prop is required.");
    return null;
  }

  return (
    <p className={styles.copyright} aria-label="Copyright information">
      {content}
    </p>
  );
}
