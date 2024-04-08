import './App.css';
import Hello from './components/Hello';
import { nauczyciel } from './data/nauczyciele';

function App() {
  const imionaUczniow = nauczyciel.uczniowie.map((uczen) => uczen.imie);
  return (
    <>
      <Hello imie={nauczyciel.imie} uczniowie={imionaUczniow} />
    </>
  );
}

export default App;
