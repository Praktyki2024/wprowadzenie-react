type Props = { imie: string; uczniowie: string[] };
const Hello = (props: Props) => {
  const listaUczniow = props.uczniowie.map((imie) => <div> {imie} </div>);
  return (
    <>
      <div>Hello {props.imie}!</div>
      <div>Lista uczniów:</div>
      {listaUczniow}
    </>
  );
};

export default Hello;
