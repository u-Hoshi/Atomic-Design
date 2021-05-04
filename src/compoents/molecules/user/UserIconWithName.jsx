import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  console.log(props);
  return (
    <SCOntainer>
      <SImg height={160} width={160} src={image} alt="プロフィール" />
      <SName>{name}</SName>
    </SCOntainer>
  );
};

const SCOntainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: bold;
  margin: 0;
  color: #40514e;
`;
