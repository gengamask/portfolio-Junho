import React, { useState } from "react";
import Cfb from "./subpages/Cfb";
import Drive from "./subpages/Drive";

export default function Work() {
    const [showCfb, setShowCfb] = useState(false);

    const [showDrive, setShowDrive] = useState(false);

    const handleCloseCfb = () => setShowCfb(false);
    
    const handleCloseDrive = () => setShowDrive(false);

    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <div>
            <div className="flex justify-center">
                <button onClick={onButtonClick} className='text-white hover:text-amber-400'><img className="rounded-full h-10 w-10" src="https://avatars.githubusercontent.com/u/109125494?v=4"></img></button>
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
            </div>
        </div>
    );
}