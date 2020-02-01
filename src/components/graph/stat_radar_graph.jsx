import React from 'react';
import Radar from 'react-d3-radar';
import { handleStats } from '../../util/pokemon_util';
export const StatRadar = (props) => {
    const { stats } = props;
    console.log(stats);
    return <Radar
        width={250}
        height={250}
        padding={0}
        domainMax={255}
        highlighted={null}
        data={handleStats(stats)}
    />
}