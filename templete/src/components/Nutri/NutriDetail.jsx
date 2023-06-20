import React, { useEffect, useState } from 'react'
import NutriDetailTable from './NutriDetailTable'
import NturiProducts from './NturiProducts'
import { useParams } from 'react-router'
import axios from 'axios'
import { Alert, Container, Row, Col } from 'reactstrap';
import NutriFaq from './NutriFaq'

const NutriDetail = () => {

    let {nutri_name} = useParams()

    //상세정보 변수 저장
    const [effect, setEffect] = useState("")
    const [intake, setIntake] = useState("")
    const [dailyRecTake, setDailyRecTake] = useState("")
    const [withNutri, setWithNutri] = useState("")
    const [withNotNutri, setWithNotNutri] = useState("")

    //FAQ 변수 저장   

  return (
    <div>
        <h5>{nutri_name}</h5>

        {/* 상세정보 */}
        <NutriDetailTable setWithNotNutri={setWithNotNutri} setEffect={setEffect} setIntake={setIntake} setDailyRecTake={setDailyRecTake} setWithNutri={setWithNutri} nutri_name={nutri_name} effect={effect} intake={intake} dailyRecTake={dailyRecTake} withNutri={withNutri} withNotNutri={withNotNutri}/>
        {/* FAQ */}
        <NutriFaq nutri_name={nutri_name}/>
        {/* 네이버 제품 API */}
        <NturiProducts nutriName={nutri_name}/>
    </div>
  )
}

export default NutriDetail