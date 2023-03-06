import React from "react";

export default function DrivePop({visible, onClose}) {
    if(!visible) return null;

    return (
        <div id="cfbPop" className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
            <div className="flex justify-center items-center h-5/6"> 
                <div id="card" className="rounded-3xl bg-white flex flex-col justify-center items-center w-9/12 h-fit space-y-5">
                    <button onClick={ onClose } >X</button>
                    <img className="h-fit w-9/12" src="https://user-images.githubusercontent.com/109125494/222983991-eb408061-0dbd-4f09-9a0f-c6585cc0eb61.png" alt="cfb"></img>
                    <div id="intro" className="decoration-8">
                        <h1 className="text-2xl">Find My Scenic Drive</h1>
                        <p>
                            You can find your ideal scenic drive way from this website
                        </p> 
                    </div>
                    <a href="https://github.com/gengamask/group-proj-one" target="_blank" rel="noopener noreferrer">
                        <img className="h-16 w-16 rounded-full" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}