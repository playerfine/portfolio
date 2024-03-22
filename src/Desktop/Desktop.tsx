import styled from "styled-components";
import Dock from "../Dock/Dock";
import React from "react";
import useDesktopManager from "./Desktop.store";
import { APPLICATONS } from "../config";
import { Menubar } from "../Menubar";
import { Application } from "../Application";
import { DndContext } from "@dnd-kit/core";
import { ApplicationZone } from "../ApplicationZone";

const DestopWrapper = styled("div")(() => ({
  background: "url(./src/assets/desktop.jpg) no-repeat center center fixed",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  position: "relative",
  display: "flex",
  flexDirection: "column",
}));

const Desktop = () => {
  const [openApplication, applications] = useDesktopManager((state) => [
    state.openApplication,
    state.applications,
  ]);

  React.useEffect(() => {
    // NOTE: Change this
    openApplication(APPLICATONS.SPOTIFY);
    openApplication(APPLICATONS.NOTES);
  }, []);

  return (
    <DestopWrapper>
      <Menubar />
      <DndContext>
        <ApplicationZone>
          {Object.entries(applications).map(([id, application]) => (
            <Application key={id} application={application} />
          ))}
        </ApplicationZone>
      </DndContext>
      <Dock />
    </DestopWrapper>
  );
};

export default Desktop;
