import React, { useState, useEffect } from 'react';
import { typeColor } from '../../../styles/pokemonStyles';
import { StatRadar } from '../../graph/stat_radar_graph';
import { StyledPokemonMoves } from '../moves/styled_moves'
import { PokemonDetails } from './pokemon_details/pokemon_details';
import { capitalize } from '../../../util/pokemon_util';
export const PokemonItem = (props) => {

    const { pokemon, className } = props;
    const { name, sprites, id, stats, moves, types, abilities } = pokemon;
    console.log(pokemon);
    const sortedTypes = types.sort((a, b) => a.slot - b.slot);
    const typeItems = sortedTypes.map(item => <span className="type" style={typeColor(item.type.name)} key={item.type.name}> {capitalize(item.type.name)} </span >)

    return (
        <div className={className}>
            <div className="pokemon-item">
                <div className="inner-wrap">
                    <div className="pokemon-detail-wrap">
                        <PokemonDetails sprites={sprites} types={typeItems} name={name} />
                        {/* <StatRadar stats={stats} /> */}
                    </div>
                    <StyledPokemonMoves moves={moves} />
                </div>
            </div>
        </div >
    )
}