// Import styles
import styles from "./Tag.module.css";

// Create Tag component
export default function Tag({ content }) {
  if (!content) {
    console.error("Tag component: Content prop is required.");
    return null;
  }

  return (
    <div className={styles.tag} aria-label={`Tag: ${content}`}>
      <p className={styles.tag_text}>{content}</p>
    </div>
  );
}
