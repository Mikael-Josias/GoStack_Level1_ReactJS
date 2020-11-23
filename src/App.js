import React from 'react';
import Header from './components/Header';

/**
 * 3 conceitos do react
 * 
 * componentes
 * propriedades
 * estado
 */

function App(){
    return (
        <>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>
            <Header title="Projects">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Login</li>
                </ul>
            </Header>
        </>
    );
}

export default App;