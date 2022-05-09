
import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Button } from 'reactstrap'

const ProductCard = (props) => {
    const { category, name, stocked, price, description } = props.product

    return (
        <div>
            <Card className='mb-5'>
                <CardHeader >
                   <h3> {name}</h3>
                   {!stocked && <p>Out of stock</p>}
                </CardHeader>
                <CardBody>
                    <CardTitle >
                        category : {category}
                    </CardTitle>
                    <CardText>
                        {description}
                    </CardText>
                    <Button>
                        Add to Cart
                    </Button>
                </CardBody>
                <CardFooter className="text-muted">
                    Price: ${price}
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProductCard