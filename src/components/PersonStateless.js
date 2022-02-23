import React from "react"

const PersonStateless = ({name, children}) => {

    return (
        <div>
            <h1>{name} stateless</h1>
            <h3>{children ? children : <b>Rien a afficher</b>}</h3>
        </div>
    )
}

export default PersonStateless