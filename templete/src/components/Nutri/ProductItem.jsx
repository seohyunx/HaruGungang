import React, { useContext, useEffect, useState } from 'react'
import { Row, Col, Container, Card, CardBody, Button } from 'reactstrap';
import img1 from '../../assets/images/portfolio/img1.jpg'
import { useNavigate } from 'react-router';
import axios from 'axios';

const ProductItem = ({productList, withNotNutri, withNutri, dailyRecTake}) => {

    const nav = useNavigate();

    useEffect(()=>{
        console.log('product 콤포넌트', productList);
    },[productList])

    const moveToProductDetail = ({item})=>{
        console.log('moveToProductDetail')
        nav(`/haru/product/${item.productId}`, {
            state: {
                img: `${item.image}`,
                withNutri: `${withNutri}`,
                withNotNutri: `${withNotNutri}`,
                dailyRecTake: `${dailyRecTake}`
            }
        })
    }

  return (
    <div>
        <Container>
            <Row>
        {productList.map((item)=>(
            <Col>
                <Card className="card-shadow" onClick={()=>{moveToProductDetail({item})}}>
                    <img className="card-img-top" src={item.image} alt="wrappixel kit" />
                    <CardBody>
                        <h5 className="font-medium m-b-0">{item.title.replace(/(<b>|<\/b>)/g, " ")}</h5>
                        <br></br>
                        <h5 className="font-medium m-b-0">{item.lprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h5>
                    </CardBody>
                </Card>
                </Col>
        ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductItem