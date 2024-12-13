// Import styles
import "./Rating.css";

// Create Rating component
export default function Rating({ value }) {
  // Validate the value prop
  if (value < 0 || value > 5) {
    console.error("Rating component: Value must be between 0 and 5.");
    return null;
  }
  // Create an array with the number of start to display in order to conditionally render the rating value
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating" aria-label={`Rating: ${value} out of 5`}>
      {stars.map((star) => (
        <div
          key={star.toString()}
          className={value >= star ? "red_star" : "grey_star"}
          aria-hidden="true" // Decorative elements
        ></div>
      ))}
    </div>
  );
}
