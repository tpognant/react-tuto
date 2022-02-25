import {Component} from "react";

class PersonStatefull extends Component {

    render() {
        const {children, name, currentcolor, handleIncreaseClick, handleDecreaseClick, handleChange} = this.props

        return (
            <div>
                <div>
                    <h2 style={{color: currentcolor}}>{name}</h2>
                    {children ? children : <b>Rien a afficher</b>}
                </div>
                <div>
                    <input value={name} onChange={handleChange} type='text'/>
                </div>
                <div>
                    <input type="button" value="Anonymize"/>
                    <button onClick={handleIncreaseClick} >
                        Increase age
                    </button>
                    <button onClick={handleDecreaseClick} >
                        Decrease age
                    </button>
                </div>
            </div>
        )
    }
}

export default PersonStatefull