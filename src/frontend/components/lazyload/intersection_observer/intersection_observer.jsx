import React, { useState, useEffect } from 'react';

export class LocationObserver extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasIntersected: false
        }

        this.options = {
            root: this.props.root || null,
            rootMargin: this.props.margin || "0px",
            threshold: this.props.threshold || 0
        }

        this.targetContainerRef = React.createRef();
        this.observer = null;
    }

    componentDidMount() {
        this.observer = new IntersectionObserver(this.load, this.options);
        this.observer.observe(this.targetContainerRef.current);
    }

    componentWillUnmount() {
        this.observer.unobserve(this.targetContainerRef.current);
    }

    load = (entries) => {

        const { onIntersection, continueObserving } = this.props;

        if (!continueObserving && !this.state.hasIntersected) {
            const entry = entries.find(entry => entry.target === this.targetContainerRef.current);

            if (entry && entry.isIntersecting) {
                this.setState({ hasIntersected: true });
                onIntersection && onIntersection(entries);
                this.observer.unobserve(this.targetContainerRef.current);
            }

        } else if (continueObserving && onIntersection) {
            onIntersection(entries);
        }
    }

    render() {
        const { continueObserving, children = null } = this.props;
        return (
            <div className="intersection-observer" ref={this.targetContainerRef}>
                {continueObserving ? children : this.state.hasIntersected && children}
            </div>
        )
    }

}