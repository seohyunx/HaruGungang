import React, { useState } from 'react'
import { Button, Row, Col, Container, Card, FormGroup, Input } from 'reactstrap';
import WishItem from './WishItem';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const LiverWishList = ({liverList, userId, checkedAllItemHandler}) => {

    const nav = useNavigate()

    //체크박스 기능
    //선택된 체크박스 세트
    const [checkedItems, setCheckedItems] = useState(new Set())
<<<<<<< HEAD:templete/src/components/wishList/LiverWishList.jsx
=======
    const [checkedCnt, setCheckedCnt] = useState(0)
>>>>>>> ksy:react/src/components/wishList/LiverWishList.jsx
  
    const checkedItemHandler = (id, isChecked) => {
      console.log('checkedItemHandler', id);
  
      if(isChecked){
          
        checkedItems.add(id)
        setCheckedItems(checkedItems)
          console.log('is checked', checkedItems);
<<<<<<< HEAD:templete/src/components/wishList/LiverWishList.jsx
=======
          setCheckedCnt(checkedCnt+1)
>>>>>>> ksy:react/src/components/wishList/LiverWishList.jsx
      }else if(!isChecked && checkedItems.has(id)){
        checkedItems.delete(id)
        setCheckedItems(checkedItems)
        console.log('no checked', checkedItems);
<<<<<<< HEAD:templete/src/components/wishList/LiverWishList.jsx
=======
        setCheckedCnt(checkedCnt-1)
>>>>>>> ksy:react/src/components/wishList/LiverWishList.jsx
      }
  
      if(checkedItems.size > 3){
          alert('4개 이상의 제품은 비교가 불가능합니다. ')
      }
    }

  return (
    <div>
<<<<<<< HEAD:templete/src/components/wishList/LiverWishList.jsx
        <h5>간 건강</h5>
        <FormGroup>
        <Container>
            <Row className="m-t-40 justify-content-center">
        {liverList.map((item)=>(
            <WishItem item={item} userId={userId} checkedItemHandler={checkedItemHandler} checkedAllItemHandler={checkedAllItemHandler}/>
        ))}
        </Row>
        </Container>
        <Button color="success" onClick={()=>{nav("/haru/wishlist/samenutri", {state : {checkedItem : checkedItems}})}}>동일 영양성분군 비교하기</Button>
=======
        <h4 className='title font-bold'>간 건강</h4>
        <FormGroup>
        <Container>
        <Row className="m-t-40 justify-content-center">
        {liverList.map((item)=>(
          <Col xs="4">
            <WishItem item={item} userId={userId} checkedItemHandler={checkedItemHandler} checkedAllItemHandler={checkedAllItemHandler}/>
          </Col>
        ))}
        </Row>
        </Container>
        {checkedCnt!=0 && 
        <Button color="success" onClick={()=>{nav("/haru/wishlist/samenutri", {state : {checkedItems : checkedItems}})}}>동일 영양성분군 비교하기</Button>}
>>>>>>> ksy:react/src/components/wishList/LiverWishList.jsx
        </FormGroup>
    </div>
  )
}

export default LiverWishList