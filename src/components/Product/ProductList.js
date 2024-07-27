import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SliceTitle from './SliceTitle';
import SliceDes from './SliceDes';
import SearchItem from '../SearchItem/SearchItem';

const ProductList = () => {
const[product,setProduct]=useState([]);
const[search,setSearch]=useState([]);

const[favArr,setFavArr]=useState(JSON.parse(localStorage.getItem('fita')) || []);
  // 'https://fakestoreapi.com/products/

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>
            {
              setProduct(data)
              setSearch(data)
              console.log("stage 1",data);
            }
          )
          
        },[]);

  useEffect(()=>{
    if(product.lengt >0){
      console.log("productload..",product);
    }
  },[product])

  const handleSearch=(searchItem)=>{
    console.log("searc",searchItem);
    if(searchItem === 'all'){
      setSearch(product);
    }else{
      console.log("searchItem are",searchItem);
      // const resSearch = product.filter((search)=>search.category === searchItem);
      const resSearch = product.filter(product =>
        product.category.toLowerCase().includes(searchItem.toLowerCase()) ||
        product.title.toLowerCase().includes(searchItem.toLowerCase())
      );
      console.log(resSearch);
      setSearch(resSearch);
    }
  }

const favs=(idd)=>{
console.log(idd); 
  const favItem = product.find((fav)=>fav.id === idd);
  console.log(favItem);

  const isFav = favArr.some((item)=>item.id === idd);
  console.log(isFav);

  if(isFav){
    console.log("already exist");
    const deleteArr = favArr.filter((favItem)=>favItem.id !== idd);
    localStorage.setItem('fita',JSON.stringify(deleteArr));
    setFavArr(deleteArr);
  }else{
    console.log("new Item..");
    const tempArr=[...favArr,{...favItem,fav:true}];
    console.log(tempArr);
    localStorage.setItem("fita",JSON.stringify(tempArr));
    setFavArr(tempArr);
  }
}


  return (
    <>
  {/* search */}
    <SearchItem search={handleSearch} />


    <Container>
    <Row>
      {search.length > 0 ? 
      <>
         { search.map((item)=>(
        <Col xs={12} sm={8} md={6} lg={3} className='d-flex mb-4'  key={item.id}>
          <Card style={{ width: '18rem',    padding: '30px' }}>
          <Card.Img variant="top" src={item.image} width={200} height={200}/>
          <Card.Body>
          {/* <Card.Title>{item.title}</Card.Title> */}
          <SliceTitle title={item.title} maxLen={10}/>
          {/* <Card.Text>
            {item.description}
            </Card.Text> */}
          <SliceDes des={item.description} max={55}/>
          <div style={{display: 'flex',gap: '10px'}}>
          <Button variant="primary">Add Cart</Button>
          <Button variant="outline-dark" 
          style={{"background":favArr.some((fav)=>fav.id === item.id) ? 'red':''}}
          onClick={()=>favs(item.id)}>Fav Cart</Button>
          </div>
          </Card.Body>
          </Card>
        </Col>
      )) }
      </>: "No Data"}
   
    </Row>
  </Container>
</>
  )
}

export default ProductList