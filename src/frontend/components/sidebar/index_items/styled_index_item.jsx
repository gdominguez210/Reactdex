import React from 'react';
import styled, { keyframes, css } from 'styled-components'
import { IndexItem } from './index_item';

export const bounce = keyframes`
        0%   { transform: scale(1.5,1.5)      translateY(0); }
        10%  { transform: scale(1.6,1.4)   translateY(0); }
        30%  { transform: scale(1.4, 1.6)   translateY(-10%); }
        50%  { transform: scale(1.55, 1.45) translateY(0); }
        57%  { transform: scale(1.5,1.5)      translateY(-5%); }
        64%  { transform: scale(1.5,1.5)      translateY(0); }
        100% { transform: scale(1.5,1.5)      translateY(0); }
`

export const StyledIndexItem = styled(IndexItem)`

    color: ${props => props.active ? '#FFFFFF' : '#a7a7a7'};
    padding: .5em;
    font-size: 1.2em;
    margin: .5em 0;
    background: rgba(255,255,255,0.1);
    border-radius: 4px;
    transition: .2s all linear;
    border: ${props => props.active ? '3px solid rgba(255, 255, 255, .1)' : '3px solid transparent'};
    position: relative;
    cursor: pointer;
    ${props => props.active ? null : css`filter:grayscale(45%)`};

    :hover {
        border: 3px solid rgba(255, 255, 255, .1);
        color: #FFFFFF;
        transform: translateX(5px);
    }


    :after {
        position: absolute;
        display: block;
        content: '';
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 0;
        background: -moz-linear-gradient(-45deg, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.65) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.65) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.65) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#a6000000', GradientType=1); /* IE6-9 fallback on horizontal gradient */
    }

    ul {
        display: flex;
        position: relative;
        z-index: 1;

        li {
            display: flex;
            align-items: center;
            margin-right: .5em;
                
            :first-child {
            background: rgba(0, 0, 0, 0.2);
            padding: 10px;
            border-radius: 200px;

            img {
                transform: scale(1.5);
                ${props => {
        if (props.active) {
            return css`
                                    animation-name: ${bounce};
                                    animation-duration: 2s;
                                    animation-iteration-count: infinite;
                                    animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
                                    `
        }
    }
    }
            }
        }
    }
}


`

export const ActiveStyledIndexItem = styled(StyledIndexItem)`
    border: 3px solid rgba(255, 255, 255, .1);
    color: #FFFFFF;
    transform: translateX(5px);
    filter: grayscale(0%);
    ul {
        li {
            :first-child {
                img {
                    animation-name: ${bounce};
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                    animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
                }
            }
        }
    }
`


export const BackupStyledIndexItem = styled(IndexItem)`

    color: #a7a7a7;
    padding: .5em;
    font-size: 1.2em;
    margin: .5em;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    transition: .2s all linear;
    border: 3px solid transparent;
    position: relative;
    cursor: pointer;
    filter: grayscale(45%);

    :hover {
        border: 3px solid rgba(255, 255, 255, .1);
        color: #FFFFFF;
        transform: translateX(5px);
    }


    :after {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
    }

    ul {
        display: flex;
        position: relative;
        z - index: 1;

        li {
            display: flex;
            align-items: center;
            margin-right: .5em;
                
                :first-child {
                background: rgba(0, 0, 0, 0.2);
                padding: 10px;
                border-radius: 200px;

                img {
                    transform: scale(1.5);
                }
            }
        }
    }
`