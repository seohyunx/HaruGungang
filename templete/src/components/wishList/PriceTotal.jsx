import React, { useState } from 'react'
import PriceTotalChart from './PriceTotalChart';
import RecAmountNutri from './RecAmountNutri';
import { useEffect } from 'react';

const PriceTotal = ({result, totalPrice, totalPriceOnday, chartData}) => {

  console.log('chartData3', chartData);

  return (
    <div>
      <div>
        <PriceTotalChart chartData={chartData}/>
      </div>
      {/* 텍스트 */}
      <div>
        <h5>{result.length}가지 영양제 구매시 총 금액</h5>
        <p>{totalPrice}원</p>
        <p>하루에 {totalPriceOnday}원</p>
      </div>
    </div> 
  )
}

export default PriceTotal