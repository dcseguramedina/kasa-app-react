//Internal libraries
import image from "../../assets/banner_home.png";

//Import components
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";

//Import styles
import styles from "./Home.module.css";

// Create Home component
export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.banner}>
        <Banner
          image={image}
          alt="Paysage côtier"
          ariaLabel="Banner image"
          description="Chez vous, partout et ailleurs"
        />
      </section>
      <main className={styles.gallery}>
        <Gallery />
      </main>
    </div>
  );
}
