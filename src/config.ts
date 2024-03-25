import { generateId } from "./utils";

const DEFAULT_POSITION = { x: 0, y: 0 };

const generateApplications = () => {
  const applications = {
    SPOTIFY: {
      id: generateId(),
      name: "Spotify",
      iconUrl: "./src/assets/icons/spotify.png",
      position: DEFAULT_POSITION,
      isMinimized: true,
    },
    NOTES: {
      id: generateId(),
      name: "Notes",
      iconUrl: "./src/assets/icons/notes.png",
      position: DEFAULT_POSITION,
      isMinimized: true,
    },
  };

  return applications;
};

export const APPLICATONS = generateApplications();
