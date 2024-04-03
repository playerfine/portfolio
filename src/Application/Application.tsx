import styled from "styled-components";
import ApplicationHeader from "./ApplicationHeader";
import { useDesktopManager } from "../Desktop";
import { DragEndEvent, useDndMonitor, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { ApplicationType } from ".";
import React from "react";

const ApplicationWrapper = styled.div<{
  x: number;
  y: number;
  isMinimized: boolean;
  isMaximized: boolean;
}>(({ x, y, isMinimized, isMaximized }) => ({
  width: isMaximized ? "100%" : 500,
  height: isMaximized ? "100%" : 500,
  backgroundColor: "#22232a",
  borderRadius: 12,
  top: y,
  left: x,
  position: "absolute",
  display: isMinimized ? "none" : "block",
}));

interface Props {
  application: ApplicationType;
}

const Application = React.memo(({ application }: Props) => {
  const [moveApplicationPosition, minimizeApplication, maximizeApplication] =
    useDesktopManager((state) => [
      state.moveApplicationPosition,
      state.minimizeApplication,
      state.maximizeApplication,
    ]);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: application.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (application.id !== event.active.id) return;

    const { x, y } = event.delta;

    moveApplicationPosition(
      { x: application.position.x + x, y: application.position.y + y },
      application.id,
    );
  };

  const onMinimizeClicked = () => {
    minimizeApplication(application.id);
  };

  const onMaximizeClicked = () => {
    maximizeApplication(application.id);
  };

  useDndMonitor({
    onDragEnd: handleDragEnd,
  });

  return (
    <ApplicationWrapper
      ref={setNodeRef}
      style={style}
      x={application?.position.x}
      y={application?.position.y}
      isMinimized={application.isMinimized}
      isMaximized={application.isMaximized}
      {...listeners}
      {...attributes}
    >
      <ApplicationHeader
        name={application.name}
        onMinimizeClicked={onMinimizeClicked}
        onMaximizeClicked={onMaximizeClicked}
      />
    </ApplicationWrapper>
  );
});

export default Application;
