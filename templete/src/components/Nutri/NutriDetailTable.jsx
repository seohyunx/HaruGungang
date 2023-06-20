import React, { useState } from 'react'
import { Alert, Container, Row, Col } from 'reactstrap';
import axios from 'axios'


const NutriDetailTable = ({setWithNotNutri, setWithNutri, setDailyRecTake, setIntake, setEffect, nutri_name, effect, intake, dailyRecTake, withNutri, withNotNutri}) => {

    useState(()=>{
        console.log('선택한 영양성분 :',  nutri_name);
        axios.get(`http://localhost:8085/haru/nutridetail/${nutri_name}`)
        .then((res)=>{
            console.log('nutridetail 통신성공',res.data);
            //변수에 응답받은 데이터 저장
            console.log(res.data.recNutri);
            let info = res.data.recNutri
            setEffect(info.nutri_effect)
            setIntake(info.taking_guide)
            setDailyRecTake(info.rec_intake + info.intake_unit)
            setWithNutri(info.with_supplement)
            setWithNotNutri(info.forbid_supplement)
        })
        .catch((e)=>{
            console.log('error : ', e);
        })
    },[])


  return (
    <div>
                <Container>
                <Row>
                    <Col md="12">
                        <Alert color="info">
                            <h6>효능</h6>
                            {effect}
                            </Alert>
                        <Alert color="info">
                            <h6>복용방법</h6>
                            {intake}
                            </Alert>
                        <Alert color="info">
                            <h6>1일권장섭취량</h6>
                            {dailyRecTake}
                            </Alert>
                        <Alert color="info">
                            <h6>함께 섭취하면 좋아요</h6>
                            {withNutri}
                            </Alert>
                        <Alert color="info">
                            <h6>함께 섭취하면 좋지 않아요</h6>
                            {withNotNutri}
                            </Alert>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default NutriDetailTable