import { Component } from "react";

class PersonStatefull extends Component {

    render () {
        const { children, name, age } = this.props

        return (
            <div>
                <h2>{name} statefull</h2>
                <h2>{age} an(s)</h2>
                {children ? children : <b>Rien a afficher</b>}
            </div>
        )
    }
}

export default PersonStatefull