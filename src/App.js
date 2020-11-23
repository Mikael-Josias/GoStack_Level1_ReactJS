import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';

/**
 * 3 conceitos do react
 * 
 * componentes
 * propriedades
 * estado
 */

function App(){
    const [ projects, setProjects ] = useState(['Desenvolvimento de app','Front-end web']);

    //useState retorna um vetor de duas posições.
    //
    //1.Variavel com seu valor inicial.
    //2.Função para atualizar o valor inicial.

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
     
        console.log(projects);
    }

    return (
        <>
            <Header title="Projects" />
                <ul>
                    {projects.map(project => <li key={project}>{project}</li>)}
                </ul>

                <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;