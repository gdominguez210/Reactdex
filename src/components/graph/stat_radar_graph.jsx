import React from 'react';
import Radar from 'react-d3-radar';
import { handleStats } from '../../util/pokemon_util';
export const StatRadar = (props) => {
    const { stats } = props;
    console.log(stats);
    return <Radar
        width={200}
        height={200}
        padding={10}
        domainMax={255}
        highlighted={null}
        data={handleStats(stats)}
    />
}