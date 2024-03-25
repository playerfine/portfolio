import { create } from "zustand";
import { ApplicationType, Position } from "../Application";

interface NormalizedObjects<T> {
  [id: string]: T;
}

interface DesktopState {
  focusedApplicationId: string | null;
  applications: NormalizedObjects<ApplicationType>;
  openApplication: (application: ApplicationType) => void;
  focusApplication: (id: string) => void;
  moveApplicationPosition: (newPosition: Position, id: string) => void;
  minimizeApplication: (id: string) => void;
  unminimizeApplication: (id: string) => void;
}

const useDesktopManager = create<DesktopState>()((set) => ({
  applications: {},
  focusedApplicationId: null,
  openApplication: (application: ApplicationType) => {
    console.log("minimizeApplication");
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

  moveApplicationPosition: (newPosition: Position, id: string) => {
    set((state) => ({
      ...state,
      applications: {
        ...state.applications,
        [id]: {
          ...state.applications[id],
          position: newPosition,
        },
      },
    }));
  },
  minimizeApplication: (id: string) => {
    set((state) => ({
      ...state,
      applications: {
        ...state.applications,
        [id]: {
          ...state.applications[id],
          isMinimized: true,
        },
      },
    }));
  },
  unminimizeApplication: (id: string) => {
    set((state) => ({
      ...state,
      applications: {
        ...state.applications,
        [id]: {
          ...state.applications[id],
          isMinimized: false,
        },
      },
    }));
  },
}));

export default useDesktopManager;
