import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonList from './PokemonList';

describe('<PokemonList />', () => {
  test('it should mount', () => {
    render(<PokemonList />);

    const PokemonListElement = screen.getByTestId('PokemonList');

    expect(PokemonListElement).toBeInTheDocument();
  });
});
