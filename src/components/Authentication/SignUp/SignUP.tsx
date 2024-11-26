import React from "react";


const SignUP: React.FC = () => {
    return(
        <div className="flex flex-col justify-center items-center border border-gray-100 p-5 rounded-md shadow-md">
            <div>
                <h1 className="font-bold text-3xl">Inscription</h1>
                <p className="text-sm text-gray-400">Créez votre compte en quelques secondes</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-3">
                <div className="flex flex-col">
                    <label htmlFor="">Nom</label>
                    <input type="text" className="border border-gray-200 rounded-sm" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Email</label>
                    <input type="text" className="border border-gray-200 rounded-sm"/>
                </div>

                <button className="rounded-md px-2 py-1 bg-zinc-950 text-white font-medium">S'inscrire</button>
            </div>
        
        </div>
    )
}

export default SignUP