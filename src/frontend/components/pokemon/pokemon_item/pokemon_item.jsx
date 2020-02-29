import React, { useState, useEffect } from 'react';
import { typeColor } from '../../../styles/theme';
import { StatRadar } from '../../graph/stat_radar_graph';
import { StyledPokemonMoves } from '../moves/styled_moves'
import { PokemonDetails } from './pokemon_details/pokemon_details';
import { capitalize } from '../../../util/pokemon_util';
export const PokemonItem = (props) => {

    const { pokemon, className } = props;
    const { name, sprite, sprites, id, stats, moves, types, abilities } = pokemon;
    const sortedTypes = types.sort((a, b) => a.slot - b.slot);
    const [displayMoves, setDisplayMoves] = useState(false);
    const toggleDisplay = () => {
        displayMoves ? setDisplayMoves(false) : setDisplayMoves(true);
    }
    return (
        <div className={className}>
            <div className="pokemon-item">
                <div className="inner-wrap">
                    <div className="pokemon-detail-wrap">
                        <div onClick={toggleDisplay}>Show Moves</div>
                        <PokemonDetails stats={stats} abilities={abilities} sprite={sprite} sprites={sprites} types={sortedTypes} name={name} id={id} />
                    </div>
                    {displayMoves ? <StyledPokemonMoves moves={moves} /> : null}
                </div>
            </div>
        </div >
    )
}