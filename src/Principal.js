import React from 'react';
import './Screen.css';

export default class Principal extends React.Component{
    render(){
        return(
            
            <div>
                <div id="corpicho">
			        <header id="cabecalho">
                        <img></img>
                    </header>

                    <h3>Vale a pena estudar no IF?</h3>
                    <video width="550" height="350" controls>
                        <source src="InstitucionalIFSP.mp4" type="video/mp4">
                        </source>
                    </video>

                    <p id="footer">IFSP - Câmpus Pirituba - Av. Mutinga, 951 - Jardim Santo Elias - CEP: 05110-000 - São Paulo/SP - Contato: (011) 2504-0100</p>
                </div>


            </div>
        );
    }
}