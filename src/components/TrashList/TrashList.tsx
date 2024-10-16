import React, { useEffect, useState } from "react";
import { useTask } from "@/hook/TaskContext";
import { Checkbox } from "../ui/checkbox";
import SideBar from "../Menu/sideBar";
import Menue from "../Menu/Menu";

const TrashList: React.FC = ()=> {
    const { trashedTask } = useTask();
    const [isOpen,setIsOpen] = useState<boolean>(false)

    useEffect(()=> {
        localStorage.getItem("Trash");
    },[])
    
    return(
        <>
                <Menue openMenue={isOpen}
                       setOpenMenue={setIsOpen}
                />
                <SideBar openMenue={isOpen}/>
                <div className='flex flex-col justify-center items-center'>
                    <div className='my-2'>
                        <h1 className='text-3xl font-bold font-josefin italic '>Taches supprimés</h1>
                    </div>
                    {trashedTask.length > 0 ?
                        trashedTask.map((item,index) => (
                            <div key={index}
                                 className='flex flex-col'
                            >
                                 <div className='flex'>
                                    <div>
                                        <Checkbox/>
                                    </div>
                                    <div>
                                        {item.description}
                                    </div>
                                 </div>
                            </div>
                        )) : 
                            <div className='font-josefin font-semibold text-gray-400'> 
                                Aucune Tâches supprimés
                            </div>
                    }
                </div>
           
        </>
    );
}

export default TrashList;