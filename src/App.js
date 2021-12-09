import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainDashborad from "./screens/MainDashborad";
import Users from './screens/Users';
import UserDetail from './screens/Users/UserDetail';


function App() {
  return (
   <Router>
     <Routes>
       <Route path='/' element={<MainDashborad />}></Route>
       <Route path='/users' element={<Users />}></Route>
       <Route path='/user' element={<UserDetail />}></Route>
     </Routes>
   </Router>
  );
}

export default App
