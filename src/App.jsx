
import './App.css'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Table from './components/Table/Table'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
      <Header></Header>
      <div className='container mx-auto'>
        <Recipes></Recipes>
        
      </div>
    </>
  )
}

export default App
