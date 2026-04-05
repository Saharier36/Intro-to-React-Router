import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './Root.css'
import { useNavigation } from 'react-router';

const Root = () => {
  const navigation = useNavigation()
  const isNavigating = Boolean(navigation.location)
    return (
      <div>
        <Header></Header>
        <div className='root-main'>
          <Sidebar></Sidebar>
          {isNavigating && <span>loading...</span>}
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;