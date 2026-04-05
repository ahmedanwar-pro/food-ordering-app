export default function MealsSkeleton({ count = 6 }) {
  return (
    <ul id="meals">
      {Array.from({ length: count }).map((_, idx) => (
        <li key={idx} className="meal-item meal-item--skeleton">
          <article>
            <div className="sk-img" />
            <div>
              <div className="sk-block sk-title" />
              <div className="sk-block sk-price" />
              <div className="sk-block sk-desc" />
              <div className="sk-block sk-desc short" />
            </div>
            <div className="meal-item-actions">
              <div className="sk-block sk-btn" />
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
