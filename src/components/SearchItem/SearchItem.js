import React from 'react'
import Button from 'react-bootstrap/Button';
const SearchItem = ({search}) => {
  return (
   <div className="d-flex justify-content-center mb-5 mt-5 gap-5">
    <input type="search" placeholder='search some category' onChange={(e)=>search(e.target.value)}/>
      <Button variant="primary" onClick={()=>search("all")}>All</Button>
      <Button variant="primary" onClick={()=>search("men's clothing")}>Mens</Button>
      <Button variant="primary" onClick={()=>search("women's clothing")}>Womens</Button>
      <Button variant="primary" onClick={()=>search("electronics")}>Electronics</Button>
      <Button variant="primary" onClick={()=>search("jewelery")}>Jwells</Button>
   </div>
  )
}
 

export default SearchItem