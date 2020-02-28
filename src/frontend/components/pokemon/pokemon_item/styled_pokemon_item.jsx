import React from 'react';
import styled, { css } from 'styled-components'
import { PokemonItem } from './pokemon_item';

export const StyledPokemonItem = styled(PokemonItem)`
    height: 100%;
    

    .pokemon-item {
        padding: 20px;
        height: 100%;
        border: 1px solid #eeeeee;
        border-radius: 4px;
    }
    .pokemon-details-container {
        display:flex;
        height: 100%;
        margin:0px 20px;
        border-radius:4px;
         border: 1px solid #dddddd;
        box-shadow: 0px 0px 26px rgba(0,0,0,0.06);
    }
    
    .pokemon-details {
        text-align: center;
        font-size: 2em;
        flex:1;
        border-radius: 4px;
        height: 100%;
        background: #FFFFFF;
        position:relative;
        z-index:1;

        .pokemon-header {
            min-height: 250px;
            position:relative;
            font-size:2.5em;
            display: block;
            padding: 50px;
            color: #FFFFFF;
            text-shadow: 0px 0px rgba(0,0,0,0.05);
            overflow: hidden;
            background-color: ${props => {
        const typeObj = props.pokemon.types.find(type => type.slot === 1);
        return props.theme[typeObj.type.name];
    }};
            :after {
                position: absolute;
                top: -25%;
                left: -25%;
                right: -25%;
                bottom: 0;
                content: '';
                display: block;
                z-index:0;
                background: -moz-radial-gradient(bottom center, ellipse cover, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 33%, rgba(0,0,0,0.5) 100%); /* FF3.6-15 */
background: -webkit-radial-gradient(bottom center, ellipse cover, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 33%,rgba(0,0,0,0.5) 100%); /* Chrome10-25,Safari5.1-6 */
background: radial-gradient(ellipse at bottom center, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 33%,rgba(0,0,0,0.5) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#80000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
            }
        }


        .pokemon-image-container {
            position: relative;
            display: flex;
            align-items: flex-end;;
            justify-content: center;
            margin-top:-75px;
            min-height:77px;
            margin-bottom: 50px;

            img {
                    transform:scale(1.5);
                    position:absolute;
            }

           

        }
    }

    .inner-wrap {
        display:flex;

        > div {
            flex: 1;
            max-height: 100%;
            height: 100%;
            
        }
    }
`