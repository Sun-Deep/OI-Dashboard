import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainDashborad from "./screens/MainDashborad";


function App() {
  return (
   <Router>
     <Routes>
       <Route path='/' element={<MainDashborad />}></Route>
     </Routes>
   </Router>
  );
}

export default App
