import { useDesktopManager } from "../Desktop";

const useFocusedApplication = () => {
  const [focusedApplicationId, applications] = useDesktopManager((state) => [
    state.focusedApplicationId,
    state.applications,
  ]);

  if (!focusedApplicationId) return null;

  return applications[focusedApplicationId];
};

export default useFocusedApplication;
