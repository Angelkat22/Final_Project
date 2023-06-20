import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductItemPage from './pages/ProductItemPage/ProductItemPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import { useState } from 'react';
import MobileMenu from './components/MobileMenu/MobileMenu';



function App() {

  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <div className='app'>
          <MobileMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
          <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
          <Routes>
            <Route path='/' element ={<MainPage />}/>

            <Route path='/categories' element ={<CategoriesPage />}/>
            <Route path='/categories/:id' element ={<ProductsPage type={'category'}/>}/>

            <Route path='/products' element ={<ProductsPage type={'all'}/>}/>
            <Route path='/products/:id' element={<ProductItemPage />}/>

            <Route path='/sales' element ={<ProductsPage type={'sale'} />}/>
            <Route path='/cart' element ={<ShoppingCartPage />}/>
            <Route path="*" element ={<NotFoundPage />}/>  
          </Routes> 
          <Footer /> 
      
        </div>
  );
}

export default App;
