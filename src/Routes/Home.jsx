import Card from '../Components/Card'
import Loader from '../Components/Loader'
import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {
  const {state} = useContextGlobal()
  const dataCard = () =>{
    let content;
    if(state.data?.status){
      content = <p>Error {state.data.status}</p>
    }else{
      content = 
        state.data?.length > 0
          ? state.data.map(d => <Card key={d.id} dentists={d}/>)
          : <Loader />
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