import React, { useEffect } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import img1 from '../../assets/images/portfolio/img1.jpg'

const ProductItem = ({productList}) => {

    useEffect(()=>{
        console.log('product 콤포넌트', productList);
    },[productList])

  return (
    <div>
        <Container>
            <Row>
        {productList.map((item)=>(
                
                <Col>
                <Card className="card-shadow">
                    <a href={item.link} className="img-ho"><img className="card-img-top" src={item.image} alt="wrappixel kit" /></a>
                    <CardBody>
                        <h5 className="font-medium m-b-0">{item.title.replace(/(<b>|<\/b>)/g, " ")}</h5>
                        <br></br>
                        <h5 className="font-medium m-b-0">{item.lprice}원</h5>
                        <p className="m-b-0 font-14">{item.category4}</p>
                        <p className="m-b-0 font-14">{item.brand}</p>
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