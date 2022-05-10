import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";
import ProductsList from "../containers/ProductsContainer";

const AllRoutes = () => {

    return (
        <Router>
            <Routes>
                {/* <Route exact path='/' component={LoginContainer} />
                <Route exact path='/dashboard' component={ProductsList}/> */}
                <Route exact path="/" element={<LoginContainer/>}/>
                <Route exact path="/dashboard" element={<ProductsList/>}/>
            </Routes>
        </Router>
    )
}

export default AllRoutes