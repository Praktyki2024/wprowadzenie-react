import { createContext, useEffect, useMemo, useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import { nauczyciel as nauczycielJSON} from './data/nauczyciele';

export const NauczycielContext = createContext('');

function App() {
  const [nauczyciel, setNauczyciel] = useState(nauczycielJSON)
  const wyliczImionaUczniow = () => nauczyciel.uczniowie.map((uczen) => uczen.imie);
  const imionaUczniow = useMemo(wyliczImionaUczniow, [nauczyciel]);

  const dodajUczen = (imie: string) => setNauczyciel({...nauczyciel, uczniowie: [...nauczyciel.uczniowie, {imie}]})
  const zmienImie = (imie: string) => setNauczyciel({...nauczyciel, imie})
  return (
    <>
    <NauczycielContext.Provider value="Marek">
      <Hello imie={nauczyciel.imie} uczniowie={imionaUczniow} onDodajUczen={dodajUczen} onZmienImie={zmienImie}/>
    </NauczycielContext.Provider>
    </>
  );
}

export default App;
