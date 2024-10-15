import React from "react";
import TrashList from "@/components/TrashList/TrashList";
import { TaskProvider } from "@/hook/TaskContext";

const Trash: React.FC = () => {
    return(
        <>
            <TaskProvider>
                <TrashList/>
            </TaskProvider>
        </>
    );
}

export default Trash;