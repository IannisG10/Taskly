import React from "react";

interface sideBarProps { 
    openMenue: boolean
}

const SideBar: React.FC<sideBarProps> = ({openMenue}) => {
    return(
        <div className={`${openMenue && "translate-x-1 transition shadow-md my-4 rounded ease-in-out duration-800 opacity-100"} h-screen flex justify-center shadow-s
                absolute top-0 left-3 w-1/5  transition duration-500 -translate-x-96 z-0 `}>

            <div className='flex justify-center border border-gray-100 rounded my-8 
                shadow-md h-1/6 w-2/3 font-bold font-josefin text-xl p-2'>
                Menu
            </div>
        </div>
    );
}

export default SideBar