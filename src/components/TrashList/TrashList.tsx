import React from "react";
import { useTask } from "@/hook/TaskContext";


const TrashList: React.FC = ()=> {
    const { trashedTask } = useTask();

    return(
        <>
           
                <div className='flex flex-col justify-center items-center'>
                    <div className='my-2'>
                        <h1 className='text-3xl font-bold font-josefin italic '>Taches supprimés</h1>
                    </div>
                    {trashedTask.length === 0 && 
                        <div className='font-josefin font-semibold text-gray-400'> Aucune Tâches supprimés</div>}
                </div>
           
        </>
    );
}

export default TrashList;