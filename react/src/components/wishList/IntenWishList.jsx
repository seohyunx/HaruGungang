import React, { useState } from 'react'
import { Button, Row, Col, Container, Card, FormGroup, Input } from 'reactstrap';
import WishItem from './WishItem';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const IntenWishList = ({intenList, userId, checkedAllItemHandler}) => {

  const nav = useNavigate()

  //체크박스 기능
  //선택된 체크박스 세트
  const [checkedItems, setCheckedItems] = useState(new Set())
<<<<<<< HEAD:templete/src/components/wishList/IntenWishList.jsx
=======
  const [checkedCnt, setCheckedCnt] = useState(0)
>>>>>>> ksy:react/src/components/wishList/IntenWishList.jsx

  const checkedItemHandler = (id, isChecked) => {
    console.log('checkedItemHandler', id);

    if(isChecked){
        
      checkedItems.add(id)
      setCheckedItems(checkedItems)
        console.log('is checked', checkedItems);
<<<<<<< HEAD:templete/src/components/wishList/IntenWishList.jsx
=======
        setCheckedCnt(checkedCnt+1)
>>>>>>> ksy:react/src/components/wishList/IntenWishList.jsx
    }else if(!isChecked && checkedItems.has(id)){
      checkedItems.delete(id)
      setCheckedItems(checkedItems)
      console.log('no checked', checkedItems);
<<<<<<< HEAD:templete/src/components/wishList/IntenWishList.jsx
=======
      setCheckedCnt(checkedCnt-1)
>>>>>>> ksy:react/src/components/wishList/IntenWishList.jsx
    }

    if(checkedItems.size > 3){
        alert('4개 이상의 제품은 비교가 불가능합니다. ')
    }
  }

  return (
    <div>
<<<<<<< HEAD:templete/src/components/wishList/IntenWishList.jsx
        <h5>장 건강</h5>
=======
        <h4 className='title font-bold'>장 건강</h4>
>>>>>>> ksy:react/src/components/wishList/IntenWishList.jsx
        <FormGroup>
        <Container>
            <Row className="m-t-40 justify-content-center">
        {intenList.map((item)=>(
<<<<<<< HEAD:templete/src/components/wishList/IntenWishList.jsx
            <WishItem item={item} userId={userId} checkedItemHandler={checkedItemHandler} checkedAllItemHandler={checkedAllItemHandler}/>
        ))}
        </Row>
        </Container>
        <Button color="success" onClick={()=>{nav("/haru/wishlist/samenutri", {state : {checkedItem : checkedItems}})}}>동일 영양성분군 비교하기</Button>
=======
          <Col xs="4">
            <WishItem item={item} userId={userId} checkedItemHandler={checkedItemHandler} checkedAllItemHandler={checkedAllItemHandler}/>
          </Col>
        ))}
        </Row>
        </Container>
        {checkedCnt!=0 && 
        <Button color="success" onClick={()=>{nav("/haru/wishlist/samenutri", {state : {checkedItems : checkedItems}})}}>동일 영양성분군 비교하기</Button>}
>>>>>>> ksy:react/src/components/wishList/IntenWishList.jsx
        </FormGroup>
    </div>
  )
}

export default IntenWishList