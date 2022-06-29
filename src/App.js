import './App.css';
import NavBar from "./components/navigation/NavBar";
import Home from "./pages/Home";
import {Route, Switch} from "react-router-dom";
import Signup from "./pages/registration/Signup";
import SignIn from "./pages/signin/SignIn";
import Profile from "./pages/profile/Profile";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import Favorite from "./pages/favorite/Favorite";

function App() {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="App">
      <NavBar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/signup'>
            <Signup/>
          </Route>
          <Route path='/signIn'>
            <SignIn/>
          </Route>
          {isAuth && <Route path='/profile'>
            <Profile/>
          </Route>}
          { isAuth && <Route path='/favorite'>
            <Favorite/>
          </Route> }
        </Switch>
    </div>
  );
}

export default App;
