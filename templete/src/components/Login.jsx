import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, NavItem } from 'reactstrap';

//아이콘 import
import kakaoBtn from "../assets/images/snslogin/kakao.png"
import naverBtn from "../assets/images/snslogin/naver.png"

const Login = () => {
  return (
    <div>            <div className="spacer" id="forms-component">
    <Container>
        <Row className="justify-content-center">
            <Col md="7" className="text-center">
                <h1 className="title font-bold">로그인</h1>
            </Col>
        </Row>
    </Container>
</div>
<Container>
    <Row>
        <Col md="12">
            <Form className="col">
                <FormGroup className="col-md-6">
                    <Label htmlFor="id">ID</Label>
                    <Input type="text" className="form-control" id="id" placeholder="Enter id" />
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" className="form-control" id="password" placeholder="Password" />
                </FormGroup>
                <FormGroup className="col-md-12 ml-3">
                    <Input id="checkbox1" type="checkbox" />
                    <Label htmlFor="checkbox1"> Remember me </Label>
                </FormGroup>
                <Col md="12">
                    <Button type="submit" className="btn btn-success waves-effect waves-light m-r-10">Submit</Button>
                    <Button type="button" className="btn btn-inverse waves-effect waves-light" onClick={()=>{window.location.href="/haru/join"}}>회원가입</Button>
                    <a href='https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=9682bae209042aa5b5a5dde259553bc4&redirect_uri=http://localhost:8081/auth/kakao/callback'>
                        <img src={kakaoBtn} width='180px'/>
                    </a>
                    <a href='https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=4aWJJDtBTDQlg2SlFym8&state=STATE_STRING&redirect_uri=http://localhost:8081/auth/naver/callback'>
                        <img src={naverBtn} width='180px'/>
                    </a>
                </Col>
            </Form>
        </Col>
    </Row>
</Container></div>
  )
}

export default Login