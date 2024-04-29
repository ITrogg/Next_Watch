import Card from "./card"

const Main = () => {
  return (
    <main>
      <h2>Toutes les séries</h2>
      <form action="">
        <label htmlFor="">
          Tier par :
          <select name="" id="">
            <option value="">Alphabétique</option>
            <option value="">Date de sortie</option>
            <option value="">Aléatoire</option>
          </select>
        </label>
      </form>
      <Card index={0}></Card>
      <Card index={1}></Card>
    </main>
  )
}

export default Main