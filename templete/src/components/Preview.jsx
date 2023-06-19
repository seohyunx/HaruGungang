import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Preview = () => {
  return (
    <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="" className="align-self-center text-center">
                        <h1 className="intro"></h1>
                        <h1 className="intro"></h1>
                        {/* <h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4> */}
                        <div className="intro_btn">
                        <button className="intro_btns" type="button" class="btn btn-success btn-lg"><Link to="/haru/survey">설문하고 추천받기</Link></button> {" "}
                        <button className="intro_btns" type="button" class="btn btn-success btn-lg"><Link to="/haru/main">기능성 검색하기</Link></button>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Preview