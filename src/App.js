import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainDashborad from "./screens/MainDashborad";
import Users from './screens/Users';


function App() {
  return (
   <Router>
     <Routes>
       <Route path='/' element={<MainDashborad />}></Route>
       <Route path='/users' element={<Users />}></Route>
     </Routes>
   </Router>
  );
}

export default App
