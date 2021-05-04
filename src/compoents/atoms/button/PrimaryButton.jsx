import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  console.log(props);
  console.log(children);
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: green;
`;
