import { useReducer, useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import { nauczyciel as nauczycielJSON} from './data/nauczyciele';

const reducer = (n: typeof nauczycielJSON, action: any) => {
  return {...n, imie: action.imie }
}

function App() {
  const [nauczyciel, dispach] = useReducer(reducer, nauczycielJSON)
  const imionaUczniow = nauczyciel.uczniowie.map((uczen) => uczen.imie);
  const dodajUczen = (imie: string) => {}
  const zmienImie = (imie: string) => dispach({imie});
  return (
    <>
      <Hello imie={nauczyciel.imie} uczniowie={imionaUczniow} onDodajUczen={dodajUczen} onZmienImie={zmienImie}/>
    </>
  );
}

export default App;
