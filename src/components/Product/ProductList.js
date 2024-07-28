import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SliceDes from './SliceDes';
import "./ProductList.css";
import SearchItem from '../SearchItem/SearchItem';
import Fav from '../Favourite/Fav';
const ProductList = () => {  
  const[product,setProduct]=useState([]);
  const[search,setSearch]=useState([]);
  const[favArr,setFavArr]=useState(JSON.parse(localStorage.getItem('id')) || []);


  useEffect(()=>{
    // https://fakestoreapi.com/products
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>
      // console.log(data)
      {
        setProduct(data)
        setSearch(data)

      }
    )
  },[])
  // console.log("step==1==>",product);

  const handleSearch=(searchVal)=>{
    console.log("searchItem===>",searchVal);
    // filter
    if(searchVal === 'all'){
      setSearch(product);
    }else{
      // const searchRes = product.filter((s)=>s.category === searchVal);
      // console.log("res",searchRes);
      // setSearch(searchRes);

      const searchRes = product.filter((s)=>
        s.title.toLowerCase().includes(searchVal.toLowerCase()) 
      || s.category.toLowerCase().includes(searchVal.toLowerCase()));
      setSearch(searchRes);
      // console.log(searchRes);
    }
  }
  const fav=(favid)=>{
    console.log("selected Fav id is ==  ", favid);
    const favRes = product.find((fav)=>fav.id === favid)
    

    const isFav = favArr.some((so)=>so.id === favid);
    console.log("isFav===",isFav);
    if(isFav){
      console.log("already exists so delete");
      const deleteArr = favArr.filter((deleteItem)=>deleteItem.id !== favid);
      localStorage.setItem('id',JSON.stringify(deleteArr));
      setFavArr(deleteArr);
    }else{
      console.log("new Item....");
      console.log("favItem",favRes);
      const tempArr = [...favArr,{...favRes,fav:true}];
      console.log("tempArr",tempArr);
      localStorage.setItem('id',JSON.stringify(tempArr));
      setFavArr(tempArr);
    }

  }
  return (
    <div>
      <SearchItem search={handleSearch}/>
      {/* <h1 className="sample" style={{fontWeight:'800'}}>Welcome</h1> */}
      <Container>
        <Row>
      {
        search.map((it)=>
          <Col xs={12} sm={6} md={4} lg={4} key={it.id}>
        <Card style={{ width: '18rem' }} >
       <Card.Img variant="top" src={it.image} style={{width:'100px',height:'100px'}}/>
       <Card.Body>
         <Card.Title>{it.title}</Card.Title>
         {/* <Card.Text>
          {it.description}
         </Card.Text> */}
         <SliceDes des={it.description} max={25}/>
         <Button variant="primary">Add Cart</Button>
         <Button variant="outline-dark" 
         style={{'background':favArr.some((ar)=>ar.id === it.id) ? 'red' :''}}
         onClick={()=>fav(it.id)}
         >Fav Cart</Button>
       </Card.Body>
     </Card>
        </Col>
)          
      }
         </Row>
      </Container>
    </div>
  )
}

export default ProductList