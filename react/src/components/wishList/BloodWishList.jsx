import React, { useState } from 'react'
import { Button, Row, Col, Container, Card, FormGroup, Input } from 'reactstrap';
import WishItem from './WishItem';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const BloodWishList = ({bloodList, userId, checkedAllItemHandler}) => {
    
    const nav = useNavigate()

  //체크박스 기능
  //선택된 체크박스 세트
  const [checkedItems, setCheckedItems] = useState(new Set())
<<<<<<< HEAD:templete/src/components/wishList/BloodWishList.jsx
=======
  const [checkedCnt, setCheckedCnt] = useState(0)
>>>>>>> ksy:react/src/components/wishList/BloodWishList.jsx

  const checkedItemHandler = (id, isChecked) => {
    console.log('checkedItemHandler', id);

    if(isChecked){
        
      checkedItems.add(id)
      setCheckedItems(checkedItems)
        console.log('is checked', checkedItems);
<<<<<<< HEAD:templete/src/components/wishList/BloodWishList.jsx
=======
        setCheckedCnt(checkedCnt+1)
>>>>>>> ksy:react/src/components/wishList/BloodWishList.jsx
    }else if(!isChecked && checkedItems.has(id)){
      checkedItems.delete(id)
      setCheckedItems(checkedItems)
      console.log('no checked', checkedItems);
<<<<<<< HEAD:templete/src/components/wishList/BloodWishList.jsx
=======
      setCheckedCnt(checkedCnt-1)
>>>>>>> ksy:react/src/components/wishList/BloodWishList.jsx
    }

    if(checkedItems.size > 3){
        alert('4개 이상의 제품은 비교가 불가능합니다. ')
    }
  }

  return (
    <div>
<<<<<<< HEAD:templete/src/components/wishList/BloodWishList.jsx
        <h5>혈관/혈행흐름개선</h5>
=======
        <h4 className='title font-bold'>혈관/혈행흐름개선</h4>
>>>>>>> ksy:react/src/components/wishList/BloodWishList.jsx

        <FormGroup>
        <Container>
            <Row className="m-t-40 justify-content-center">
        {bloodList.map((item)=>(
<<<<<<< HEAD:templete/src/components/wishList/BloodWishList.jsx
                <WishItem userId={userId}item={item} checkedItemHandler={checkedItemHandler} checkedAllItemHandler={checkedAllItemHandler}/>
        ))}
        </Row>
        </Container>
        <Button color="success" onClick={()=>{nav("/haru/wishlist/samenutri", {state : {checkedItems : checkedItems}})}}>동일 영양성분군 비교하기</Button>
=======
          <Col xs="4">
                <WishItem userId={userId} item={item} checkedItemHandler={checkedItemHandler} checkedAllItemHandler={checkedAllItemHandler}/>
          </Col>
        ))}
        </Row>
        </Container>
        {checkedCnt!=0 && 
        <Button color="success" onClick={()=>{nav("/haru/wishlist/samenutri", {state : {checkedItems : checkedItems}})}}>동일 영양성분군 비교하기</Button>}
>>>>>>> ksy:react/src/components/wishList/BloodWishList.jsx
        </FormGroup>
    </div>
  )
}

export default BloodWishList