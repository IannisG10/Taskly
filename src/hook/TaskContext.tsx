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
    restoreTask: (id: number) => void,
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
    const [favTask,setFavTask] = useState<Task[]>(()=> {
        const storedFavTask = sessionStorage.getItem("Favs");
        return storedFavTask ? JSON.parse(storedFavTask) : []
    })
    
    useEffect(()=> {
        sessionStorage.setItem("Task",JSON.stringify(task));
        setFavTask(() => {
            const storeFavs = task.filter(tasks => tasks.isFav);
            return storeFavs;
        })
    },[task])

    useEffect(()=> {
        // Sauvegarde les éléments supprimés dans le localStorage des que 'trashedTask' est mis à jour
        sessionStorage.setItem("Trash",JSON.stringify(trashedTask));
    },[trashedTask])

    // Effet de bord pour  sauvegarder les taches importantes dans le session storage 
    useEffect(()=>{
        sessionStorage.setItem("Favs",JSON.stringify(favTask));
    },[favTask])


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
            setTask(prevTask => {
                        const updateTask = [...prevTask, newTask];
                        console.log("tahes ajoutés:",updateTask);
                        return updateTask;
                     }
            );
            

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
        // const taskToDelete: Task[] = task.filter(tasks => tasks.id === id);
        // filtre le tableau taskToDelete en gardant que les taches sipprimés
        // setTrashedTask(taskToDelete);
        setTrashedTask(() => {
            //Filtre les taches qui doivent etre placée dans la corbeille
            const taskToDelete = task.filter(tasks => tasks.id === id);
            //Combine les elemnts precdent de la corbeille aux nouveaux éléments ajoutées 
            const concatTrash = trashedTask.concat(taskToDelete);

            return concatTrash;
        })

        setTask(prevTask => prevTask.filter(tasks => tasks.id !== id)); //Task est modifiée 
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
        // Mettre à jour l'etat `task` afin de modifier les valeurs boolean de isFav
        setTask(prevTask => {
            const updateTask = prevTask.map(tasks => tasks.id === id ? {...tasks,isFav: !tasks.isFav} : tasks);
            return updateTask;
        });   
    }

    const restoreTask = (id: number) => {
        setTrashedTask(prevTrash => {
            const taskToRestore = prevTrash.filter(trahs => trahs.id !== id);
            return taskToRestore;
        });
    }
    

    return(
        <TaskContext.Provider 
            value={{task,setTask,reserchTask,setReserchtask,inputValue,setInputValue,tagValue,setTagValue,date,setDate,searchTask,
            setSearchTask,addTask,trashedTask,setTrashedTask,deleteTask,restoreTask,searchTerm,
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