import React from 'react'
import PropTypes from 'prop-types'

import { Container, Card, CardBody, Row, Col, Form, FormGroup, Label, Input, Button,FormFeedback } from 'reactstrap'

const LoginComponent = ({ state,dispatch,
    onLogin}) => {
    return (
        <Container className="d-flex flex-column justify-content-center h-100-vh">
            <Row className='col-md-6 offset-md-3'>
                <Col>
                    <Card>
                        <CardBody>

                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="with a placeholder"
                                        type="email"
                                        value={state.username}
                                        onChange = { e => dispatch({type : 'username',value : e.target.value})}
                                        invalid={state.usernameError !== null} 
                                    />
                                    <FormFeedback >
                                        {state.usernameError}
                                    </FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="password placeholder"
                                        type="password"
                                        value={state.password}
                                        onChange={e => dispatch({type : 'password', value: e.target.value})}
                                        invalid={state.passwordError !== null}
                                    />
                                    <FormFeedback >
                                        {state.passwordError}
                                    </FormFeedback>
                                </FormGroup>
                                <Button onClick={onLogin}>Login</Button>
                            </Form>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginComponent

LoginComponent.propTypes = {
   
    onLogin : PropTypes.func.isRequired
}