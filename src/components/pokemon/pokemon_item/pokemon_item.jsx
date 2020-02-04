import React, { useState, useEffect } from 'react';


import { typeColor } from '../../../styles/pokemonStyles';
import { capitalize } from '../../../util/pokemon_util';
import { StatRadar } from '../../graph/stat_radar_graph';
export const PokemonItem = (props) => {


    const { pokemon, className } = props;
    const { name, sprites, id, stats, moves, types, abilities } = pokemon;
    let sortedTypes = types.sort((a, b) => a.slot - b.slot);
    const typeItems = sortedTypes.map(item => <span className="type" style={typeColor(item.type.name)} key={item.type.name}> {capitalize(item.type.name)} </span >)
    return (
        <div className={className}>
            <div className="pokemon-item">
                <div className="inner-wrap">
                    <div className="pokemon-stats">
                        <StatRadar stats={stats} />
                    </div>
                    <div className="pokemon-details" >
                        <div className="pokemon-image-container">
                            <img src={sprites.front_default} />
                        </div>

                        <h1>{capitalize(name)}</h1>
                        <div className="types">
                            {typeItems}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}