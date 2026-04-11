import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <App />,
  },
  {
    path: "/checkout",
    element: <App />,
  },
  {
    path: "/meals/:mealId",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
