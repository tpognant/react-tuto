import { Component } from "react";

class PersonStatefull extends Component {

    render () {
        const { children, name, age } = this.props

        return (
            <div>
                <h2 style={{color: age > 5 ? 'red' : 'pink' }}>{name} statefull</h2>
                {children ? children : <b>Rien a afficher</b>}
            </div>
        )
    }
}

export default PersonStatefull