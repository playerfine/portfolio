import { create } from "zustand";
import { Application } from "../Application";

interface NormalizedObjects<T> {
  [id: string]: T;
}

interface DesktopState {
  applications: NormalizedObjects<Application>;
  openApplication: (application: Application) => void;
}

const useDesktopManager = create<DesktopState>()((set) => ({
  applications: {},
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
}));

export default useDesktopManager;
