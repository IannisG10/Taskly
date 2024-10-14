import React, { useState } from 'react'
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import InputField from './components/InputField/InputField';
import TaskList from './components/TaskList/TaskList';
import Menue from './components/Menu/Menu';
import { TaskProvider } from './hook/TaskContext';
import SideBar from './components/Menu/sideBar';

const App: React.FC = ()=> {

    const [isOpen,setIsOpen] = useState<boolean>(false);
    return(
      <div className='flex flex-col justify-center items-center gap-7 mx-5 my-5 py-3 
            rounded-md border border-gray-200 shadow-md relative'>
        <Menue openMenue={isOpen}
              setOpenMenue={setIsOpen}
        />
        <SideBar openMenue={isOpen}/>  
        <TaskProvider>
            <SearchBar/>
            <InputField/>
            <TaskList/>
        </TaskProvider>
        
      </div>
    );

}

export default App;
