import Meals from "../components/Meals/Meals";
import MealDetailsPage from "../pages/MealDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <Meals />,
  },
  {
    path: "/meals/:mealId",
    element: <MealDetailsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
