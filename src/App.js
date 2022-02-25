import './App.css'
import PersonStateless from './components/PersonStateless'
import PersonStatefull from './components/PersonStatefull'
import {Component} from 'react'

const famille = {
    membre1: {
        name: 'Thomas',
        age: 33
    },
    membre2: {
        name: 'Ninon',
        age: 1
    },
    membre3: {
        name: 'Delphine',
        age: 44
    },
    membre4: {
        name: 'Berlioz',
        age: 11
    },
    membre5: {
        name: 'Mitch',
        age: 3
    }
}

class App extends Component {
    state = {famille}

    handleIncreaseClick = (id) => {
        const famille = {...this.state.famille}
        famille[id].age += 2
        this.setState({famille})
    }

    handleDecreaseClick = (id) => {
        const famille = {...this.state.famille}
        famille[id].age -= 2
        this.setState({famille})
    }

    handleChange = (event, id) => {
        const famille = {...this.state.famille}
        const name = event.target.value
        famille[id].name = name
        this.setState({famille})
    }

    render() {
        const {famille} = this.state

        let listeMembre = Object.keys(famille)
            .map(member => (
                <PersonStatefull
                    key={member}
                    handleChange={event => this.handleChange(event, member)}
                    handleIncreaseClick={() => this.handleIncreaseClick(member)}
                    handleDecreaseClick={() => this.handleDecreaseClick(member)}
                    name={famille[member].name}
                    age={famille[member].age}
                    currentcolor={famille[member].age > 5 ? 'red' : 'black'}>
                    <h3>{famille[member].age} an(s)</h3>
                </PersonStatefull>
            ))

        return (
            <header>
                <div className="App">

                    <PersonStateless name={famille.membre1.name} age={famille.membre1.age}/>
----------------------
                    {listeMembre}
                </div>
            </header>
        );
    }
}

export default App;
