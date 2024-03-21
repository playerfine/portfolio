import { generateId } from "./utils";

const generateApplications = () => {
  const applications = {
    SPOTIFY: {
      id: generateId(),
      name: "Spotify",
      iconUrl: "./src/assets/icons/spotify.png",
    },
    NOTES: {
      id: generateId(),
      name: "Notes",
      iconUrl: "./src/assets/icons/notes.png",
    },
  };

  return applications;
};

export const APPLICATONS = generateApplications();
