import React,{useState} from 'react'
import './Fav.css';
const Fav = () => {
  const[displayFavArr,setDisplayFavArr]=useState(JSON.parse(localStorage.getItem('id'))||[])
  console.log(displayFavArr);

  return (
    <div>
      {
        displayFavArr.map((item)=>(
          <div className='fav_container'>
          <img src={item.image} alt="favimg" height={200} width={200}></img>
          <h4 className='fav_title'>{item.title}</h4>
          <p className='fav_des'>{item.description}</p>
          <h4 className='fav_buy'><b>{item.price}</b></h4>
          <button className='fav_add'>Add Cart</button>
        </div>
        ))
      }

    </div>
  )
}

export default Fav