import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="center">
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>
        <Link to="/">Back to Meals</Link>
      </p>
    </main>
  );
}
