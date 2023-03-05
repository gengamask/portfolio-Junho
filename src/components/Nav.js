import React from "react";

function Nav({currentPage, handlePage}) {
    return (
    <div className="thisNav nav flex justify-center">
        <ul className="navi text-lg text-white flex space-x-5">
            <a href="#gengamask" onClick={() => handlePage('Gengamask')} className={currentPage === 'Gengamask' ? 'nav-link active' : 'nav-link'}>
                <img width={25} height={25} className="thisLogo" src="https://avatars.githubusercontent.com/u/109125494?v=4"></img>
            </a>
            <a href="#about" onClick={() => handlePage('About')} className={currentPage === 'About' ? 'nav-link active text-amber-400' : 'nav-link'}>
                About
            </a>
            <a href="#work" onClick={() => handlePage('Work')} className={currentPage === 'Work' ? 'nav-link active text-amber-400' : 'nav-link'}>
                Work
            </a>
            <a href="#contact" onClick={() => handlePage('Contact')} className={currentPage === 'Contact' ? 'nav-link active text-amber-400' : 'nav-link'}>
                Contact
            </a>
        </ul>
    </div>
    )
}

export default Nav;