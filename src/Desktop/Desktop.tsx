import styled from "styled-components";
import Dock from "../Dock/Dock";
import React from "react";
import useDesktopManager from "./Desktop.store";
import { APPLICATONS } from "../config";
import { Menubar } from "../Menubar";

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
    // NOTE: Change this
    openApplication(APPLICATONS.SPOTIFY);
    openApplication(APPLICATONS.NOTES);
  }, []);

  return (
    <DestopWrapper>
      <Menubar />
      <Dock />
    </DestopWrapper>
  );
};

export default Desktop;
