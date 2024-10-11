import React from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

interface MenueProps {
    openMenue: boolean,
    setOpenMenue: (isOpen: boolean) => void
}

const Menue: React.FC<MenueProps> = ({openMenue,setOpenMenue})=> {

    const handleOpenMenue = () => {
        setOpenMenue(!openMenue);
        
    }

    return(
        
       <div className={`${openMenue && "shadow-none border-white"} p-1 border border-gray-200 rounded-md cursor-pointer absolute top-0 left-0 mx-5 my-1 
       hover:bg-gray-200 hover:shadow-none shadow ease-in-out duration-150 z-50`}
            onClick={handleOpenMenue}
       >
            {openMenue ? <X size={23}/> : <Menu size={23}/>}
       </div>

    )
}

export default Menue;