import React from 'react'
import './App.css';
import Home from './layout/Home';
import Trash from './layout/Trash';
import Favorite from './layout/Favorite';
import {Routes,Route } from 'react-router-dom';

const App: React.FC = ()=> {

    
    return(
      <div className='flex flex-col justify-center items-center gap-7 mx-5 my-5 py-3 
            rounded-md border border-gray-200 shadow-md relative'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/corbeille' element={<Trash/>}/>
          <Route path='/important' element={<Favorite/>}/>
        </Routes>
        
      </div>
    );

}

export default App;
