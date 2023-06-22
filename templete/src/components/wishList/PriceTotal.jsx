import React, { useState } from 'react'
import PriceTotalChart from './PriceTotalChart';
import RecAmountNutri from './RecAmountNutri';
import { useEffect } from 'react';

const PriceTotal = ({result}) => {

  const [ totalPrice, setTotalPrice ] = useState()
  const [ totalPriceOnday, setTotalPriceOneday] = useState()
  
  useEffect(()=>{
    console.log('price total 콤포넌트 result', result);
    let priceMap = new Map()
    let temp = 0;
    let tempOne = 0;

    // result.map((item)=>(
    //   temp += item.detail_price))

    //   tempOne += item.day_price;
    //   priceMap.set(item.detail_name, item.detail_price);
    //   ))

      console.log('temp', temp);
      setTotalPrice(temp)
  },[result])

  useEffect(()=>{
    console.log('total price', totalPrice);
  },[totalPrice])

  return (
    <div>
      <div>
        <PriceTotalChart result={result}/>
      </div>
      {/* 텍스트 */}
      <div>
        <h5>{result.length}가지 영양제 구매시 총 금액</h5>
        <p>{totalPrice}원</p>
        <p>하루에 1,900원</p>
      </div>
    </div> 
  )
}

export default PriceTotal