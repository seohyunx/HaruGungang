import React, { useEffect, useState } from 'react'
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import SearchFunc from './Main/SearchFunc';
import SearchStatic from './Main/SearchStatic';

//아이콘 import
import blood from "../assets/images/icon/blood-vessel.png"
import intestine from "../assets/images/icon/intestine.png"
import liver from "../assets/images/icon/liver.png"
import eyes from "../assets/images/icon/eyes.png"
import bone from "../assets/images/icon/bone.png"
import vitamin from "../assets/images/icon/vitamin.png"

const Main = () => {

  const btnClick  = (e)=>{
    console.log('btn click', e.target.name);
  }

  const [visible, setVisible] = useState(false)


  let func = [{
    effect: "혈행흐름개선",
    url : `${blood}`
  },{
    effect: "장 건강",
    url : `${intestine}`
  },{
    effect: "간 건강",
    url : `${liver}`
  },{
    effect: "눈 건강",
    url : `${eyes}`
  },{
    effect: "관절/뼈 건강",
    url : `${bone}`
  },{
    effect: "항산화",
    url : `${vitamin}`
  }]
  
  return (
    <div>
      <div>
        <SearchFunc func={func} btnClick={btnClick} visible={visible} setVisible={setVisible} />
      </div>
      <div>
      <SearchStatic />
      </div>
    </div>
  )
}

export default Main