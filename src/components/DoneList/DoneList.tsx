import React, { useState } from "react";
import Menue from "../Menu/Menu";
import SideBar from "../Menu/sideBar";
import { Clock3,Trash2 } from "lucide-react";
import { useTask } from "@/hook/TaskContext";
import { Checkbox } from "../ui/checkbox";


const DoneList: React.FC = () => {

    const [isOpen,setIsOpen] = useState<boolean>(false);
    const { taskDone,theme } = useTask();
    return(
        <>
            <div className="flex flex-col justify-center items-center gap-7 mx-5 my-5 py-3 rounded-md">
                <Menue openMenue={isOpen} setOpenMenue={setIsOpen}/>
                <SideBar openMenue={isOpen}/>

                <div className="flex flex-col justify-center items-center w-1/4">
                    <div className="">
                        <h1 className="text-3xl italic font-bold font-josefin">Tâches Terminée</h1>
                    </div>

                    {taskDone.length > 0 ? 
                        taskDone.map((item,index) =>(
                            <div key={index}
                                className="flex flex-col border border-gray-100 shadow-md rounded-md px-2 py-2 gap-1 w-full"
                            >
                                <div className="flex items-center">
                                    <div>
                                        <Checkbox/>
                                    </div>
                                    <div className="font-medium text-base ml-1 w-auto inline-block ">
                                        {item.description}
                                    </div>
                                </div>

                                <div className="flex flex-row gap-1 items-center">
                                    {item.TagList.map((itemTag,index)=>(
                                        <div key={index}
                                             className="w-fit text-xs bg-gray-400 py-1 px-2 font-medium rounded-lg"
                                        >
                                            {itemTag}
                                        </div>
                                    ))}

                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex justify-center items-center gap-1 border border-gray-200 font-semibold px-2 py-1 rounded-md cursor-pointer ease-in-out">
                                        <Clock3 size={20}/>
                                        <div>
                                            {item.date}
                                        </div>
                                    </div>
                                    <div className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">
                                        <Trash2 size={20}/>
                                    </div>
                                </div>
                            </div>
                        )) : 
                            <div className="font-josefin font-semibold text-gray-400">
                                Aucunes Taches Terminée
                            </div>
                    }

                </div>


            </div>
        </>
    )
}

export default DoneList;