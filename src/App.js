import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import AllProducts from './Components/Home/AllProducts/AllProducts';
import Header from './Components/Home/Header/Header';
// import Footer from './Components/Home/Footer/Footer';
import SingleProduct from './Components/Home/SingleProduct/SingleProduct';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipment from './Components/Home/Shipment/Shipment';
import AdminPage from './Components/AdminPanel/AdminPage/AdminPage.jsx';
export const Context = createContext();
export const ProductContext = createContext();
export const adminContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [products, setProducts] = useState({});
  const [adminData, setAdminData] = useState([]);
  return (
    <Context.Provider value={[loggedInUser, setLoggedInUser]}>
      <ProductContext.Provider value={[products, setProducts]}>
        <adminContext.Provider value={[adminData, setAdminData]}>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/Bangladesh/:productName' element={<AllProducts />} />
            <Route path='/ad/:singleProduct' element={<PrivateRoute>
              <SingleProduct />
            </PrivateRoute>}>
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/shipment' element={<PrivateRoute>
              <Shipment />
            </PrivateRoute>}>
            </Route>
            <Route path='/dashboard' element={<PrivateRoute>
              <AdminPage />
            </PrivateRoute>}>
            </Route>
            <Route path='*' element={<h1 className='text-aline' >page not found 404</h1>} />
          </Routes>
        </adminContext.Provider>
      </ProductContext.Provider>
    </Context.Provider >
  );
}

export default App;
