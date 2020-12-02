import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
//import Sorting from './sortingVisualizer';
import HomePage from '../home';

class MainFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'AdditcoX',
            home: {
                title: 'DS and Algorithms',
                subTitle: 'Visualizers and Animations',
                container: <div />,
            },
            about: {
                title: 'About us'
            },

            footer: {
                title: 'AddictoX',
                subTitle: 'Development',
                text: 'Built for community by: AdditcoX',
            }
        }
    }

    render = () => {
        return (
            <React.Fragment>
                <Container className="p-0" fluid={true}>
                    <Navbar className={"border-bottom"} variant="dark" id="navId" expand="lg">
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Nav.Link href="/about" className="nav-link">About</Nav.Link>
                                <Nav.Link href="/getStarted" className="nav-link">Get Started</Nav.Link>
                                <Nav.Link href="https://www.github.com" className="nav-link"><i id="github" className="mr-3 fa fa-github" /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        
                    </Navbar>
                    {/*Home page*/}
                    <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} container={this.state.home.container} />
                    <hr style={{
                        visibility: 'hidden',
                    }} />
                </Container>
            </React.Fragment>
            );
    }
}

export default MainFile;