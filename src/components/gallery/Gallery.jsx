// Internal libraries
import datas from "../../data/data.js";
import Card from "../card/Card";

// Import styles
import styles from "./Gallery.module.css";

// Create Gallery component
export default function Gallery() {
  if (!datas || datas.length === 0) {
    console.error("Gallery component: No data available to display.");
    return <p>Aucune image disponible.</p>; // Provide feedback to the user
  }

  return (
    <section className={styles.gallery} aria-label="Gallery of accommodations">
      {datas.map((data) => (
        <Card
          key={data.id}
          id={data.id}
          title={data.title}
          cover={data.cover}
        />
      ))}
    </section>
  );
}
