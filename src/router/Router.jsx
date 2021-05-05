import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../compoents/pages/Top";
import { Users } from "../compoents/pages/Users";
import { DefaultLayout } from "../compoents/templates/DefaultLayout";
import { HeaderOnly } from "../compoents/templates/HeaderOnly";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          </Route>
          <Route path="/users">
            <HeaderOnly>
              <Users />
            </HeaderOnly>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
