import styled from "styled-components";
import Dock from "../Dock/Dock";
import React from "react";
import useDesktopManager from "./Desktop.store";
import { APPLICATONS } from "../config";

const DestopWrapper = styled("div")(() => ({
  background: "url(./src/assets/desktop.jpg) no-repeat center center fixed",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  position: "relative",
}));

const Desktop = () => {
  const openApplication = useDesktopManager((state) => state.openApplication);

  React.useEffect(() => {
    openApplication(APPLICATONS.SPOTIFY);
  }, []);

  return (
    <DestopWrapper>
      <Dock />
    </DestopWrapper>
  );
};

export default Desktop;
