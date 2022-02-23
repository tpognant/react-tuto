import './App.css'
import PersonStateless from './components/PersonStateless'
import PersonStatefull from './components/PersonStatefull'

function App() {
  return (
    <div className="App">
      <PersonStateless name='Thomas' />
      <PersonStatefull name='Thomas'>
        <h3>coucou je suis le child</h3>
      </PersonStatefull>
    </div>
  );
}

export default App;
