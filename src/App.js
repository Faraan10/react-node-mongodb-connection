import HomePage from './HomePage'
import LoginPage from './LoginPage'
import ProductsPage from './ProductsPage'
import CartPage from './CartPage'
import NotFound from './NotFound'
import Navigation from './Navigation'
import RegistrationPage from './RegistrationPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/registration" element={<RegistrationPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/products" element={<ProductsPage/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
