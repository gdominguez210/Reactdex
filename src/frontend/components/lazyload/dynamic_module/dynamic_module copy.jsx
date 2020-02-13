import React, { useState, useEffect, lazy, Suspense } from 'react';


export const DynamicModule = (props) => {

    const [Component, setComponent] = useState(null);

    const { component, ...rest } = props;

    useEffect(() => {
        setComponent(lazy(component));
    }, [])
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {Component && (<Component {...rest} />)}
            </Suspense>
        </div>
    )

}