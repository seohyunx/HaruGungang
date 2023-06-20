import React, { useState } from 'react'
import axios from 'axios'

const NutriFaq = ({nutri_name}) => {

    useState(()=>{
        console.log('선택한 영양성분 :',  nutri_name);
        axios.get(`http://localhost:8085/haru/nutrifaq/${nutri_name}`)
        .then((res)=>{
            console.log('nutrifaq 통신성공',res.data);
        })
        .catch((e)=>{
            console.log('error : ', e);
        })
    },[])

  return (
    <div>


    </div>
  )
}

export default NutriFaq