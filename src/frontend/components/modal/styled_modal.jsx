import React from 'react';
import styled from 'styled-components';
import { Modal } from './modal';
export const StyledModal = styled(Modal)`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 50;

    > div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

`