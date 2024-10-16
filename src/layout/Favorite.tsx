import React from "react";
import FavList from "@/components/FavList/FavList";
import { TaskProvider } from "@/hook/TaskContext";

const Favorite: React.FC = () => {
    
    return(
        <>
            <TaskProvider>
                <FavList/>
            </TaskProvider>
        </>
    )
}

export default Favorite;