import React, {Component} from 'react'
import { Container, FormControl, Nav, Navbar, Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'

import Blog from '../Pages/Blog'

import logo from './logo192.png'
import Contacts from '../Pages/Contacts'

export default class Header extends Component{
    render(){
        return (
            <>
            <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="logo"
                            /> React site
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/> 
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                            <Nav.Link href="/blog">Blog </Nav.Link>
                        </Nav>
                        <Form className='d-flex'>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contacts" component={Contacts}/>
                    <Route exact path="/blog" component={Blog}/>
                </Switch>
            </Router>
            </>
        )
            
    }
}