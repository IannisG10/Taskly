import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const TabsComponent: React.FC = () => {
    return(
        <>
            <Tabs defaultValue="Toutes" className=' flex justify-center items-center w-full'>
                <TabsList className="w-full border border-gray-200 shadow-inner">
                    <TabsTrigger value="Toutes" className="w-full">Toutes</TabsTrigger>
                    <TabsTrigger value="Aujourd'hui" className="w-full">Aujourd'hui</TabsTrigger>
                </TabsList>
            </Tabs>
        </>
    );
}

export default TabsComponent;