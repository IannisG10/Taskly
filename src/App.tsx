import React from 'react'
import './App.css';
import Home from './layout/Home';
import Trash from './layout/Trash';
import Favorite from './layout/Favorite';
import {Routes,Route } from 'react-router-dom';



const App: React.FC = ()=> {
    
    return(
        <>
                
                  <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/corbeille' element={<Trash/>}/>
                    <Route path='/important' element={<Favorite/>}/>
                  </Routes>
               
        </>
    
    );

}

export default App;
