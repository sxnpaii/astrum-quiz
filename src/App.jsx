// react
import { useState } from "react"
// router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages
import HomePage from './pages/HomePage'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
// components
import Layout from './components/Layout'
import './styles/App.css'
// context
import Context from "./assets/Context";


function App() {
  const [result, setResult] = useState(0)
  const [collecting, SetCollecting] = useState([])
  const [checked, setChecked] = useState("")

  // ! Core function 
  const collectAndCountAnswers = (
    getData, key, answer, category
  ) => {
    SetCollecting([
      ...collecting,
      {
        key: key,
        submittedValue: answer,
        category: category,
        result: result
      }
    ])
  if (checked !== "") {
      sessionStorage.setItem("data", JSON.stringify([
        ...collecting,
        {
          key: key,
          submittedValue: answer,
          category: category,
          result: result
        }
      ]))
      for (const el of getData) {
        if (checked === el.correct_answer) {
          setResult((result) => result + 1)
          sessionStorage.setItem("result", result)
        }
        break
      }
      // console.log(JSON.parse(sessionStorage.getItem("data").normalize()))
      setChecked("")
    }
  }
  return (
    <BrowserRouter>
      <Context.Provider
        value={{
          StateHooks: {
            result, setResult, checked, setChecked
          },
          collectAndCountAnswers
        }}>
        <Layout>
          <Routes>
            <Route index path='/' element={<HomePage />} />
            <Route path='/Quiz/:id' element={<Quiz />} />
            <Route path='/Quiz/result' element={<Result />} />
          </Routes>
        </Layout>
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App
