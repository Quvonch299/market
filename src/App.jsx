  import Header from './home/Header'
  import Grid from './home/Grid'
  import { Route, Routes } from 'react-router-dom'
  import AddCart from './home/AddCart'
  import Savat from './home/Savat'
  import Users from './home/Users'
  import User from './home/User'
  import UsersModal from './home/UsersModal'

  export default function App() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/grid' element={<Grid />} />
          <Route path='/ADD' element={<AddCart />} />
          <Route path='/savat' element={<Savat />} />
          <Route path='/userbtn' element={<Users />} />
       

        </Routes>


      </div>
    )
  }
