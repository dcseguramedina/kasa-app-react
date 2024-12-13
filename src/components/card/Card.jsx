// Internal libraries
import { Link } from "react-router-dom";

// Import styles
import styles from "./Card.module.css";

// Create Card component
export default function Card({ id, title, cover }) {
  if (!id || !title || !cover) {
    console.error("Card component: id, title, and cover props are required.");
    return null;
  }

  return (
    <Link
      className={styles.card}
      to={`/accommodation/${id}`}
      aria-label={title}
    >
      <img className={styles.card_image} src={cover} alt={title} />
      <div className={styles.card_overlay}></div>
      <h3 className={styles.card_title}>{title}</h3>
    </Link>
  );
}
