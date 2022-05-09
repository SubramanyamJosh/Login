import React from "react";
import ProductsList from "../containers/ProductsContainer";
import {Container} from 'reactstrap'

const Dashboard = () => {
    return (
        <Container>
            <h1>Hello</h1>
            <ProductsList/>
        </Container>
    )
}

export default Dashboard