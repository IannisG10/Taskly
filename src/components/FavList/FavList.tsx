import React, { useState } from "react";
import Menue from "../Menu/Menu";
import SideBar from "../Menu/sideBar";
import { useTask } from "@/hook/TaskContext";
import { Checkbox } from "../ui/checkbox";
import { Trash2 } from "lucide-react";
import { Clock3 } from "lucide-react";

const FavList: React.FC = ()=> {

    const [isOpen,setIsOpen] = useState<boolean>(false);
    const { favTask,theme,deleteFavTask } = useTask();

    return(
        <>
            <div className={`flex flex-col justify-center items-center gap-7 mx-5 my-5 py-3 rounded-md ${theme ? "bg-gray-700":"bg-white"} border-gray-200 w-full shadow-md relative`}>
                <Menue openMenue={isOpen} setOpenMenue={setIsOpen}/>
                <SideBar openMenue={isOpen}/>

                <div className='flex flex-col justify-center items-center sm:w-1/4 w-3/4'>
                    <div className='my-2'>
                        <h1 className={`${theme ? "text-white" : "text-black"} sm:text-3xl text-2xl italic font-bold font-josefin`}>Taches Importantes</h1>
                    </div>

                    {favTask.length > 0 ?
                        favTask.map((item,index)=> (
                            <div key={index}
                                className={`${theme ? "border-gray-400":"border-gray-200"} flex flex-col border border-gray-100 shadow-md rounded-md px-2 py-2 gap-1 w-full`}
                            >
                                <div className='flex items-center'>
                                    <div>
                                        <Checkbox/>
                                    </div>
                                    <div className={`font-medium text-base ml-1 w-auto inline-block ${theme ? "text-gray-200":"text-black"}`}>
                                        {item.description}
                                    </div>
                                </div>

                                <div className='flex flex-row gap-1 items-center'>
                                    {item.TagList.map((itemTag,index) => (
                                        <div key={index}
                                            className='w-fit text-xs  bg-gray-400 py-1 px-2 font-medium rounded-lg'
                                        >
                                            {itemTag}
                                        </div>
                                    ))}
                                </div>

                                <div className='flex flex-row items-center gap-2'>
                                    <div className={` ${theme ? "hover:bg-gray-600 hover:border-gray-300":"hover:bg-gray-200 hover:border-gray-300"} flex justify-center items-center gap-1 border border-gray-200 
                                            font-semibold px-2 py-1 rounded-md cursor-pointer ease-in-out`}>
                                            <Clock3 size={20} color={`${theme ? "white":"black"}`}/>
                                            <div className={`${theme ? "text-gray-200":"text-black"}`}>
                                                {item.date}
                                            </div>
                                    </div>
                                    <div className={`${theme ? "hover:bg-gray-500":"hover:bg-gray-200"} p-2 hover:bg-gray-200 cursor-pointer rounded-md`}
                                         title="Suprimmer"
                                         onClick={()=>{deleteFavTask(item.id)}}
                                    >
                                        <Trash2 size={20} color={`${theme ? "white":"black"}`}/>
                                    </div>
                                </div>
                            </div>
                        )) : 
                            <div className='font-josefin font-semibold text-gray-400'>
                                Aucunes Tâches Importantes
                            </div>
                    }
                    {favTask.length > 0 &&
                        <div className={`${theme ? "text-gray-200":"text-gray-600"} text-sm font-serif font-medium`}>
                            Il y a {favTask.length} tâches importantes 
                        </div>
                    }

                </div>
            </div>
        
        </>
    )
}

export default FavList;