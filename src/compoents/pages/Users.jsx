import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organiisms/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: "hogehoge",
    image: "https://source.unsplash.com/gKXKBY-C-Dk",
    email: "sample@sam.com",
    phone: "333-333-4444",
    company: {
      name: "ple",
      website: "http://ddd.com"
    }
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>Usersページです。</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  /* color: red; */
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
