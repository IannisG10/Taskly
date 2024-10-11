import React from "react";
import { useTask } from "@/hook/TaskContext";
import { Checkbox } from "../ui/checkbox";
import { Trash2 } from "lucide-react";
import { Clock3 } from "lucide-react";

const TaskList: React.FC = () => {
    const { task,deleteTask } = useTask()

    return(
        <div className='flex flex-col gap-2 w-1/4'>
            {task.length > 0 ?
                task.map((item,index) => (
                    <div key={index}
                         className='flex flex-col relative border px-2 py-2 w-full border-gray-200 rounded-md shadow gap-1'
                    >
                        
                        <div className='flex justify-start items-center'>
                            <div>
                                <Checkbox/>
                            </div>
                            <div className='inline-block font-medium text-base ml-1 w-auto'>
                                {item.description}
                            </div>
                        </div>

                        <div className='w-fit text-xs bg-gray-400 py-1 px-2 rounded-lg font-medium '>
                                {item.tags}
                        </div>

                        <div className='flex flex-row items-center gap-2 cursor-pointer'>
                            <div className='flex justify-center items-center gap-1 border border-gray-200 
                               font-semibold px-2 py-1 rounded-md hover:bg-gray-200 hover:border-gray-300 ease-in-out'>
                                <Clock3 size={20}/>
                                <div>{item.date}</div>
                            </div>
                            
                            <div className='p-2 hover:bg-gray-200 cursor-pointer rounded-md'
                                 onClick={()=>{deleteTask(item.id)}}
                            >
                                <Trash2 size={20}/>
                            </div>
                        </div>
                        
                    </div>
                )) : <div className='font-josefin font-semibold text-gray-400'>Aucune Taches</div>
            }

            {task.length > 0 && 
                <div className='text-sm font-serif font-medium text-gray-600'>
                    Il reste {task.length} taches
                </div>}
            
        </div>
    );
}

export default TaskList;