import styled from "styled-components";

export const Input = (props) => {
  const { placeholder } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 15px;
  border: solid #ddd 2px;
  border-radius: 3333px;
  outline: none;
`;
