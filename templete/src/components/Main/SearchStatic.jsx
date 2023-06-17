import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Chart from './Chart';
import Filter from './Filter';
import axios from 'axios';
const SearchStatic = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://172.30.1.42:8050/haru/main')
        .then((res)=>{
        console.log('res: ', res.data);
        }).catch((e)=>{
            if (e.response) {
                // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
                console.log(e.response.data);
                console.log(e.response.status);
                console.log(e.response.headers);
              }
              else if (e.request) {
                // 요청이 이루어 졌으나 응답을 받지 못했습니다.
                // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
                // Node.js의 http.ClientRequest 인스턴스입니다.
                console.log(e.request);
              }
              else {
                // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
                console.log('Error', e.message);
              }
              console.log(e.config);
        })
    },[])

  return (
    <div>
        <Container>
        <Row className="justify-content-center">
            <Col md="7" className="text-center">
                <h2 className="title">최근 3개월간 사람들이 많이 찾은 영양제는?</h2>
            </Col>
        </Row>
        <Row className="m-t-40">
           <Chart data={data}/>
           <Filter/>
        </Row>
    </Container>
    </div>
  )
}

export default SearchStatic