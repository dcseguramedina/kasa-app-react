// Internal libraries
import { useState } from "react";

// Import styles
import styles from "./Carrousel.module.css";

// Create Carrousel component
export default function Carrousel({ title, pictures }) {
  // Use state variable to update image between renders
  const [index, setIndex] = useState(0);

  if (!title || !pictures || pictures.length === 0) {
    console.error(
      "Carrousel component: title and pictures props are required."
    );
    return null;
  }

  // Create functions to handle the change of image (left/right)
  const handleClickLeft = () => {
    setIndex(
      (currentIndex) => (currentIndex - 1 + pictures.length) % pictures.length
    );
  };

  const handleClickRight = () => {
    setIndex((currentIndex) => (currentIndex + 1) % pictures.length);
  };

  return (
    <section className={styles.carrousel} aria-label={title}>
      <img
        className={styles.carrousel_image}
        src={pictures[index]}
        alt={title}
      />
      {pictures.length > 1 && (
        <>
          <div
            className={styles.carrousel_vector_left}
            onClick={handleClickLeft}
          ></div>
          <div
            className={styles.carrousel_vector_right}
            onClick={handleClickRight}
          ></div>
          <p className={styles.carrousel_count}>
            {index + 1}/{pictures.length}
          </p>
        </>
      )}
    </section>
  );
}
