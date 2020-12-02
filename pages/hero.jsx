import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './_styles/hero.module.css';
const HeroPage = (props) => {
    return (
        <Jumbotron className={"bg-transparent jumbotron-fluid p-0 "}>
            <Container fluid={true}>
                <Row className={"justify-content-center py-5 " + styles.backColor}>
                    <Col md={8} sm={12}>
                        {props.title && <h1 className="display-1 font-weight-bolder" style={{
                            fontSize: '6vw',
                            color: 'white',
                        }}>{props.title}</h1>}
                        {props.subTitle && <h3 className="display-4 font-weight-light" style={{
                            fontSize: '3vw',
                            color: 'white',
                        }}>{props.subTitle}</h3>}
                        {props.text && <div className="mx-auto"><h3 className="lead font-weight-light" style={{
                            fontSize: '0.8vw',
                            color: 'white',
                        }}>{props.text}</h3></div>}
                        {props.container && <div className="mx-auto">{props.container}</div>}
                        
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default HeroPage;