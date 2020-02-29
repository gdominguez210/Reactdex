import React from 'react';
import { handleStatName } from './util'

export const PokemonStatItem = (props) => {

    const { stat, className } = props;

    return (
        <div className={className}>
            <div className="label">
                <p>{handleStatName(stat.stat.name)}</p>
            </div>
            <div className="val-container">
                <p>{stat.base_stat}</p>
                <div className="val" />
            </div>
        </div>
    )
}