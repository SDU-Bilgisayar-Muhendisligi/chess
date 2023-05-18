import React from 'react'
import '../App.css';
import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle'
import Footer from '../components/Footer';
import SideSelectionForm from '../components/SideSelectionForm';
import HomeChessBoard from '../components/HomeChessBoard';
import Body from '../components/Body';


function Home() {
  return (
    <div> 
    
    <Header/>
    <HomeChessBoard/>
    <Body/>
    <Footer/>
    </div>
  )
}

export default Home