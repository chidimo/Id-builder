import './App.css';
import { Builder } from './components/Builder';
import { DraggableItems } from './components/DraggableItems';

function App() {
  return (
    <div className="App">
      <header className='container text-center'>
        <h1>ID builder</h1>
      </header>

      <div className='container d-flex flex-column align-items-center'>
        <DraggableItems />
        <Builder />
      </div>

    </div>
  );
}

export default App;
