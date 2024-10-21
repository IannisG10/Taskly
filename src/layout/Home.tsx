import React, { useState } from "react";
import { useTask } from "@/hook/TaskContext";
import SearchBar from "@/components/SearchBar/SearchBar";
import InputField from "@/components/InputField/InputField";
import TaskList from "@/components/TaskList/TaskList";
import Menue from "@/components/Menu/Menu";
import SideBar from "@/components/Menu/sideBar";

const Home: React.FC = () => {

    const [isOpen,setIsOpen] = useState<boolean>(false);
    const { theme } = useTask();

    return(
        <>
            
            {/* flex flex-col justify-center items-center gap-7 mx-5 my-5  py-3 rounded-md border-gray-200 shadow-md relative */}
                    
                     

                    <div className={`flex flex-col justify-center items-center gap-7 mx-5 my-5 py-3 rounded-md border-gray-200 shadow-md  ${theme ? "bg-gray-700":"bg-white"} relative`}>
                        <Menue openMenue={isOpen}
                            setOpenMenue={setIsOpen}
                        />
                        <SideBar openMenue={isOpen}/>  

                        <SearchBar/>
                        <InputField/>
                        <TaskList/>
                    </div>
                
                
        
        </>
    );
}

export default Home;