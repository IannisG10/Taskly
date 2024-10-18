import React, { useEffect, useState } from "react";
import { useTask } from "@/hook/TaskContext";
import { Checkbox } from "../ui/checkbox";
import SideBar from "../Menu/sideBar";
import Menue from "../Menu/Menu";
import { Clock3 } from "lucide-react";
import { ArchiveRestore } from "lucide-react";

const TrashList: React.FC = ()=> {
    const { trashedTask,restoreTask } = useTask();
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
                <div className='flex flex-col justify-center items-center w-1/4'>
                    <div className='my-2'>
                        <h1 className='text-3xl font-bold font-josefin italic '>Taches supprimés</h1>
                    </div>
                    {trashedTask.length > 0 ?
                        trashedTask.map((item,index) => (
                            <div key={index}
                                 className='flex flex-col gap-1 border-gray-100 border rounded-md shadow-md px-2 py-2 w-full'
                            >
                                <div className='flex items-center'>
                                    <div>
                                        <Checkbox/>
                                    </div>
                                    <div className='font-medium text-base ml-1 w-auto inline-block'>
                                        {item.description}
                                    </div>
                                </div>

                                <div className='flex flex-row gap-1 items-center'>
                                    {item.TagList.map((itemTag,index) => (
                                        <div key={index}
                                             className='w-fit text-xs bg-gray-400 py-1 px-2 font-medium rounded-lg'
                                        >
                                            {itemTag}
                                        </div>
                                    ))}
                                </div>

                                <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                    <div className='flex justify-center items-center gap-1 
                                            border-gray-200 border font-semibold px-2 py-1 rounded-md hover:bg-gray-200 hover:border-gray-300 ease-in-out'>
                                        <Clock3 size={20}/>
                                        <div>
                                            {item.date}
                                        </div>
                                    </div>
                                    <div className='p-2 hover:bg-gray-200 cursor-pointer rounded-md'
                                         onClick={()=> {restoreTask(item.id)}}   
                                         title="Restaurer la tâches"
                                    >
                                        <ArchiveRestore size={20}/>
                                    </div>
                                </div>
                            </div>
                        )) : 
                            <div className='font-josefin font-semibold text-gray-400'> 
                                Aucune Tâches supprimés
                            </div>
                    }

                    {trashedTask.length > 0 &&
                        <div className=' flex justify-start text-sm font-serif font-medium text-gray-600 m-2'>
                            Il y a {trashedTask.length} tâches supprimées
                        </div>
                    }
                </div>
           
        </>
    );
}

export default TrashList;