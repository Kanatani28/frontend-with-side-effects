import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import UserDetail from './components/pages/UserDetail'
import Users from './components/pages/Users'

function App() {
  return (
    <div className="App">
      <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/users">Users</Link>
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  )
}

export default App
