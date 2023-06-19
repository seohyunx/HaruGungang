import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem';

const NturiProducts = ({setProductList, productList }) => {
    
    //네이버 API 정보 
    const url = "/v1/search/shop.json"; 
    const ClientID = "ga0iztUwThZ0NrLZMjzB";
    const ClientSecret = "Ii5vliWmLS";

    useEffect(()=>{
        axios
        .get(url, {
            params:{
              query: "비타민",
              display: 3
            }
          ,
          headers: {
            "X-Naver-Client-Id": ClientID,
            "X-Naver-Client-Secret": ClientSecret,
          },
        })
        .then((res) => {
          console.log(res.data.items)
          setProductList(res.data.items)
        })
        .catch((e) => {
          console.log(e);
        });
    },[])

    useEffect(()=>{
        console.log('axios 콤포넌트',productList);
    },[productList])


  return (
    <div>
        <ProductItem productList={productList}/>
    </div>
  )
}

export default NturiProducts