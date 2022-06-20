import React from 'react'
import Team from './Team'

export default function TeamSearchReasult() {
    let a = [1,2,3]
  return (
    <div className='space-y-3 p-5'>{a.map((components,index)=>(<Team key={index}/>))}</div>
  )
}
