import React from 'react';
import './Screen.css';


export default class Screen extends React.Component{
    render(){
        return(
            
            <div >
                <nav id="menu">
                    <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="week.html">Semana da Tecnologia</a></li>
                    <li><a href="cursos.html">Cursos</a></li>
                    <li><a href="login.html">Entrar</a></li>
                    <li><a href="contato.html">Contato</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
    

