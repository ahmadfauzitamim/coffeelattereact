
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import Profile from './pages/profile/Profile';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import History from './pages/history/History';
import ProductDetail from './pages/Product_Detail/ProductDetail';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
