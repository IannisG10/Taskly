import React from "react";
import { Search } from "lucide-react";
import TaskListLogo from "../../assets/icone/todolist-logo-svg (1).png"

const SearchBar: React.FC = () => {
    return(
        <>
            <div className='flex flex-col justify-center items-center gap-2 w-full '>
                <div className='flex justify-center items-center'>
                    <img src={TaskListLogo} alt="Logo_Task_list" className='w-1/6 h-1/6' />
                    <h1 className='text-3xl font-josefin font-bold italic'>
                        Taskly
                    </h1>
                </div>
                <div className='flex justify-center items-center w-1/4 relative'>
                    <input type="text"
                       className='  font-josefin w-full py-1 px-4 pr-10 rounded-md border
                        border-gray-300 focus:outline-none  focus:border-black text-base'
                       placeholder="Recherher une taches..."
                    />
                    <Search className='absolute right-1 cursor-pointer'/> 
                </div>
                
            </div>
        </>
    );
}

export default SearchBar;