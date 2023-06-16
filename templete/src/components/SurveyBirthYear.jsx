import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import Form from 'react-bootstrap/Form';

const SurveyBirthYear = () => {

//   const checkBirthYear = (e)=>{
//     setBirthYear(e.currentTarget.value)
//   }
  const moveNextPage = ()=>{     
    console.log('페이지이동'); 
      window.location.replace("/haru/survey/2")
  }

//   useEffect(()=>{
//     console.log(birthYear);
//     console.log(gender);
//   },[birthYear])

  const [yearList, setYearList] = useState([])

  let list = []

  useEffect(()=>{
      addList();
      setYearList(list)
  },[])

  const addList = ()=> {
      for(let i = 1930 ; i <= 2013 ; i++){
          list.push(i)
      }
  }

  return (
    <div className="wrapper">
            <div className="middle-spacer survey-year">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">태어난 연도를 알려주세요.</h1>
                        </Col>
                    </Row>
                </Container>
                <Form.Select aria-label="Default select example" name="selectAge" className="justify-content-center select-box">
                {
                yearList.map((item)=>(
                    <option value={item}>{item}년</option>
                ))}
            </Form.Select>
            <Button color="success" size='lg' onClick={moveNextPage}>다음</Button>
            </div>
        </div>
  )
}

export default SurveyBirthYear