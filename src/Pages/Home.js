import React, {Component} from 'react'
import { Container, Card } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'
import { Col } from 'react-bootstrap'
import {Button} from 'react-bootstrap';
export default class Home extends Component{
    render(){
        return(
            <>
            <CarouselBox/>

            <Container>
                <h2 className="text-center m-4">Our Team</h2>
                <Col className="container-fluid mt-4">
                
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card.Img>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                :disfk asx;vak ewdas wevz AD WE XCV WASDXFA foWow4aVt27bR8e2DrSA8KxHTDpqgf19y4PnxrYRWN1IEwNUwpSvF6Q19hJvdtUVGHslNbp45c2ZzMvZjLrkUdoSvy3rMb9wR
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card.Img>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                :disfk asx;vak ewdas wevz AD WE XCV WASDXFA foWow4aVt27bR8e2DrSA8KxHTDpqgf19y4PnxrYRWN1IEwNUwpSvF6Q19hJvdtUVGHslNbp45c2ZzMvZjLrkUdoSvy3rMb9wR
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card.Img>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                :disfk asx;vak ewdas wevz AD WE XCV WASDXFA foWow4aVt27bR8e2DrSA8KxHTDpqgf19y4PnxrYRWN1IEwNUwpSvF6Q19hJvdtUVGHslNbp45c2ZzMvZjLrkUdoSvy3rMb9wR
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card.Img>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                :disfk asx;vak ewdas wevz AD WE XCV WASDXFA foWow4aVt27bR8e2DrSA8KxHTDpqgf19y4PnxrYRWN1IEwNUwpSvF6Q19hJvdtUVGHslNbp45c2ZzMvZjLrkUdoSvy3rMb9wR
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>

                </Col>
            </Container>
            </>
        )
    }
}