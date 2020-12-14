import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage-component";

function App() {
  return (
    <Switch>
      <div>
        <Route exact path="/" component={Homepage} />
      </div>
    </Switch>
  );
}

export default App;
