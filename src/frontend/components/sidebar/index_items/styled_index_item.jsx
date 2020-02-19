import React from 'react';
import styled from 'styled-components'
import { IndexItem } from './index_item';


export const StyledIndexItem = styled(IndexItem)`

    color: #FFFFFF;
    padding: 1.2em;
    font-size: 1.5em;
    margin: .5em;
    background: rgba(255,255,255,0.1);
    border-radius: 4px;
    
    ul {
        display: flex;

        li:first-child {
            margin-right: .5em;
            
        }
    }


`