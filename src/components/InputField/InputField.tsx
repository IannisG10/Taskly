import React, { useState, useEffect, useRef } from "react";
import { CalendarDays, Plus } from "lucide-react"
import TabsComponent from "./Tabs/TabsComponent";
import { Calendar } from "../ui/calendar";
import { useTask } from "@/hook/TaskContext";

const InputField: React.FC= () => {
    /*
        task:Etat qui stocke le contenue de la tache 
    */ 

    const {inputValue,setInputValue,tagValue,setTagValue,inputErr,date,setDate,addTask,theme} = useTask();

    const [showCalendar,setShowCalendar] = useState<boolean>(false);
    
    const inputDateRef = useRef<HTMLDivElement>(null)

     const displayCalendar = () =>{
        setShowCalendar(true);
    }

    const clickOut = (e:MouseEvent) => {
        if(inputDateRef.current && !inputDateRef.current.contains(e.target as Node)){
            setShowCalendar(false);
        }
    }

    useEffect(()=>{
        if(showCalendar){
            document.addEventListener('mousedown',clickOut);
        }else{
            document.removeEventListener('mousedown',clickOut);
        }

        return () => {
            document.removeEventListener('mousedown',clickOut);
        }
    },[showCalendar])

    const handleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleTag = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTagValue(e.target.value)
    }

    const handleAddTAsk = () => {
        addTask();
    }

    const handleSelectDate = (date: Date | undefined)=> {
        if(date){
            setDate(date)
        }
    }

    return(
        <>
            {theme ? 
                    <div className='flex flex-col justify-center items-center gap-2 w-1/4 relative'>
                        <TabsComponent/>
                        <div className=' flex flex-col justify-center items-center w-full'>
                            <input type="text"
                                    value={inputValue}
                                className='font-josefin py-1 px-4 pr-10 text-base rounded-md border bg-gray-600
                                border-gray-300 outline-none focus:outline-none placeholder:text-gray-400 focus:border-gray-200 text-gray-100 w-full'
                                placeholder='Ajouter une nouvelle taches'
                                onChange={handleTask}
                                />    
                                {inputErr.descError && <span className="text-xs text-red-500 font-semibold">{inputErr.descError}</span>}  
                        </div>
        
                        <button className='flex justify-center items-center font-josefin font-semibold ease-in duration-100
                            border border-gray-300 bg-black rounded-md w-full py-1 px-4 bg-transparent hover:bg-gray-950  '
                            onClick={displayCalendar}     
                        >
                            <CalendarDays size={23} color="white"/> 
                            <div className='text-gray-100'>Date d'échéance</div>
                        </button>
                        {showCalendar ? 
                            <div className='absolute top-28 z-20'
                                ref={inputDateRef}
                            >
                                <Calendar mode="single"
                                    selected={date}
                                    onSelect={handleSelectDate}
                                    className='rounded-md shadow-inner bg-gray-100 border border-black'
                                />
                            </div> : null}
        
                        <div className="flex flex-col justify-center items-center w-full">
                            <input type="text"
                                    value={tagValue}
                                    placeholder="Tags(séparés par des virgules)"
                                    className='font-josefin py-1 px-4  border border-gray-300 rounded-md 
                                    outline-none focus:border-gray-200 placeholder:text-gray-400 text-gray-100 focus:outline-none w-full bg-gray-600 '
                                    onChange={handleTag}
                            />
                        {inputErr.tagError && <span className="text-xs text-red-500 font-semibold">{inputErr.tagError}</span>}
                        </div>
                        <button className='flex justify-center items-center gap-1 outline-none
                                bg-gray-500 text-white py-1 px-4 rounded-md font-josefin w-full'
                                onClick={handleAddTAsk}
                        >
                            <Plus size={23} color="#000"/>
                            <div className="text-black" >Ajouter</div>
                        </button>
                </div> : 

            <div className='flex flex-col justify-center items-center gap-2 w-1/4 relative'>
                <TabsComponent/>
                <div className=' flex flex-col justify-center items-center w-full'>
                    <input type="text"
                            value={inputValue}
                        className='font-josefin py-1 px-4 pr-10 text-base rounded-md border 
                        border-gray-300 outline-none focus:outline-none focus:border-black w-full'
                        placeholder='Ajouter une nouvelle taches'
                        onChange={handleTask}
                        />    
                        {inputErr.descError && <span className="text-xs text-red-500 font-semibold">{inputErr.descError}</span>}  
                </div>

                <button className='flex justify-center items-center font-josefin font-semibold ease-in duration-100
                    border border-gray-300 rounded-md w-full py-1 px-4 bg-transparent hover:bg-gray-200  '
                    onClick={displayCalendar}     
                >
                    <CalendarDays size={23}/> 
                    <div>Date d'échéance</div>
                </button>
                {showCalendar ? 
                    <div className='absolute top-28'
                        ref={inputDateRef}
                    >
                        <Calendar mode="single"
                            selected={date}
                            onSelect={handleSelectDate}
                            className='rounded-md shadow-inner bg-gray-100 border border-black'
                        />
                    </div> : null}

                <div className="flex flex-col justify-center items-center w-full">
                    <input type="text"
                            value={tagValue}
                            placeholder="Tags(séparés par des virgules)"
                            className='font-josefin py-1 px-4  border border-gray-300 rounded-md 
                            outline-none focus:border-black focus:outline-none w-full'
                            onChange={handleTag}
                    />
                {inputErr.tagError && <span className="text-xs text-red-500 font-semibold">{inputErr.tagError}</span>}
                </div>
                <button className='flex justify-center items-center gap-1 outline-none
                        bg-gray-950 text-white py-1 px-4 rounded-md font-josefin w-full'
                        onClick={handleAddTAsk}
                >
                    <Plus size={23} color="#fff"/>
                    <div>Ajouter</div>
                </button>
            </div>
            }
        </>
    );
}

export default InputField;