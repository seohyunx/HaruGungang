import React, { useEffect } from 'react'
import { Card, Button, Row, Col, Container } from 'reactstrap';
import axios from 'axios'

const SurveyInterest = () => {


  const moveNextPage = ()=>{


    // let data = interest

    // axios.post('http://localhost:8085/haru/survey', data)
    // .then((res)=>{
    //     console.log('통신성공');
    // }).catch((e)=>{
    //     console.log('error', e);
    // })

    // window.location.replace("/haru/survey/result")
  }

  return (
    <div className="survey-interest-wrapper">
            <div className="middle-spacer" id="card-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h4 className="title font-bold">불편하거나 걱정되는 것을 3가지 선택해 주세요.</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="survey-select-submit">

             <div className='select-interest'>
              <Button type="button" className="btn waves-effect waves-light btn-outline-primary select-interst-item">소화, 장</Button>
              <Button type="button" className="btn waves-effect waves-light btn-outline-primary select-interst-item">눈</Button>
              <Button type="button" className="btn waves-effect waves-light btn-outline-primary select-interst-item">혈관, 혈액순환</Button>
              <Button type="button" className="btn waves-effect waves-light btn-outline-primary select-interst-item">간</Button>
              <Button type="button" className="btn waves-effect waves-light btn-outline-primary select-interst-item">뼈, 관절</Button>
              <Button type="button" className="btn waves-effect waves-light btn-outline-primary select-interst-item">항산화</Button>
             </div>
 
            <Button id="interest-submit" className="next-btn" color="success" onClick={moveNextPage}>결과확인</Button>
            </div>

        </div>
  )
}

export default SurveyInterest