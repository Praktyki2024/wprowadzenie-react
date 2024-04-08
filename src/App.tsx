import { createContext, useEffect, useMemo, useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import { nauczyciel as nauczycielJSON } from './data/nauczyciele';

export const NauczycielContext = createContext('');

const autoDodajUser = () => {
  const [nauczyciel, setNauczyciel] = useState(nauczycielJSON);

  useEffect(() => {
    const dodajUczen = (imie: string) => setNauczyciel({ ...nauczyciel, uczniowie: [...nauczyciel.uczniowie, { imie: 'Karol' + Math.random() }] });
    const intervalNo = setInterval(dodajUczen, 500);
    return () => clearInterval(intervalNo);
  })

  return nauczyciel;
}

function App() {
  const nauczyciel = autoDodajUser();
  const wyliczImionaUczniow = () => nauczyciel.uczniowie.map((uczen) => uczen.imie);
  const imionaUczniow = useMemo(wyliczImionaUczniow, [nauczyciel]);

  const dodajUczen = (imie: string) => { }
  const zmienImie = (imie: string) => { }
  return (
    <>
      <NauczycielContext.Provider value="Marek">
        <Hello imie={nauczyciel.imie} uczniowie={imionaUczniow} onDodajUczen={dodajUczen} onZmienImie={zmienImie} />
      </NauczycielContext.Provider>
    </>
  );
}

export default App;
