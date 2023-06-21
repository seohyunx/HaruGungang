import React from 'react'
import ProductDetailWish from './ProductDetailWish'
import ComparePrice from './ComparePrice'
import CompareMaterial from './CompareMaterial'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const ResultSameNutri = () => {

  const location = useLocation()

  // 체크된 제품 리스트
  const [compareList, setCompareList] = useState({})

  // 서버에서 불러온 정보
  const [result, setResult] = useState([])

  useEffect(()=>{
    setCompareList(location.state.checkedItems)
  },[])

  useEffect(()=>{
    console.log(compareList);
    axios.post('http://localhost:8085/haru/compare', { product_id: Array.from(compareList) })
    .then((res)=>{
      console.log('제품 비교 통신 성공', res.data);
      setResult(res.data)
    })
  },[compareList])

  useEffect(()=>{
    console.log('result : ',result);
  },[result])

  return (
    <div>
      <h3>동일 영양성분 제품 비교하기</h3>
      <ProductDetailWish result={result}/>
      <h5>함량 비교</h5>
      <CompareMaterial/>
    </div>
  )
}

export default ResultSameNutri