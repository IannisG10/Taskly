import React from "react";
import { useTask } from "@/hook/TaskContext";
import { Checkbox } from "../ui/checkbox";
import { Trash2 } from "lucide-react";
import { Clock3 } from "lucide-react";
import { Star,Filter } from "lucide-react";

const TaskList: React.FC = () => {
    const { task,deleteTask,favingTask,doneTask,theme,taskIsFound,taskFound_Bysearch } = useTask();
    

    return(
        <div className='flex flex-col gap-2 sm:w-1/4 w-4/5 relative'>

            {taskIsFound ? 
                taskFound_Bysearch.map((item,index) => (
                    <div key={index}
                         className={`flex flex-col relative border px-2 py-2 w-full ${theme ? "border-gray-400":"border-gray-200"} rounded-md shadow gap-1`}
                    >
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-row items-center'>
                                    <div>
                                        <Checkbox checked={item.isDone}
                                            onCheckedChange={()=>{doneTask(item.id)}}
                                        />
                                    </div>
                                    <div className={`${theme ? "text-gray-200":"text-black"} inline-block font-medium text-base ml-1 w-auto`}>
                                        {item.isDone ? <s>{item.description}</s> : <p>{item.description}</p>}
                                    </div>
                                </div>
                                <div className='hover:cursor-pointer'
                                    onClick={()=> {favingTask(item.id)}}
                                    title={`${!item.isFav && "Ajouter aux tâches importantes" }`}
                                >
                                   {item.isFav ? <Star size={20}fill="yellow" color={`${theme ? "gray":"black"}`}/> : <Star size={20} color={`${theme ? "white":"black"}`}  />} 
                                </div>
                            </div>

                            <div className='flex flex-row items-center gap-1'>
                                {item.TagList.map((itemTag,index) => (
                                    <div className='w-fit text-xs bg-gray-400 py-1 px-2 rounded-lg font-medium'
                                            key={index}
                                    >
                                        {itemTag}
                                    </div>
                                ))}
                            </div>

                            <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                <div className={` ${theme ? "hover:bg-gray-600 hover:border-gray-300":"hover:bg-gray-200 hover:border-gray-300"} flex justify-center items-center gap-1 border border-gray-200 
                                font-semibold px-2 py-1 rounded-md ease-in-out`}>
                                    <Clock3 size={20} color={`${theme ? "white":"black"}`}/>
                                    <div className={`${theme ? "text-gray-200":"text-black"}`}>{item.date}</div>
                                </div>
                                
                                <div className={`${theme ? "hover:bg-gray-500":"hover:bg-gray-200"} p-2 hover:bg-gray-200 cursor-pointer rounded-md`}
                                    onClick={()=>{deleteTask(item.id)}}
                                    title="supprimer"
                                >
                                    <Trash2 size={20} color={`${theme ? "white":"black"}`}/>
                                </div>
                            </div>
                    </div>
                )): 
                task.length > 0 ? 
                    <div>
                        <div className="flex justify-center items-center mb-2 border border-gray-300 w-8 p-1 hover:bg-gray-200 cursor-pointer rounded-md">
                            <Filter size={20}/>
                        </div>
                        {
                            task.map((item,index) =>(
                                <div key={index}
                                     className={`flex flex-col relative border px-2 py-2 w-full ${theme ? "border-gray-400":"border-gray-200"} rounded-md shadow gap-1`}
                                >
                                        <div className='flex justify-between items-center'>
                                            <div className='flex flex-row items-center'>
                                                <div>
                                                    <Checkbox checked={item.isDone}
                                                        onCheckedChange={()=>{doneTask(item.id)}}
                                                    />
                                                </div>
                                                <div className={`${theme ? "text-gray-200":"text-black"} inline-block font-medium text-base ml-1 w-auto`}>
                                                    {item.isDone ? <s>{item.description}</s> : <p>{item.description}</p>}
                                                </div>
                                            </div>
                                            <div className='hover:cursor-pointer'
                                                onClick={()=> {favingTask(item.id)}}
                                                title={`${!item.isFav && "Ajouter aux tâches importantes" }`}
                                            >
                                               {item.isFav ? <Star size={20}fill="yellow" color={`${theme ? "gray":"black"}`}/> : <Star size={20} color={`${theme ? "white":"black"}`}  />} 
                                            </div>
                                        </div>
            
                                        <div className='flex flex-row items-center gap-1'>
                                            {item.TagList.map((itemTag,index) => (
                                                <div className='w-fit text-xs bg-gray-400 py-1 px-2 rounded-lg font-medium'
                                                        key={index}
                                                >
                                                    {itemTag}
                                                </div>
                                            ))}
                                        </div>
            
                                        <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                            <div className={` ${theme ? "hover:bg-gray-600 hover:border-gray-300":"hover:bg-gray-200 hover:border-gray-300"} flex justify-center items-center gap-1 border border-gray-200 
                                            font-semibold px-2 py-1 rounded-md ease-in-out`}>
                                                <Clock3 size={20} color={`${theme ? "white":"black"}`}/>
                                                <div className={`${theme ? "text-gray-200":"text-black"}`}>{item.date}</div>
                                            </div>
                                            
                                            <div className={`${theme ? "hover:bg-gray-500":"hover:bg-gray-200"} p-2 hover:bg-gray-200 cursor-pointer rounded-md`}
                                                onClick={()=>{deleteTask(item.id)}}
                                                title="supprimer"
                                            >
                                                <Trash2 size={20} color={`${theme ? "white":"black"}`}/>
                                            </div>
                                        </div>
                                </div>
                            )
                        )
                        }
                    </div> :  <div className='font-josefin font-semibold text-gray-400'>Aucune Taches</div>
            }

            {task.length > 0 && 
                <div className={`${theme ? "text-gray-200":"text-gray-600"} text-sm font-serif font-medium `}>
                    Il reste {task.length} taches
                </div>}
            
        </div>
    );
}

export default TaskList;