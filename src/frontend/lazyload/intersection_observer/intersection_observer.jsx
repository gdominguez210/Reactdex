import React, { useState, useEffect } from 'react';

export const IntersectionObserver = (props) => {

    const [hasIntersected, setIntersected] = useState(false);

    const observerOptions = {
        root: props.root || null,
        rootMargin: props.margin || "0px",
        threshold: props.threshold || 0
    }

    const targetContainerRef = React.createRef();

    let observer = null;

    const load = (entries) => {
        const { onIntersection, continueObserving } = props;

        if (!continueObserving && !hasIntersected) {
            const entry = entries.find(entry => entry.target === targetContainerRef.current)

            if (entry && entries.isIntersecting) {
                setIntersected(true);
                onIntersection && onInteresection(entries);
                observer.unobserve(targetContainerRef.current);
            }

        } else if (continueObserving && onIntersection) {
            onIntersection(entries);
        }

    }

    useEffect(() => {
        observer = new IntersectionObserver(load, observerOptions);
        observer.observe(targetContainerRef.current);
        return () => observer.unobserve(targetContainerRef.current);
    }, []);

    const { children, continueObserving }
    return (
        <div className="intersection-observer" ref={targetContainerRef}>
            {continueObserving ? children : hasIntersected && children}
        </div>
    )
}