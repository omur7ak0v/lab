import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Team from '../components/Team';
// import Partners from '../components/Partners';
// import Certificates from '../components/Certificates';
// import Reviews from '../components/Reviews';
// import Message from '../components/Message';
// import Footer from '../components/Footer';


const HomePage = () => {
    return (
        <div className='HomePage'>
          <Header/>

          <Main/>
          <Services/>
          <AboutUs/>
          <Team/>
          {/* 
          
          
          <Partners/>
          <Certificates/>
          <Reviews/>
          <Message/>
          <Footer/>  */}
        </div>
    );
};

export default HomePage;