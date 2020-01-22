import React, { useState, useEffect } from 'react';
import { getPokemon } from '../../util/pokemon_util';
import * as styles from '../../styles/pokemonStyles';

export const PokemonItem = (props) => {

    const { pokemon } = props;
    const { name, sprites, id, stats, moves, types, abilities } = pokemon;;
    const typeItems = types.map(item => <span className="type" key={item.type.name}> {item.type.name}</span >)
    return (
        <div className="pokemon-item" style={styles.item}>
            <div className="inner-wrap" style={styles.innerWrap}>
                <img src={sprites.front_default} style={styles.image} />
                <h1>{name}</h1>
                <div className="types">
                    {typeItems}
                </div>
            </div>
        </div>
    )
}