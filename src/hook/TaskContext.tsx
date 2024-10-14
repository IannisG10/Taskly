import React, { ReactNode, createContext, useContext, useState } from "react";

// déclaration du type de la tache 
interface Task {
    id: number,
    description: string,
    tags: string,
    date: any,
    TagList: string[] 
}

// declaration du type pour l'etat qui va capturer les erreurs des champs 
interface ErrorInput {
    descError?: string,
    tagError?: string
}

// Type contexte
interface TaskContextType {
    task: Task[],
    setTask: (value: Task[]) => void,
    reserchTask: Task[],
    setReserchtask: (value: Task[]) => void,
    trashedTask: Task[],
    setTrashedTask: (value: Task[]) => void,
    inputValue: string,
    setInputValue: (value: string) => void,
    tagValue: string,
    setTagValue: (value: string) => void,
    date: Date,
    setDate: (date: Date) => void,
    inputErr: ErrorInput,
    setInputErr: (Err: ErrorInput) => void,
    searchTask: string,
    setSearchTask: (value: string) => void,
    addTask: () => void,
    deleteTask: (id: number) => void,
    searchTerm: (term: string)  => void,
    taskNotFound: boolean,
    setTaskNotfound : (value: boolean) => void
}

// Creation du contexe
const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
    children: ReactNode
}

// TaskProvider qui fournit le contexte aux autres composant
export const TaskProvider: React.FC<TaskProviderProps> = ({children})=> {
    const [inputValue,setInputValue] = useState<string>("");
    const [tagValue,setTagValue] = useState<string>("");
    const [searchTask ,setSearchTask] = useState<string>("");
    const [task,setTask] = useState<Task[]>([]);
    const [reserchTask,setReserchtask] = useState<Task[]>([])
    const [trashedTask,setTrashedTask] = useState<Task[]>([]);
    const [inputErr,setInputErr] = useState<ErrorInput>({})
    const [date,setDate] = useState<Date>(new Date())
    const [taskNotFound,setTaskNotfound] = useState<boolean>(false);
    

    const addTask = () => {
        const newTask: Task = {
            id: Date.now(),
            description: inputValue,
            tags: tagValue,
            date: date.toLocaleDateString(),
            TagList: tagValue.split(",")
        }

        const newErrors: ErrorInput = {}

        if(inputValue.trim() !== "" && tagValue.trim() !== ""){
            setTask(prevTask => [...prevTask,newTask]);

            setInputValue("");
            setTagValue("");
            setInputErr(newErrors);
        }else{ //Si non si l'un des champs est incomplète, des instruction pour gérer les erreurs s'engage 
            
             if(inputValue.trim() === ""){
                newErrors.descError = "La description doit etre complétée"
            }
            if(tagValue.trim() === ""){
                newErrors.tagError = "Veuillez fournir un tag"
            }
            setInputErr(newErrors);
            return;
        }
    }

    const deleteTask = (id: number) => {
        setTask(prevTask => prevTask.filter(tasks => tasks.id !== id))
        setReserchtask(prevTask => prevTask.filter(tasks => tasks.id !== id))

        const taskToDelete: Task[] = [...task];
        taskToDelete.filter(tasks => tasks.id === id) 
        setTrashedTask(taskToDelete);
    }

    const searchTerm = (term: string) => {

        task.map((tasks) => tasks.description === term.trimEnd()  ? (()=>{
            setTaskNotfound(true);
            const filterTaskSearch: Task[] = task.filter(tasks => tasks.description === term);

            setReserchtask(filterTaskSearch);
            
        })()
        : setTaskNotfound(false)
        )
    }

    return(
        <TaskContext.Provider 
            value={{task,setTask,reserchTask,setReserchtask,inputValue,setInputValue,tagValue,setTagValue,date,setDate,searchTask,
            setSearchTask,addTask,trashedTask,setTrashedTask,deleteTask,searchTerm,taskNotFound,
            setTaskNotfound,inputErr,setInputErr}}>
                {children}
        </TaskContext.Provider>
    );
}

export const useTask = () => {
    const context = useContext(TaskContext)
    if(!context){
        throw new Error("useTask doit etre utilisé dans TaskProvider")
    }

    return context;
}