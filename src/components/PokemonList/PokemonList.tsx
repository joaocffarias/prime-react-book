import React, { FC } from 'react';
import { PokemonListWrapper } from './PokemonList.styled';
import { Card } from 'primereact/card';

interface PokemonListProps {}

const PokemonList: FC<PokemonListProps> = () => (
 <PokemonListWrapper data-testid="PokemonList">
    <div className="card">
            <Card title="Simple Card">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
 </PokemonListWrapper>
);

export default PokemonList;
