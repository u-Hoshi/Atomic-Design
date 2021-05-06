import { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = memo(() => {
  return (
    <SConatiner>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SConatiner>
  );
});

const SConatiner = styled.div`
  display: flex;
  /* justify-content: center; */
  align-content: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
