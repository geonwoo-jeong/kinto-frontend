import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/header";
import CreateAccount from "../pages/create-account";
import LineUp from "../pages/lineup";
import Login from "../pages/login";

export const LoggedOutRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/lineup" exact>
          <LineUp />
        </Route>
        <Route path="/lineup/toyota" exact>
          <CreateAccount />
        </Route>
        <Route path="/lineup/lexus" exact>
          <CreateAccount />
        </Route>
        <Route path="/create-account" exact>
          <CreateAccount />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
