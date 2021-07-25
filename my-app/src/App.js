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
<<<<<<< HEAD

=======
>>>>>>> 63b892d33d1794445997efd7d7b5226259ae0a90
      <Routes />

    </Template>
    </BrowserRouter>
  );
}

<<<<<<< HEAD
=======

>>>>>>> 63b892d33d1794445997efd7d7b5226259ae0a90
const mapDispatchToProps = (dispatch) => {
  return {

  };
}


export default connect(mapDispatchToProps, mapDispatchToProps)(Page);