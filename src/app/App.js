import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import CardStudent from "./components/cardStudent";
import EditCardStudent from "./components/editCardStudent";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/edit" component={EditCardStudent} />
                <Route path="/" component={CardStudent} />
            </Switch>
        </div>
    );
}

export default App;
