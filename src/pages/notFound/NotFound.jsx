// Import components
import ErrorCode from "../../components/errorCode/ErrorCode";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import Return from "../../components/return/Return";

// Import styles
import styles from "./NotFound.module.css";

// Define error messages
const errorMessages = {
  code: 404,
  message: "Oups! La page que vous demandez n'existe pas",
  returnMessage: "Retourner sur la page d'accueil",
};

// Create NotFound component
export default function NotFound() {
  return (
    <main className={styles.not_found} aria-label="Page not found">
      <div className={styles.error_code}>
        <ErrorCode code={errorMessages.code} />
      </div>
      <div className={styles.error_message}>
        <ErrorMessage message={errorMessages.message} />
      </div>
      <div className={styles.return}>
        <Return message={errorMessages.returnMessage} />
      </div>
    </main>
  );
}
