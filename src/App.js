import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="app">
      <Navbar />
     <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route path="/people">
          <People />
        </Route>

        <Route path="/locations">
          <Locations />
        </Route>

     </Switch>
    </div>
  );
}

export default App;