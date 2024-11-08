import React, { useEffect } from "react";
import { Search } from "lucide-react";
import TaskListLogo from "../../assets/icone/todolist-logo-svg (1).png"
import { useTask } from "@/hook/TaskContext";

const SearchBar: React.FC = () => {
    
    const { theme,searchTask,setSearchTask,searchTerm,taskIsFound } = useTask();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTask(e.target.value)
        
    }
    useEffect(()=>{
        searchTerm(searchTask);
        console.log(taskIsFound)
    },[searchTask,taskIsFound])
    
    return(
        <>
                <div className='flex flex-col justify-center items-center gap-2 w-full '>
                    <div className='flex justify-center items-center'>
                        <img src={TaskListLogo} alt="Logo_Task_list" className='w-1/6 h-1/6' />
                        <h1 className={`${theme ? "text-white":"text-black"} sm:text-3xl text-2xl font-josefin font-bold italic`}>
                            Taskly
                        </h1>
                    </div>

                <div className='flex justify-center items-center sm:w-1/4 w-4/5 text-sm relative'>
                    <input type="text"
                       className={` ${theme ? "bg-gray-600 placeholder:text-gray-400 focus:border-gray-100":""} font-josefin w-full py-1 px-4 pr-10 rounded-md border
                       border-gray-300 focus:outline-none   focus:border-black text-base`}
                       placeholder="Recherher une taches..."
                       onChange={handleSearch}
                       value={searchTask}
                    />
                    <Search className='absolute right-1 cursor-pointer'
                            color={`${theme ? "white":"black"}`}
                    /> 
                </div>

                {searchTask !== "" ?
                    taskIsFound ? 
                    <div>
                        <span className="font-josefin font-semibold text-green-500">
                             Tâche a été trouvé
                        </span>
                    </div>
                    : 
                    <div>
                        <span className="font-josefin font-semibold text-red-500">
                            Aucune tâche n'a été trouvé
                        </span>
                    </div>: null
                }
                
                
            </div> 
            
        </>
    );
}

export default SearchBar;