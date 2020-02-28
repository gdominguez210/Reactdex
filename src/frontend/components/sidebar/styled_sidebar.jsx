import React from 'react';
import styled from 'styled-components'
import { Sidebar } from './sidebar';

export const StyledSidebar = styled(Sidebar)`
    max-height: 100%;
    flex: 1;
    background: #292020;
    position: relative;
    overflow-x:hidden;

    > div {
        position: absolute;
        top:0;
        right:-16px;
        left:0;
        bottom:0;
        overflow-y:scroll;

    }
`