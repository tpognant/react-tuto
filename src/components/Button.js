import React, { Component } from "react";

class Button extends Component {

    render () {
        const { increaseage } = this.props

        return (
            <button onClick={increaseage}>
                Increase age
            </button>
        )
    }
}

export default Button