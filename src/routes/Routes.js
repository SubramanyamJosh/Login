import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";
import ProductsList from "../containers/ProductsContainer";

const Routes = () => {

    return (
        <Router>
            <Switch>
                debugger;
                {/* <Route exact path='/' component={LoginContainer} />
                <Route exact path='/dashboard' component={ProductsList}/> */}
                <Route exact path="/"><LoginContainer/></Route>
                <Route exact path="/dashboard"><ProductsList/></Route>
            </Switch>
        </Router>
    )
}

export default Routes