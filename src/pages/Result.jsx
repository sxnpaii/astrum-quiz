import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../../supabase"
// styles & assets
import jackolantern from "../assets/design/Jack O Lantern.svg"
import "../styles/pages-styles/ResultsPage.css"



const Result = () => {
  // const raw = sessionStorage.getItem("data")
  // const parsed = JSON.parse(raw)
  const result = sessionStorage.getItem("result")
  const [getData, setGettingData] = useState({
    all: [],
    full_stack: [],
    network: [],
    d3max: []
  })
  useEffect(() => {
    const fetchData = async () => {
      const all = await supabase.from("Quiz").select("*")
      const full_stack = await supabase.from("Quiz").select("*").eq("category", "full_stack")
      const network = await supabase.from("Quiz").select("*").eq("category", "network")
      const d3max = await supabase.from("Quiz").select("*").eq("category", "3dmax")
      setGettingData({
        all: all.data,
        full_stack: full_stack.data,
        network: network.data,
        d3max: d3max.data
      })
    }
    fetchData()
  }, [])

  return (
    <section>
      
      <h3>Успех!</h3>
      <p>Ты дошел до конца! <br />
        Твои знания по направлению:</p>
      <img src={jackolantern} alt="" />
      <p className="result">Твои ответы равны на {((100 * result) / getData.all.length).toFixed()}%</p>
      <Link className="btn" to={`/form`}>Далее</Link>
    </section>

  )
}

export default Result
