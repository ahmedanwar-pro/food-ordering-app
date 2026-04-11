export default function MealDetailsLayout({ image, info }) {
  return (
    <article className="meal-details-card">
      {image}
      {info}
    </article>
  );
}
