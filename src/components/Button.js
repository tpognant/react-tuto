import React, { Component } from "react";

class Button extends Component {

    render () {
        const { manageage, children } = this.props

        return (
            <button onClick={manageage}>
                {children}
            </button>
        )
    }
}

export default Button