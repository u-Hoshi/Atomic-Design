import { BrowserRouter, Route, Link } from "react-router-dom";
import { PrimaryButton } from "./compoents/atoms/button/PrimaryButton";
import { SecondaryButton } from "./compoents/atoms/button/SecondaryButton";
import { SearchInput } from "./compoents/molecules/SearchInput";
import { UserCard } from "./compoents/organiisms/UserCard";
import { HeaderOnly } from "./compoents/templates/HeaderOnly";
import { DefaultLayout } from "./compoents/templates/DefaultLayout";
import { Router } from "./router/Router";

import "./styles.css";
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <UserProvider>
          <Router />
        </UserProvider>
      </RecoilRoot>
    </>
  );
}
