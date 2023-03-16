import React, { useState } from "react";
import Cfb from "./subpages/Cfb";
import Drive from "./subpages/Drive";
import ChatBite from "./subpages/ChatBite"

export default function Work() {
    const [showCfb, setShowCfb] = useState(false);

    const [showDrive, setShowDrive] = useState(false);

    const [showBite, setShowBite] = useState(false);

    const handleCloseCfb = () => setShowCfb(false);
    
    const handleCloseDrive = () => setShowDrive(false);

    const handleCloseBite = () => setShowBite(false);
 
    return (
        <div>
            <div className="flex justify-center">
                <a href="Resume.pdf" download='Resume.pdf'><button><img className="h-10 w-10 rounded-full" src="https://avatars.githubusercontent.com/u/109125494?v=4"></img></button></a>
            </div>
            <div id="workContainer" className="flex flex-col items-center justify-center md:flex md:items-center md:flex-row h-screen70 w-8/10 gap-x-4 gap-y-5">
                <div id="cfbCard">
                    <div>
                        <img onClick={() => setShowCfb(true)} className="rounded-2xl h-32 w-48 sm:h-72 sm:w-112" id="cfb" src="https://github.com/gengamask/CFB-Roster-Builder/raw/main/assets/Screenshot%202023-02-14%20202907.png"></img>
                    </div>
                </div>
                    <Cfb onClose={handleCloseCfb} visible={ showCfb }/>
                <div id="driveCard" >
                    <div>
                        <img onClick={() => setShowDrive(true)} className="rounded-2xl h-32 w-48 sm:h-72 sm:w-112" id="drive" src="https://user-images.githubusercontent.com/109125494/222983991-eb408061-0dbd-4f09-9a0f-c6585cc0eb61.png"></img>
                    </div>
                </div>
                    <Drive onClose={handleCloseDrive} visible={ showDrive }/>
                <div id="chatBiteCard" >
                    <div>
                        <img onClick={() => setShowBite(true)} className="rounded-2xl h-32 w-48 sm:h-72 sm:w-112" id="chatBite" src="https://github.com/gengamask/ChatBite/raw/main/assets/Screenshot2.png"></img>
                    </div>
                </div>
                    <ChatBite onClose={handleCloseBite} visible={ showBite }/>    
            </div>
        </div>
    );
}