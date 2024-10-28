import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTask } from "@/hook/TaskContext";


const TabsComponent: React.FC = () => {

    const { theme } = useTask();

    return( 
        <>
            {theme ? 
                <Tabs defaultValue="Toutes" className=' flex justify-center shadow items-center w-full'>
                    <TabsList className="w-full border border-gray-600 shadow-inner bg-gray-400">
                        <TabsTrigger value="Toutes" className="w-full text-black bg-gray-400">Toutes</TabsTrigger>
                        <TabsTrigger value="Aujourd'hui" className="w-full text-black bg-gray-400">Aujourd'hui</TabsTrigger>
                    </TabsList>
                </Tabs> : 

                <Tabs defaultValue="Toutes" className=' flex justify-center items-center w-full'>
                    <TabsList className="w-full border border-gray-200 shadow-inner">
                        <TabsTrigger value="Toutes" className="w-full">Toutes</TabsTrigger>
                        <TabsTrigger value="Aujourd'hui" className="w-full">Aujourd'hui</TabsTrigger>
                    </TabsList>
                </Tabs>
            }
        </>
    );
}

export default TabsComponent;