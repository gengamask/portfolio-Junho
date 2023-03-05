import React from "react";

export default function WorksPop(visible, onClose) {
    if(!visible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blue-sm flex justify-center items-center">
            <div className="flex justify-center items-center h-4/6"> 
                <div id="card" className="rounded-3xl bg-white flex flex-col justify-center items-center w-9/12 h-full">
                    <button onClick={onClose} >X</button>
                    <img className="h-fit w-9/12" src="https://github.com/gengamask/CFB-Roster-Builder/raw/main/assets/Screenshot%202023-02-14%20202907.png" alt="cfb"></img>
                    <div id="intro" className="decoration-8">
                        <h1>College Football Roster</h1>
                        <p>
                            This is the most
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}