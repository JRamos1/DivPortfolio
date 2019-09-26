import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import MainPage from "./pages/MainPage";
import PortfolioPage from "./pages/PortfolioPage";
import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"
import WatchlistPage from "./pages/Watchlist"
function App() {
  return (

    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path ="/Portfolio" component={PortfolioPage} />
        <Route exact path ="/signup" component={SignUpPage} />
        <Route path = "/signin" component={SignInPage} />
        <Route path = "/Watchlist" component={WatchlistPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;