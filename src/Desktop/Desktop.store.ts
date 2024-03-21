import { create } from "zustand";
import { Application } from "../Application";

interface NormalizedObjects<T> {
  [id: string]: T;
}

interface DesktopState {
  focusedApplicationId: string | null;
  applications: NormalizedObjects<Application>;
  openApplication: (application: Application) => void;
  focusApplication: (id: string) => void;
}

const useDesktopManager = create<DesktopState>()((set) => ({
  applications: {},
  focusedApplicationId: null,
  openApplication: (application: Application) => {
    set((state) => {
      if (!application) return state;

      const id = application.id;
      const isAlreadyOpend = !!state.applications[id];

      if (isAlreadyOpend) {
        return state;
      }

      return {
        ...state,
        applications: { ...state.applications, [id]: application },
      };
    });
  },
  focusApplication: (id: string) => {
    set((state) => ({
      ...state,
      focusedApplicationId: id,
    }));
  },
}));

export default useDesktopManager;
