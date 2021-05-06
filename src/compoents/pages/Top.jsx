import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    history.push("/users");
    setUserInfo({ isAdmin: true });
  };
  const onClickGeneral = () => {
    history.push("/users");
    setUserInfo({ isAdmin: false });
  };
  return (
    <Scontainer>
      <h2>topページです。</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザ</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;
