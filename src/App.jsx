import Nav from "./component/nav/nav.jsx"
import Home from './routes/home/home.jsx'
import Dashboard from './routes/dashboard/dashboard.jsx'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
function App() 
{
  
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
