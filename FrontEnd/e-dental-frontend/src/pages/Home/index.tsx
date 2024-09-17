import React from 'react';
import Navbar from '../../components/Navbar';

function Home() {
    return (
        <>
            <Navbar />
            <div className="p-4 flex items-center justify-center">
                <h1 className="text-3xl font-bold">Bem-vindo, Usuário</h1>
            </div>
        </>
    );
}

export default Home;