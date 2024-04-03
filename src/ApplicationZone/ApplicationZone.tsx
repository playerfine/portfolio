import { useDroppable } from "@dnd-kit/core";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const ApplicationZoneWrapper = styled("div")(() => ({
  width: "100%",
  height: "100%",
  overflow: "hidden",
}));

const ApplicationZone = (props: PropsWithChildren) => {
  const { setNodeRef } = useDroppable({
    id: "desktop",
  });

  return (
    <ApplicationZoneWrapper ref={setNodeRef}>
      {props.children}
    </ApplicationZoneWrapper>
  );
};

export default ApplicationZone;
