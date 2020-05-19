import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './ProductList'
import Login from './Login'


  function Product(){
  
    return (
      <BrowserRouter>

        <Route exact path='/productlist' component={ProductList} />
        <Route exact path='/' component={Login} />

      </BrowserRouter>
    );

  }


export default Product;
