import React from 'react'

import Button from 'react-bootstrap/Button';
const SearchItem = ({search}) => {
  // const[searchKey,setSearchKey]=useState();
  // console.log(searchKey);
  
  return (
    <>
    <input type="text" placeholder='search key' onChange={(e)=>search(e.target.value)}/>
    <div className='d-flex justify-content-center mb-3 mt-5 gap-2'>
    <Button variant="outline-dark" onClick={()=>search("all")}>All</Button>
    <Button variant="outline-dark" onClick={()=>search("men's clothing")}>Mens</Button>
    <Button variant="outline-dark" onClick={()=>search("women's clothing")}>Womens</Button>
    <Button variant="outline-dark" onClick={()=>search("electronics")}>Electronics</Button>
    <Button variant="outline-dark" onClick={()=>search("jewelery")}>Jwells</Button>
    </div>
    </>
  )
}

export default SearchItem