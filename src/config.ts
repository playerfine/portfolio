import { generateId } from "./utils";

const generateApplications = () => {
  const applications = {
    SPOTIFY: {
      id: generateId(),
      name: "Spotify",
    },
  };

  return applications;
};

export const APPLICATONS = generateApplications();
