import { useLocation, useNavigate } from "react-router-dom";

import { getNavigationTarget } from "./modalRoutingUtils";

export default function useModalNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundLocation = location.state?.backgroundLocation;

  function getModalBackgroundLocation() {
    return backgroundLocation || location;
  }

  function navigateToModal(pathname) {
    navigate(pathname, {
      state: { backgroundLocation: getModalBackgroundLocation() },
    });
  }

  function replaceModal(pathname) {
    navigate(pathname, {
      replace: true,
      state: { backgroundLocation: getModalBackgroundLocation() },
    });
  }

  function closeToBackground() {
    const target = getNavigationTarget(backgroundLocation);

    navigate(target.to, {
      replace: true,
      state: target.state,
    });
  }

  return {
    location,
    navigate,
    backgroundLocation,
    navigateToModal,
    replaceModal,
    closeToBackground,
  };
}

