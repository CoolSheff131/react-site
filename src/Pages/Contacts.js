import React, {Component} from 'react'
import { Container, Form } from 'react-bootstrap'
import {Button} from 'react-bootstrap';

export default class Contacts extends Component {
    
    render(){
        return(
            
           <div>
               <Container style={{width: '500px'}}>
                <h1 className="text-center"> Contact us</h1>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text>
                            We'll never share your email with anyone else
                        </Form.Text>
                    </Form.Group>

                     <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                     </Form.Group>

                     <Form.Group controlId="formBasicPassword">
                        <Form.Check type="checkbox" label="check me out">Example textarea</Form.Check>
                        <Button variant="primary" type="submit">Submit</Button>
                     </Form.Group>

                </Form>
            </Container>
           </div>
  
        )
    }
}