// Internal libraries
import { useParams } from "react-router-dom";
import datas from "../../data/data.js";

// Import components
import NotFound from "../notFound/NotFound.jsx";
import Carrousel from "../../components/carrousel/Carrousel.jsx";
import Tag from "../../components/tag/Tag.jsx";
import Rating from "../../components/rating/Rating.jsx";
import Dropdown from "../../components/dropdown/Dropdown.jsx";

// Import styles
import styles from "./Accommodation.module.css";

// Create Accommodation component
export default function Accommodation() {
  // Get the accommodation id from the URL
  const { id } = useParams();

  // Find the accommodation to display using the recovered id
  const singleData = datas.find((data) => data.id === id);

  // Redirect to error page if the accommodation id is incorrect
  if (!singleData) {
    console.error(`Accommodation with ID ${id} not found`);
    return <NotFound />;
  }

  const AccommodationPlace = () => {
    return (
      <div className={styles.accommodation_info_place}>
        <h1 className={styles.accommodation_info_place_title}>
          {singleData.title}
        </h1>
        <h2 className={styles.accommodation_info_place_location}>
          {singleData.location}
        </h2>
        <div className={styles.accommodation_info_place_tags}>
          {singleData.tags.map((tag) => (
            <Tag key={tag} content={tag} />
          ))}
        </div>
      </div>
    );
  };

  const AccommodationHost = () => {
    return (
      <div className={styles.accommodation_info_host}>
        <div className={styles.accommodation_info_host_details}>
          <h2 className={styles.accommodation_info_host_details_name}>
            {singleData.host.name}
          </h2>
          <img
            className={styles.accommodation_info_host_details_picture}
            src={singleData.host.picture}
            alt={singleData.host.name}
            aria-label={singleData.host.name}
          />
        </div>
        <div className={styles.accommodation_info_host_rating}>
          <Rating value={singleData.rating} />
        </div>
      </div>
    );
  };

  const AccommodationDropdowns = () => {
    return (
      <section className={styles.accommodation_dropdown_container}>
        <div className={styles.accommodation_dropdown}>
          <Dropdown title="Description" content={singleData.description} />
        </div>
        <div className={styles.accommodation_dropdown}>
          <Dropdown title="Équipements" content={singleData.equipments} />
        </div>
      </section>
    );
  };

  return (
    <div className={styles.accommodation}>
      <section className={styles.accommodation_carrousel}>
        <Carrousel title={singleData.title} pictures={singleData.pictures} />
      </section>
      <main className={styles.accommodation_main}>
        <section className={styles.accommodation_info}>
          <AccommodationPlace />
          <AccommodationHost />
        </section>
        <AccommodationDropdowns />
      </main>
    </div>
  );
}
