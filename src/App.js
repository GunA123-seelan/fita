import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/Product/ProductList';
import Fav from './components/Favourite/Fav';
import Home from './components/Home/Home';
import Error from './components/Error/Error';

function App() {
  return (
    <div>
      {/* <Navbar bg="light" data-bs-theme="light" >
        <Container>
          <Navbar.Brand href="/">G-Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="product_list">Products</Nav.Link>
            <Nav.Link href="favourite">Favourites</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <Nav className="justify-content-center" activeKey="/home">
      {/* <Navbar.Brand href="/">G-Shop</Navbar.Brand> */}
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="product_list">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="favourite">Favourites</Nav.Link>
        </Nav.Item>
      </Nav>

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='product_list' element={<ProductList/>}></Route>
        <Route path='favourite' element={<Fav/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
