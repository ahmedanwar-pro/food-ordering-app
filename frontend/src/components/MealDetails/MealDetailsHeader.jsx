export default function MealDetailsHeader({ title, description }) {
  return (
    <header className="meal-details-header">
      <h2 className="meal-details-title">{title}</h2>
      <p className="meal-details-description">{description}</p>
    </header>
  );
}
