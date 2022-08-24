import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { Box, Stack, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import Home from "./Home";
import SigninSearching from "./SigninSearching";
import SigninService from "./SigninService";
import Login from "./Login";
import UserDashboard from "./userDashboard/UserDashboard";
import SigninFork from "./SigninFork";
import LandingPage from "./LandingPage";
import ServiceProviderDashboard from "./ServiceProviderDashboard/ServiceProviderDashboard";
import EventCreate from "./userDashboard/EventCreate";
import EventCreateNew from "./Event/EventCreateNew";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/SigninSearching">
          <SigninSearching/>
        </Route>
        <Route path="/SigninService">
          <SigninService/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
        <Route path="/UserDashboard">
          <UserDashboard/>
        </Route>
        <Route path="/SigninFork">
          <SigninFork/>
        </Route>
        {/* <Route path="/LandingPage">
          <LandingPage/>
        </Route> */}
        <Route path="/ServiceProviderDashboard">
          <ServiceProviderDashboard/>
        </Route>
        <Route path="/EventCreate">
          <EventCreate/>
        </Route>
        <Route>
          <EventCreateNew/>
        </Route>
      </Switch> 
    </Router>
    
  );
}

export default App;
