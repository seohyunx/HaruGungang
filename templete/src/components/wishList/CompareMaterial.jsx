import React, { useEffect, useState } from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'


const CompareMaterial = ({item}) => {

  console.log('chart result : ' , item.nutri_content);


  const data = [{
        name : `${item.nutri_name}`,
        incredient : `${parseInt(item.nutri_content)}` 
      }]

  return (
    <div>
        <BarChart width={300 } height={300} data={data}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="incredient" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}

export default CompareMaterial