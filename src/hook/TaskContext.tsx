import React, { ReactNode, createContext, useContext, useState } from "react";
import { useEffect } from "react";
// déclaration du type de la tache 
interface Task {
    id: number,
    description: string,
    tags: string,
    date: any,
    TagList: string[],
    isFav: boolean
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
    favTask: Task[],
    setFavTask:(fav: Task[]) => void,
    addTask: () => void,
    deleteTask: (id: number) => void,
    favingTask: (id: number) => void,
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

    const [task,setTask] = useState<Task[]>(()=>{
        const storedTask = sessionStorage.getItem("Task");
         return storedTask ? JSON.parse(storedTask) : []
    });
    const [reserchTask,setReserchtask] = useState<Task[]>([]);

    const [trashedTask,setTrashedTask] = useState<Task[]>(()=> {
        const storedTrash = sessionStorage.getItem("Trash");
        return storedTrash ? JSON.parse(storedTrash) : []
    });
    const [inputErr,setInputErr] = useState<ErrorInput>({})
    const [date,setDate] = useState<Date>(new Date())
    const [taskNotFound,setTaskNotfound] = useState<boolean>(false);
    const [favTask,setFavTask] = useState<Task[]>([])
    
    useEffect(()=> {
        sessionStorage.setItem("Task",JSON.stringify(task));
    },[task])

    useEffect(()=> {
        // Sauvegarde les éléments supprimés dans le localStorage des que 'trashedTask' est mis à jour
        sessionStorage.setItem("Trash",JSON.stringify(trashedTask));
    },[trashedTask])


    const addTask = () => {
        const newTask: Task = {
            id: Date.now(),
            description: inputValue,
            tags: tagValue,
            date: date.toLocaleDateString(),
            TagList: tagValue.split(","),
            isFav: false
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
        // Copie les taches  dans la variable TaskToDelete
        const taskToDelete: Task[] = task.filter(tasks => tasks.id === id);
        // filtre le tableau taskToDelete en gardant que les taches sipprimés
        setTrashedTask(taskToDelete);
        //Mets à jour l'etat qui contient les taches supprimés 
        console.log("voici la liste des taches supprimés:",trashedTask);

        setTask(prevTask => prevTask.filter(tasks => tasks.id !== id))
        setReserchtask(prevTask => prevTask.filter(tasks => tasks.id !== id))

        
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

    const favingTask = (id: number) => {
        setTask(task.map(tasks => tasks.id === id ? {...tasks,isFav: !tasks.isFav}: tasks));
        const TaskToFavs = task.filter(tasks => tasks.isFav)
        setFavTask(TaskToFavs);
    }

    return(
        <TaskContext.Provider 
            value={{task,setTask,reserchTask,setReserchtask,inputValue,setInputValue,tagValue,setTagValue,date,setDate,searchTask,
            setSearchTask,addTask,trashedTask,setTrashedTask,deleteTask,searchTerm,
            favingTask,favTask,setFavTask,taskNotFound,setTaskNotfound,inputErr,setInputErr}}>
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