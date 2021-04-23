import { Switch, Route } from "react-router-dom";
import Welcome from "./Components/Welcome"
import Home from "./Components/Home"
import Characters from "./Pages/Characters"
import Movies from "./Pages/Movies"
import Species from "./Pages/Species"
import Planets from "./Pages/Planets"

function App() {
  return (
    <div>
     <Switch>
       <Route path="/StarWarsWiki" exact component={Welcome}/>
       <Route path="/home" exact component={Home}/>
       <Route path="/characters" exact component={Characters}/>
       <Route path="/movies" exact component={Movies}/>
       <Route path="/species" exact component={Species}/>
       <Route path="/map" exact component={Planets}/>
     </Switch>
    </div>
  );
}

export default App;
