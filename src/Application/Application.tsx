import styled from "styled-components";
import ApplicationHeader from "./ApplicationHeader";
import { useDesktopManager } from "../Desktop";
import { DragEndEvent, useDndMonitor, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { ApplicationType } from ".";

const ApplicationWrapper = styled.div<{
  x: number;
  y: number;
  isMinimized: boolean;
}>(({ x, y, isMinimized }) => ({
  width: 500,
  height: 500,
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

const Application = ({ application }: Props) => {
  const [moveApplicationPosition, minimizeApplication] = useDesktopManager(
    (state) => [state.moveApplicationPosition, state.minimizeApplication],
  );

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
      { x: (application.position.x += x), y: (application.position.y += y) },
      application.id,
    );
  };

  const onMinimizeClicked = () => {
    minimizeApplication(application.id);
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
      {...listeners}
      {...attributes}
    >
      <ApplicationHeader onMinimizeClicked={onMinimizeClicked} />
    </ApplicationWrapper>
  );
};

export default Application;
