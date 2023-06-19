import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router'
import axios from 'axios'
import { Container, Row, Col, Button } from 'reactstrap'

const ProductDetail = ({addWishList, title, setTitle}) => {

    let {productId} = useParams()
    const location = useLocation();
    const [img, setImg]  = useState("")

    // 제품 정보 변수 
    //1행
    
    const [price, setPrice] = useState()
    const [packageUnit, setPackageUnit] = useState()
    const [nutri, setNutri] = useState("")
    const [menufacturer, setMenufacturer] = useState("")
    //2행
    const [dailyPrice, setDailyPrice] = useState()
    const [dailyIntake, setDailyIntake] = useState("")
    const [withGood, setWithGood] = useState([])
    const [withBad, setWithBad] = useState([])
    //3행
    const [dayMany, setDayMany] = useState("")
    const [dayTimes, setDayTimes] = useState("")
    const [dayWhen, setDayWhen] = useState("")
    const [bfAfMeal, setBfAfMeal] = useState("")
    const [note, setNote] = useState("")
    //버튼
    const [url, setUrl] = useState("")


    useEffect(()=>{
        console.log('productId :', productId);
        setImg(location.state.img)
        setWithGood(location.state.withNutri)
        setWithBad(location.state.withNotNutri)
        setDailyIntake(location.state.dailyRecTake)
        console.log(img);
        axios.get(`http://localhost:8085/haru/product/${productId}`)
        .then((res)=>{
            console.log('제품상세페이지 통신성공', res.data);
            let data = res.data.recNutri
            setTitle(data.detail_name)
            setPrice(data.detail_price)
            setPackageUnit(data.pack_unit + data.shape)
            setNutri(data.nutri_name)
            setMenufacturer(data.manufacturer)
            setDailyPrice(data.detail_price / parseInt(data.pack_unit) / (data.day_many * parseInt(data.day_times)))
            setDayMany(data.day_many)
            setDayTimes(data.day_times)
            setDayWhen(data.day_when)
            setBfAfMeal(data.bf_af_meal)
            setNote(data.intake_precaution)
            setUrl(data.detail_url)
        })
        .catch((e)=>{
            console.log('error : ', e);
        })
    },[])

    useEffect(()=>{
        console.log('img url :', img);
    },[img])


  return (
    <div>
        <Container >
            <Row>
                <Col>
                    <img src={`${img}`}></img>
                </Col>
                <Col>
                    <h6>{title}</h6>
                    <p>{price}원 | {packageUnit}</p>
                    <p>{nutri}</p>
                    <p>{menufacturer}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row><h6>가격</h6></Row>
                    <Row><p>하루에 <span>{dailyPrice}원</span></p></Row>
                </Col>
                <Col>
                    <Row><h6>일일권장섭취량</h6></Row>
                    <Row><p>{dailyIntake}mg</p></Row>
                </Col>
                <Col>
                    <Row><h6>상호작용</h6></Row>
                    <Row>
                        <Col>{withGood}</Col>
                        <Col>{withBad}</Col>
                    </Row>                
                </Col>
            </Row>
            <Row>
                <Row><h6>섭취방법</h6></Row>
                <Row>
                    <Col>{dayMany}</Col>
                    <Col>{dayTimes}</Col>
                    <Col>{dayWhen}</Col>
                    <Col>{bfAfMeal}</Col>
                </Row>
            </Row>
            <Row>
                <Row>섭취주의사항</Row>
                <Row>{note}</Row>
            </Row>
            <Row>
                <Button onClick={()=>{window.location.href=`${url}`}}>상품 URL 연결</Button>
                <Button onClick={addWishList}>제품 찜하기</Button>
            </Row>
        </Container>
    </div>
  )
}

export default ProductDetail