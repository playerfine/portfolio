import styled from "styled-components";

const ApplicationHeaderWrapper = styled.div(() => ({
  width: "100%",
  height: 40,
  backgroundColor: "#22232a",
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
  padding: 8,
}));

const Actions = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
  gap: 8,
}));

const Action = styled.button(() => ({
  width: 13,
  height: 13,
  borderRadius: "50%",
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Close = styled(Action)(() => ({
  backgroundColor: "#ff5f57",
}));

const Minimize = styled(Action)(() => ({
  backgroundColor: "#febc2f",
}));

const Maximize = styled(Action)(() => ({
  backgroundColor: "#26c840",
}));

interface Props {
  onMinimizeClicked: () => void;
}

const ApplicationHeader = (props: Props) => {
  const { onMinimizeClicked } = props;

  return (
    <ApplicationHeaderWrapper>
      <Actions>
        <Close />
        <Minimize onClick={onMinimizeClicked} />
        <Maximize />
      </Actions>
    </ApplicationHeaderWrapper>
  );
};

export default ApplicationHeader;
