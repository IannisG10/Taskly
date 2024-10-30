import React from 'react'
import './App.css';
import Home from './layout/Home';
import Trash from './layout/Trash';
import Favorite from './layout/Favorite';
import Done from './layout/Done';
import {Routes,Route } from 'react-router-dom';
import { TaskProvider } from './hook/TaskContext';



const App: React.FC = ()=> {
    
    return(
        <>
                <TaskProvider>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/terminé' element={<Done/>}/>
                        <Route path='/important' element={<Favorite/>}/>
                        <Route path='/corbeille' element={<Trash/>}/>
                    </Routes>
                </TaskProvider>
                  
               
        </>
    
    );

}

export default App;
