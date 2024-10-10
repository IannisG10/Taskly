import React from 'react'
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import InputField from './components/InputField/InputField';
import TaskList from './components/TaskList/TaskList';
import Menue from './components/Menu/Menu';
import { TaskProvider } from './hook/TaskContext';


const App: React.FC = ()=> {



    return(
      <div className='flex flex-col justify-center items-center gap-7 mx-5 my-5 py-3 
            rounded-md border border-gray-200 shadow-md relative'>
        <div className='absolute left-0 top-1 mx-1'>
          <Menue/>
        </div>
        <SearchBar/>
        <TaskProvider>
            <InputField/>
            <TaskList/>
        </TaskProvider>
        
      </div>
    );

}

export default App;
