import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Work from './pages/Work';
import Gengamask from './pages/Gengamask'

export default function Maingenga() {
    const [currentPage, changePage] = useState('Gengamask');

    const renderPage = () => {
        if (currentPage === 'Gengamask') {
            return <Gengamask />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
            return <Work />;
    }

    const handlePage = (page) => changePage(page);

    return (
        <div>
        <div>
            <Nav currentPage = {currentPage} handlePage = {handlePage} />
        </div>
            <div className="title text-slate-50 text-8xl flex justify-center items-center h-screen"> 
        <section>
                <h1 className='gengamask'>gengamask</h1>
         </section>
        </div>
            {renderPage()}
        </div>
    )
}