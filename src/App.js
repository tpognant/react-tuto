import './App.css'
import PersonStateless from './components/PersonStateless'
import PersonStatefull from './components/PersonStatefull'
import Button from './components/Button'
import { Component } from 'react'

const famille = {
  membre1: {
      name: 'Thomas',
      age: 33
  },
  membre2: {
      name: 'Ninon',
      age: 1
  }
}

class App extends Component {
    state = { famille }

    handleClick = (num) => {
      const famille = { ...this.state.famille }
      famille.membre2.age += num
      this.setState( {famille} )
  }

  handleChange = event => {
    const famille = { ...this.state.famille }
    const name = event.target.value
    famille.membre1.name = name
    this.setState( {famille} )
}

  render () {
    const { famille } = this.state

    return (
        <header>
    <div className="App">
      <input value={famille.membre1.name} onChange={this.handleChange} type='text' />
      <PersonStateless name={famille.membre1.name} age={famille.membre1.age} />
      <PersonStatefull name={famille.membre2.name}>
        <h3>{famille.membre2.age}</h3>
      </PersonStatefull>
      <Button increaseage={() => this.handleClick(2)} />
    </div>
    </header>
  );
  }
}

export default App;
