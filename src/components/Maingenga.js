import React, { useState } from 'react';
import Nav from './Nav';
import Work from './pages/Work';
import Gengamask from './pages/Gengamask';
import Intro from './pages/Intro';
import Contact from './pages/Contact'
import Footer from './pages/Footer'

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
                <Footer />
        </div>
    )
}