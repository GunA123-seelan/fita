import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/Product/ProductList';
import Fav from './components/Favourite/Fav';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Login from './components/Register/Login';
import RegisterForm from './components/Register/RegisterForm';

function App() {
  return (
    <div>
      <Nav className="justify-content-center"> 
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
        <Nav.Item>
          <Nav.Link href="login">Login</Nav.Link>
        </Nav.Item>
      </Nav>

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='product_list' element={<ProductList/>}></Route>
        <Route path='favourite' element={<Fav/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='registerForm' element={<RegisterForm/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
