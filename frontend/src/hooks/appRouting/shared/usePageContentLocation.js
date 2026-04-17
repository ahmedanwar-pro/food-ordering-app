import { useLocation, useRoutes } from "react-router-dom";

export default function usePageContentLocation(routes) {
  const location = useLocation();

  const backgroundLocation = location.state?.backgroundLocation;

  const isModalRoute =
    location.pathname === "/cart" || location.pathname === "/checkout";

  const pageLocation =
    backgroundLocation ||
    (isModalRoute ? { ...location, pathname: "/" } : location);

  const pageContent = useRoutes(routes, pageLocation);

  return pageContent;
}
