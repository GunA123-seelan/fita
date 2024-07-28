import React,{useState} from 'react'

const SliceDes = ({des,max}) => {
    // console.log("mydes",des,max);
    const[show,setShow]=useState(false);
    const text=des.length > max ? des.slice(0,max)+'....' : des;
    // console.log(text);

    const changeDes=()=>[
        setShow(!show)
    ]
  return (
    <div>{show ? des:text} <span onClick={changeDes}>{show ? 'Less' : 'More'}</span></div>
  )
}

export default SliceDes