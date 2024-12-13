// Internal libraries
import { useState } from "react";

// Import styles
import styles from "./Dropdown.module.css";

// Create Dropdown component
export default function Dropdown({ title, content }) {
  // Use state variable to update position between renders
  const [dropdown, setDropdown] = useState(false);

  if (!title || !content) {
    console.error("Dropdown component: Title and content props are required.");
    return null;
  }

  // Create functions to handle the change of position (close/open)
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <section className={styles.dropdown} aria-label={title}>
      <div className={styles.dropdown_title} onClick={handleClick}>
        <h2 className={styles.dropdown_title_text}>{title}</h2>
        <div
          className={
            dropdown
              ? styles.dropdown_title_vector_up
              : styles.dropdown_title_vector_down
          }
          aria-label="Toggle dropdown"
          role="button"
        ></div>
      </div>
      <div
        className={
          dropdown ? styles.dropdown_content : styles.dropdown_content_hidden
        }
      >
        {Array.isArray(content) ? (
          <ul className={styles.dropdown_content_list}>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.dropdown_content_text}>{content}</p>
        )}
      </div>
    </section>
  );
}
