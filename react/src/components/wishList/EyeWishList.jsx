import React, { useState } from 'react'
import { Button, Row, Col, Container, Card, FormGroup, Input } from 'reactstrap';
import WishItem from './WishItem';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

<<<<<<< HEAD:templete/src/components/wishList/EyeWishList.jsx
const EyeWishList = ({eyeList, userId, checkedAllItemHandler}) => {
=======
const EyeWishList = ({eyeList, userId, checkedAllItemHandler, setWishNum}) => {
>>>>>>> ksy:react/src/components/wishList/EyeWishList.jsx

    const nav = useNavigate()

  //체크박스 기능
  //선택된 체크박스 세트
  const [checkedItems, setCheckedItems] = useState(new Set())
<<<<<<< HEAD:templete/src/components/wishList/EyeWishList.jsx
=======
  const [checkedCnt, setCheckedCnt] = useState(0)
>>>>>>> ksy:react/src/components/wishList/EyeWishList.jsx

  const checkedItemHandler = (id, isChecked) => {
    console.log('checkedItemHandler', id);

    if(isChecked){
<<<<<<< HEAD:templete/src/components/wishList/EyeWishList.jsx
      
      // map.set("product_id", id)
      checkedItems.add(id)
      setCheckedItems(checkedItems)
        console.log('is checked', checkedItems);
=======
  
      checkedItems.add(id)
      setCheckedItems(checkedItems)
        console.log('is checked', checkedItems);
        setCheckedCnt(checkedCnt+1)
>>>>>>> ksy:react/src/components/wishList/EyeWishList.jsx
    }else if(!isChecked && checkedItems.has(id)){
      checkedItems.delete(id)
      setCheckedItems(checkedItems)
      console.log('no checked', checkedItems);
<<<<<<< HEAD:templete/src/components/wishList/EyeWishList.jsx
=======
      setCheckedCnt(checkedCnt-1)
>>>>>>> ksy:react/src/components/wishList/EyeWishList.jsx
    }

    if(checkedItems.size > 3){
        alert('4개 이상의 제품은 비교가 불가능합니다. ')
    }
  }

<<<<<<< HEAD:templete/src/components/wishList/EyeWishList.jsx
  return (
    <div>
        <h5>눈 건강</h5>
=======
  useEffect(()=>{
    console.log('eyewishlist checkeditems', checkedItems);
  },[checkedItems])

  return (
    <div>
        <h4 className='title font-bold'>눈 건강</h4>
>>>>>>> ksy:react/src/components/wishList/EyeWishList.jsx
        <FormGroup>
        <Container>
            <Row className="m-t-40 justify-content-center">
        {eyeList.map((item)=>(
<<<<<<< HEAD:templete/src/components/wishList/EyeWishList.jsx
            <WishItem userId={userId} item={item} checkedItemHandler={checkedItemHandler} checkedAllItemHandler={checkedAllItemHandler}/>
        ))}
        </Row>
        </Container>
        <Button color="success" onClick={()=>{nav("/haru/wishlist/samenutri", {state : {checkedItem : checkedItems}})}}>동일 영양성분군 비교하기</Button>
=======
          <Col xs="4">
            <WishItem userId={userId} item={item} checkedItemHandler={checkedItemHandler} checkedAllItemHandler={checkedAllItemHandler} setWishNum={setWishNum}/>
          </Col>
        ))}
        </Row>
        </Container>
        {checkedCnt!=0 && 
        <Button color="success" onClick={()=>{nav("/haru/wishlist/samenutri", {state : {checkedItems : checkedItems}})}}>동일 영양성분군 비교하기</Button>}
>>>>>>> ksy:react/src/components/wishList/EyeWishList.jsx
        </FormGroup>
    </div>
  )
}

export default EyeWishList