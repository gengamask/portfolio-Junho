import React, { useState } from "react";
import Cfb from "./subpages/Cfb"

export default function Work() {
    const [showCfb, setShowCfb] = useState(false)

    const handleClose = () => setShowCfb(false);

    return (
        <div id="work" className="flex justify-center items-center">
            <div id="workContainer" className="flex flex-col space-x-5 md:flex-row">
                <div id="cfbCard">
                    <button>
                    <img onClick={() => setShowCfb(true)} className="rounded-2xl" id="cfb" src="https://github.com/gengamask/CFB-Roster-Builder/raw/main/assets/Screenshot%202023-02-14%20202907.png"></img>
                    </button>
                </div>
                <Cfb onClose={handleClose} visible={ showCfb }/>
                <div id="driveCard">
                    <img className="rounded-2xl" id="drive" src="https://user-images.githubusercontent.com/109125494/222983991-eb408061-0dbd-4f09-9a0f-c6585cc0eb61.png"></img>
                </div>
            </div>
        </div>
    );
}