import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.length > 0
          ? state.data.map(d => <Card key={d.id} dentists={d}/>)
          : "cargando"
        }
      </div>
    </main>
  )
}

export default Home