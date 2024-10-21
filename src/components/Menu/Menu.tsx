import React from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useTask } from "@/hook/TaskContext";

interface MenueProps {
    openMenue: boolean,
    setOpenMenue: (isOpen: boolean) => void
}

const Menue: React.FC<MenueProps> = ({openMenue,setOpenMenue})=> {

    const {theme} = useTask();

    const handleOpenMenue = () => {
        setOpenMenue(!openMenue);
        
    }

    return(
        
       <>
            
                <div className={`${openMenue && "shadow-none border-white"} ${theme ? "border-gray-800 bg-gray-800":"border-black bg-white"} p-1 border  rounded-md cursor-pointer fixed top-8 left-5 mx-5 my-1 
                 hover:shadow-none shadow ease-in-out duration-150 z-50`}
                     onClick={handleOpenMenue}
                >
                     {openMenue ? <X size={23} color={`${theme ? "white":"black"}`}/> : <Menu size={23} color={`${theme ? "white":"black"}`}/>}
                </div> :

                
        
       </>

    )
}

export default Menue;