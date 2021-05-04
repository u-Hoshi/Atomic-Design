import { PrimaryButton } from "./compoents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./compoents/atoms/button/SecondaryButton";
import { SearchInput } from "./compoents/molecules/SearchInput";
import { UserCard } from "./compoents/organiisms/UserCard";
import "./styles.css";

const user = {
  name: "hogehoge",
  image: "https://source.unsplash.com/gKXKBY-C-Dk",
  email: "sample@sam.com",
  phone: "333-333-4444",
  company: {
    name: "ple",
    website: "http://ddd.com"
  }
};

export default function App() {
  return (
    <div className="App">
      <h1>atomic design</h1>
      <PrimaryButton>テストテスト</PrimaryButton>
      <SecondaryButton>サンプル</SecondaryButton>
      <br />
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
