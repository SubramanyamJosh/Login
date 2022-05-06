import React from 'react'
import PropTypes from 'prop-types'

import { Container, Card, CardBody, Row, Col, Form, FormGroup, Label, Input, Button,FormFeedback } from 'reactstrap'

const LoginComponent = ({username,password,setUsername,setPassword,onLogin}) => {
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
                                        value={username}
                                        onChange = { e => setUsername(e.target.value)}
                                    />
                                    <FormFeedback tooltip>
                                        Invalid Email
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
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <FormFeedback tooltip>
                                        invalid Password
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
    username : PropTypes.string.isRequired,
    password : PropTypes.string.isRequired,
    setUsername : PropTypes.func.isRequired,
    setPassword : PropTypes.func.isRequired,
    onLogin : PropTypes.func.isRequired
}