import React from 'react'
import ProductDetailWish from './ProductDetailWish'
import PriceTotal from './PriceTotal'
import MaterialTotal from './MaterialTotal'
import { useState } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import { useEffect } from 'react'

const ResultOtherNutri = () => {

  const location = useLocation()

    // 체크된 제품 리스트
    const [compareList, setCompareList] = useState({})

    // 서버에서 불러온 정보
    const [result, setResult] = useState([])
  
    useEffect(()=>{
      setCompareList(location.state.checkedAllItems)
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
      <ProductDetailWish result={result}/>
      <h5>가격정보</h5>
      <PriceTotal result={result}/>
      <h5>성분정보</h5>
      <MaterialTotal result={result}/>
    </div>
  )
}

export default ResultOtherNutri