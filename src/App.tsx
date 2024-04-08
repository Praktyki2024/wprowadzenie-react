import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import { nauczyciel as nauczycielJSON} from './data/nauczyciele';

function App() {
  const [nauczyciel, setNauczyciel] = useState(nauczycielJSON)
  const imionaUczniow = nauczyciel.uczniowie.map((uczen) => uczen.imie);
  const dodajUczen = (imie: string) => setNauczyciel({...nauczyciel, uczniowie: [...nauczyciel.uczniowie, {imie}]})
  const zmienImie = (imie: string) => setNauczyciel({...nauczyciel, imie})
  return (
    <>
      <Hello imie={nauczyciel.imie} uczniowie={imionaUczniow} onDodajUczen={dodajUczen} onZmienImie={zmienImie}/>
    </>
  );
}

export default App;
