import styled from "styled-components";
import Dock from "../Dock/Dock";
import React from "react";
import useDesktopManager from "./Desktop.store";

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
    openApplication("1", { id: "1", name: "App1" });
  }, []);

  return (
    <DestopWrapper>
      <Dock />
    </DestopWrapper>
  );
};

export default Desktop;
