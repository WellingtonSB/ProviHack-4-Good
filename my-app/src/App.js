import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { Template } from './components/MainComponents';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import Home from './pages/Home';
import Routes from './Routes';
import './App.css';


const Page = (props) => {
  return (
    <BrowserRouter>
    <Template>
      <Header />
      <Routes />

    </Template>
    </BrowserRouter>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {

  };
}


export default connect(mapDispatchToProps, mapDispatchToProps)(Page);