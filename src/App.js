import './App.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Builder } from './components/Builder';
import { DraggableItems } from './components/DraggableItems';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>

      <div className="App">
        <header className='container text-center'>
          <h1>ID builder</h1>
        </header>

        <div className='container d-flex flex-column align-items-center'>
          <DraggableItems />
          <Builder />
        </div>

      </div>
    </DndProvider>
  );
}

export default App;
