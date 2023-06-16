/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import SurveyBirthYear from './SurveyBirthYear';
import SurveyContext from '../SurveyContext';

const SurveyGender = () => {
    
    const{setGender} = useContext(SurveyContext)
    const{gender}=useContext(SurveyContext)

    const selectGender = (e)=>{
        setGender(e.target.value)
        console.log(gender);
    }


    const moveNextPage = ()=>{
        window.location.replace("/haru/survey/1")
    }

    return (
        <div className="wrapper">

            <div className="middle-spacer" id="card-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">성별을 알려주세요.</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
                <div id="gender-select">
                    <Button className="gender-btn" color="success" name="gender" value="man" onClick={selectGender}>남성</Button>
                    <Button className="gender-btn" color="success" name="gender" value="woman" onClick={selectGender}>여성</Button>
                </div>
                <Button color="success" size='lg' onClick={moveNextPage}>다음</Button>
        </div>
    );
}

export default SurveyGender;
