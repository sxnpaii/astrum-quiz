// router-dom
import { Routes, Route } from 'react-router-dom'
// pages
import HomePage from './pages/HomePage'
import Quiz from './pages/Quiz'
// components
import Layout from './components/Layout'
import './styles/App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/Quiz/:id' element={<Quiz />} />
      </Routes>
    </Layout>
  )
}

export default App
