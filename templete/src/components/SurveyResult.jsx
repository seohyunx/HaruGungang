import React, { useEffect } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import axios from 'axios'

const SurveyResult = () => {

    useEffect(()=>{
        axios.get("http://localhost:8085/haru/survey")
        .then((res)=>{
            console.log('result', res.data.nutri);
        })
    })

  return (
    <div>
    
    <div className="spacer bg-light">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="7" className="text-center">
                                <h1 className="title font-bold">설문 결과</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="spacer">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="7" className="text-center">
                                <h3 className="title">하루 건강이 추천하는 영양제</h3>
                            </Col>
                        </Row>
                        <Row className="m-t-40">
                            <Col md="4">
                                <Card className="card-shadow">
                                    <a href="#" className="img-ho"><img className="card-img-top" alt="wrappixel kit" /></a>
                                    <CardBody>
                                        <h5 className="font-medium m-b-0">Branding for Theme Designer</h5>
                                        <p className="m-b-0 font-14">Digital Marketing</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-shadow">
                                    <a href="#" className="img-ho"><img className="card-img-top" alt="wrappixel kit" /></a>
                                    <CardBody>
                                        <h5 className="font-medium m-b-0">Button Designs Free</h5>
                                        <p className="m-b-0 font-14">Search Engine</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-shadow">
                                    <a href="#" className="img-ho"><img className="card-img-top" alt="wrappixel kit" /></a>
                                    <CardBody>
                                        <h5 className="font-medium m-b-0">Branding & Co Agency</h5>
                                        <p className="m-b-0 font-14">Admin templates</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="7" className="text-center">
                                <h3 className="title">30대 남성이 최근 많이 검색한 영양제</h3>
                            </Col>
                        </Row>
                        <Row className="m-t-40">
                            <Col md="4">
                                <Card className="card-shadow">
                                    <a href="#" className="img-ho"><img className="card-img-top" alt="wrappixel kit" /></a>
                                    <CardBody>
                                        <h5 className="font-medium m-b-0">Branding for Theme Designer</h5>
                                        <p className="m-b-0 font-14">Digital Marketing</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-shadow">
                                    <a href="#" className="img-ho"><img className="card-img-top" alt="wrappixel kit" /></a>
                                    <CardBody>
                                        <h5 className="font-medium m-b-0">Button Designs Free</h5>
                                        <p className="m-b-0 font-14">Search Engine</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="card-shadow">
                                    <a href="#" className="img-ho"><img className="card-img-top" alt="wrappixel kit" /></a>
                                    <CardBody>
                                        <h5 className="font-medium m-b-0">Branding & Co Agency</h5>
                                        <p className="m-b-0 font-14">Admin templates</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </div>
  )
}

export default SurveyResult