import React from "react";
import { Menu } from "lucide-react";


const Menue: React.FC = ()=> {
    return(
        <div className=' p-1 cursor-pointer border border-gray-200 rounded-md shadow hover:bg-gray-200 transition ease-in-out'>
            <Menu size={24}/>
        </div>
    )
}

export default Menue;