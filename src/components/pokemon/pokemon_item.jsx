import React, { useState, useEffect } from 'react';

import * as styles from '../../styles/pokemonStyles';
import { capitalize } from '../../util/pokemon_util';
export const PokemonItem = (props) => {


    const { pokemon } = props;
    const { name, sprites, id, stats, moves, types, abilities } = pokemon;
    let sortedTypes = types.sort((a, b) => a.slot - b.slot);
    const typeItems = sortedTypes.map(item => <span className="type" style={styles.typeColor(item.type.name)} key={item.type.name}> {capitalize(item.type.name)} </span >)
    return (
        <div className="pokemon-item" style={styles.item}>
            <div className="inner-wrap" style={styles.innerWrap}>
                <div className="pokemon-image-container">
                    <img src={sprites.front_default} style={styles.image} />
                </div>
                <h1>{capitalize(name)}</h1>
                <div className="types">
                    {typeItems}
                </div>
            </div>
        </div>
    )
}