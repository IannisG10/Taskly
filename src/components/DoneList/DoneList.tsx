import React, { useState } from "react";
import Menue from "../Menu/Menu";
import SideBar from "../Menu/sideBar";
import { useTask } from "@/hook/TaskContext";


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
                            <div key={index}>

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