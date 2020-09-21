import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Places from './components/Place/Places';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Hotels from './components/Hotels/Hotels';
import Maps from './components/Map/Maps';

 export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (   
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
         
      <Router> 
      <Header/>
        <Switch>
          <Route  path="/home">
          <Home></Home>
          </Route>
          <Route path="/places">
            <Places></Places>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route path="/placedetails/:id">
            <PlaceDetails></PlaceDetails>
          </Route>
          <PrivateRoute path="/hotels">
          <Hotels></Hotels>
          </PrivateRoute>
          <Route path="*">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>    
    
  );
}

export default App;
