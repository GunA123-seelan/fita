import React, { useState } from 'react'

const SliceTitle = ({title,maxLen}) => {
  const[showTitle,setShowTitle]=useState(false);
  const text = title.length > maxLen ? title.slice(0,maxLen)+'...':title;
  const changeTitle=()=>{
    setShowTitle(!showTitle);
  }
  return (
   <>
   <p><b>{showTitle ? title: text } <span onClick={changeTitle} style={{color:'blue',cursor:'pointer'}}>{showTitle ? 'Less' : 'More'}</span></b></p>
   </>
  )
}

export default SliceTitle