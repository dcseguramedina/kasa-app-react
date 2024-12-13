// Import styles
import styles from "./Logo.module.css";

// Create Logo component
export default function Logo({ image, description }) {
  if (!image || !description) {
    console.error("Logo component: Image and description props are required.");
    return null;
  }

  return (
    <img
      className={styles.image}
      src={image}
      alt={description}
      aria-hidden="true" // Decorative image
    />
  );
}
