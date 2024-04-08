type Props = { imie: string; uczniowie: string[], onDodajUczen: (imie: string) => void, onZmienImie: (imie: string) => void};
const Hello = (props: Props) => {
  const listaUczniow = props.uczniowie.map((imie) => <div> {imie} </div>);
  return (
    <>
      <div>Hello {props.imie}!</div>
      <div>Lista uczniów:</div>
      {listaUczniow}
      <button onClick={() => props.onDodajUczen('Ryszard')}>Dodaj</button>
      <button onClick={() => props.onZmienImie('Ryszard')}>Zmien</button>
    </>
  );
};

export default Hello;
