import Card from '../Components/Card'
import Loader from '../Components/Loader'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal()
  
  
  const dataCard = () =>{
    let content;
    // console.log(state.data.status);
    if(state.data?.status){
      content = <p>Error {state.data.status}</p>
    }else{
      content = 
        state.data?.length > 0
          ? state.data.map(d => <Card key={d.id} dentists={d}/>)
          : <Loader />
      // console.log(content);
    }
    return content
  }

  return (
    <>
      <h1>Dental Clinic</h1>
      <h3 className='h3-home'>Our professionals:</h3>
      <div className='card-grid'>
        {dataCard()}
      </div>
    </>
  )
}

export default Home