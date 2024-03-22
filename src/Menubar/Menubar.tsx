import styled from "styled-components";
import { useFocusedApplication } from "../hooks";

const MenuBarWrapper = styled.div(() => ({
  width: "100%",
  backgroundColor: "rgba(18, 18, 18, 0.65)",
  height: 22,
}));

const ApplicationName = styled.h5(() => ({
  margin: 0,
}));

const Menubar = () => {
  const focusedApplication = useFocusedApplication();

  return (
    <MenuBarWrapper>
      <ApplicationName>{focusedApplication?.name}</ApplicationName>
    </MenuBarWrapper>
  );
};

export default Menubar;
