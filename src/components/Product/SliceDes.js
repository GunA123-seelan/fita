import React,{useState} from "react";

const SliceDes=({des,max})=>{
    const[showDes,setShowDes]=useState(false);
    const description = des.length>max ? des.slice(0,max)+'...':des;
    const changeDes=()=>{
        setShowDes(!showDes)
    }
    return (
        <p>{showDes ? des: description } <span onClick={changeDes} style={{color:'red',cursor:'pointer'}}>{showDes ? 'close': 'open'}</span></p>
    )
}

export default SliceDes;