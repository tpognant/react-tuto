import { Component } from "react";

class PersonStatefull extends Component {

    render () {
        const { name, children } = this.props
        return (
            <div>
                <h2>{name} statefull</h2>
                {children ? children : <b>Rien a afficher</b>}
            </div>
        )
    }
}

export default PersonStatefull