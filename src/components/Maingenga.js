import React, { useState } from 'react';
import Nav from './Nav';
import Work from './pages/Work';
import Gengamask from './pages/Gengamask';
import Intro from './pages/Intro';
import Contact from './pages/Contact'

export default function Maingenga() {
    const [currentPage, changePage] = useState('Gengamask');

    const renderPage = () => {
        if (currentPage === 'Gengamask') {
            return <Gengamask />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
            return <Work />;
    }

    const handlePage = (page) => changePage(page);

    return (
        <div>
            <div>
                <Nav currentPage = {currentPage} handlePage = {handlePage} />
            </div>
                < Intro />
            <div className='flex justify-center items-center'>
                {renderPage()}
            </div>
            <footer className='text-white flex justify-center gap-5'>
                <button><a className='text-xl' href='https://github.com/gengamask' target="_blank" rel="noopener noreferrer">github</a></button>
                <button><a className='text-xl' href='https://www.linkedin.com/in/junho-kim-b4510422a/' target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
            </footer>
        </div>
    )
}