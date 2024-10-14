import React, { useState } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import InputField from "@/components/InputField/InputField";
import TaskList from "@/components/TaskList/TaskList";
import Menue from "@/components/Menu/Menu";
import SideBar from "@/components/Menu/sideBar";
import { TaskProvider } from "@/hook/TaskContext";

const Home: React.FC = () => {

    const [isOpen,setIsOpen] = useState<boolean>(false);
    return(
        <>
            <Menue openMenue={isOpen}
              setOpenMenue={setIsOpen}
        />
        <SideBar openMenue={isOpen}/>  
        <TaskProvider>
            <SearchBar/>
            <InputField/>
            <TaskList/>
        </TaskProvider>
        </>
    );
}

export default Home;