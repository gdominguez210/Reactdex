import React, { useState, useEffect } from 'react';

export const Optimg = (props) => {
    const { source } = props;
    const [url, setUrl] = useState('');

    useEffect(() => {
        const img = new Image();

        img.onload = () => { setUrl(img.src) }
        img.src = source;
    }, [source])


    return (
        <img src={url ? url : null} />
    )
}