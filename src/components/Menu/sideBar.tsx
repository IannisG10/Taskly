import React from "react";
import { CalendarDays,ListTodo,Trash2,Star } from "lucide-react";
import { Moon,Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { Switch } from "../ui/switch";
import { useTask } from "@/hook/TaskContext";

interface sideBarProps { 
    openMenue: boolean
}

const SideBar: React.FC<sideBarProps> = ({openMenue}) => {

    const {theme,changeTheme} = useTask();
    
    return(
        <div className={`${openMenue && "translate-x-1 transition shadow-md my-4 rounded ease-in-out duration-800 opacity-100"} h-screen flex justify-center shadow-s
                absolute top-0 left-3 w-1/5  transition duration-500 -translate-x-96 z-0 `}>

            <div className='flex flex-col justify-center gap-2 border border-gray-100 rounded my-8 
                shadow-md w-2/3 h-1/3 px-3 py-2'>
                <div className='flex justify-between items-center my-3'>
                    <div className='font-bold font-josefin text-xl'>
                        Menu
                    </div>
                    <div className='flex items-center gap-1'>
                        <Sun size={13} color="yellow"/>
                        <Switch checked={theme}
                                onCheckedChange={changeTheme}
                        />
                        <Moon size={13} color="blue"/>
                    </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-200 hover:rounded-sm p-1">
                    <div>
                        <ListTodo size={21}/>
                    </div>
                    <h3 className='text-sm font-semibold'><Link to='/'>Toutes les Taches</Link></h3>
                </div>

                <div className='flex items-center gap-1 ml-4 hover:bg-gray-200 hover:rounded-sm p-2'>
                    <CalendarDays size={21}/>
                    <h3 className='text-sm font-semibold'>Aujourd'hui</h3>
                </div>

                <div className='flex items-center gap-1 ml-4 hover:bg-gray-200 hover:rounded-sm p-2'>
                    <Star size={21}/>
                    <h3 className='text-sm font-semibold'><Link to='/important'>Important</Link></h3>
                </div>

                <div className='flex items-center gap-1 ml-4 hover:bg-gray-200 hover:rounded-sm p-2'>
                    <Trash2 size={21}/>
                    <h3 className='text-sm font-semibold'><Link to='/corbeille'>Corbeille</Link></h3>
                </div>
            </div>
        </div>
    );
}

export default SideBar