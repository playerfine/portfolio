import styled from "styled-components";
import { useDesktopManager } from "../Desktop";

const DockContainer = styled("div")(() => ({
  position: "absolute",
  display: "flex",
  bottom: 20,
  width: "auto",
  height: 55,
  borderRadius: 12,
  backgroundColor: "rgba(120, 120, 120, 0.07)",
  margin: "0 auto",
  backdropFilter: "blur(10px)",
  alignItems: "center",
  padding: "0px 10px",
  left: "50%",
  transform: "translate(-50%, 0)",
}));

const IconContainer = styled("div")(() => ({
  width: 45,
  height: 45,
  borderRadius: 12,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  marginRight: 8,
  "&:last-of-type": {
    marginRight: 0,
  },
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.1)",
    transition: "all 0.2s ease",
  },
}));

const Icon = styled("img")(() => ({
  width: "100%",
  heigth: "100%",
  objectFit: "contain",
}));

const Dock = () => {
  const applications = useDesktopManager((state) => state.applications);
  return (
    <DockContainer>
      {Object.entries(applications).map(() => (
        <>
          <IconContainer>
            <Icon src="./src/assets/icons/spotify_2.png" />
          </IconContainer>
          <IconContainer>
            <Icon src="./src/assets/icons/spotify_2.png" />
          </IconContainer>
        </>
      ))}
    </DockContainer>
  );
};

export default Dock;
