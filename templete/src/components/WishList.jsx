import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';
import axios from 'axios'
import EyeWishList from './wishList/EyeWishList';
import LiverWishList from './wishList/LiverWishList';
import BloodWishList from './wishList/BloodWishList';
import IntenWishList from './wishList/IntenWishList';
import BoneWishList from './wishList/BoneWishList';
import AntiOxiWishList from './wishList/AntiOxiWishList';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

const WishList = ({userId}) => {

  const [wishList, setWishList] = useState([])

  //찜리스트 서버에서 받아오기
  useEffect(()=>{
    axios.get(`http://localhost:8085/haru/wishlist/${userId}`)
    .then((res)=>{
      console.log('찜리스트 통신 성공', res.data);
      setWishList(res.data)
    })
    .catch((e)=>{
      console.log('error', e);
    })
  },[])

  //기능별 제품 분류 state
  const [eyeList, setEyeList] = useState([])
  const [bloodList, setbloodList] = useState([])
  const [intenList, setIntenList] = useState([])
  const [liverList, setLiverList] = useState([])
  const [boneList, setBoneList] = useState([])
  const [antiOxiList, setAntiOxiList] = useState([])

    //상품 분류
    useEffect(()=>{
      setEyeList(wishList.filter((item)=>(item.wishlist.nutri_name == '루테인')))
      setbloodList(wishList.filter((item)=>(item.wishlist.nutri_name == '오메가3')))
      setIntenList(wishList.filter((item)=>(item.wishlist.nutri_name == '유산균')))
      setLiverList(wishList.filter((item)=>(item.wishlist.nutri_name == '밀크씨슬')))
      setBoneList(wishList.filter((item)=>(item.wishlist.nutri_name == '보스웰리아' || item.wishlist.nutri_name == '글루코사민')))
      setAntiOxiList(wishList.filter((item)=>(item.wishlist.nutri_name == '비타민C')))
    },[wishList])

  //찜리스트에 해당 기능성 제품 있는지 여부 확인
  const [isVisibleEye, setIsVisibleEye] = useState(false)
  useEffect(()=>{
    eyeList.length !=0 && setIsVisibleEye(true)
    console.log('eyeList' , eyeList);
  },[eyeList])

  const [isVisibleBlood, setIsVisibleBlood] = useState(false)
  useEffect(()=>{
    bloodList.length !=0 && setIsVisibleBlood(true)
    console.log('bloodList' , bloodList);
  },[bloodList])

  const [isVisibleInten, setIsVisibleInten] = useState(false)
  useEffect(()=>{
    intenList.length !=0 && setIsVisibleInten(true)
  },[intenList])

  const [isVisibleLiver, setIsVisibleLiver] = useState(false)
  useEffect(()=>{
    liverList.length !=0 && setIsVisibleLiver(true)
    console.log(liverList);
  },[liverList])

  const [isVisibleBone, setIsVisibleBone] = useState(false)
  useEffect(()=>{
    boneList.length !=0 && setIsVisibleBone(true)
  },[boneList])

  const [isVisibleAntiOxi, setIsVisibleAntiOxi] = useState(false)
  useEffect(()=>{
    antiOxiList.length !=0 && setIsVisibleAntiOxi(true)
  },[antiOxiList])

  return (
    <div>
      <h3>찜리스트</h3>
      <div>
        {/* 눈건강 */}
        {isVisibleEye && <EyeWishList eyeList={eyeList} />}
        {/* 혈행흐름개선 */}
        {isVisibleBlood && <BloodWishList bloodList={bloodList} />}
        {/* 장건강 */}
        {isVisibleInten && <IntenWishList intenList={intenList}/>}
        {/* 간건강 */}
        {isVisibleLiver && <LiverWishList liverList={liverList}/>}
        {/* 관절 */}
        {isVisibleBone && <BoneWishList boneList={boneList} />}
        {/* 항산화 */}
        {isVisibleAntiOxi && <AntiOxiWishList antiOxiList={antiOxiList} />}
        <Button color="success" onClick={()=>{window.location.href="/haru/wishlist/othernutri"}}>영양성분 조합 확인하기</Button>
      </div>
    </div>
  )
}

export default WishList