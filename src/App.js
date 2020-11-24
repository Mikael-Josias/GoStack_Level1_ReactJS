import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import api from './services/api';
import { render } from 'react-dom';

/**
 * 3 conceitos do react
 * 
 * componentes
 * propriedades
 * estado
 */

function App(){
    const [ projects, setProjects ] = useState([]);

    //useState retorna um vetor de duas posições.
    //
    //1.Variavel com seu valor inicial.
    //2.Função para atualizar o valor inicial.

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        });
    }, []);

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
     
        console.log(projects);
    }

    return (
        <>
            <Header title="Projects" />
                <ul>
                    {projects.map(project => <li key={project.id}>{project.title}</li>)}
                </ul>

                <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;