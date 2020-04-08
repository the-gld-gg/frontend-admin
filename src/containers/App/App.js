import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import customTheme from "./../../configs/customTheme"
import Login from "./../../pages/Login/Login"
import Dashboard from "./../../pages/Dashboard/Dashboard"
import Users from "./../../pages/Users/Users"
import "./base.min.css"


const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage && localStorage.getItem('user') ? (
          React.cloneElement(children, { 
            user: JSON.parse(localStorage.getItem('user'))
          })
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const App = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/users">
            <Users />
          </PrivateRoute>
        </Switch>
      </Router>
    </ThemeProvider>
  )
};

export default App