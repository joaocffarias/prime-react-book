import React from 'react';
import PokemonList from '../PokemonList/PokemonList';
import { Panel } from 'primereact/panel';

//Declaração
const PokemonListV2 = () => {

    //Props e States // entrada


    //Processamento


    //Saída
    //Retorno do template
    return(
        <Panel header="Header">
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    )

};

//Externalização do componente para uso
export default PokemonListV2;