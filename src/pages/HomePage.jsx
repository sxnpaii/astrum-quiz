import { Link } from "react-router-dom"
import { supabase } from "../../supabase"
// assets
import HomePageCheck from "../assets/design/HomePageCheck.png"
import "../styles/pages-styles/HomePage.css"

// data from db
const { data } = await supabase.from("Quiz").select("*")

// UI render
const HomePage = () => {
  return (
    <div className="Hero">
      <h1>Узнай <br /> кто ты в IT?</h1>
      <p>пройди Интерактивный ТЕст и узнай какая специальность в IT, тебе подходит больше всего.</p>
      <img src={HomePageCheck} alt="" />
      <p className='info'>Время выполнения 5 минут</p>
      {/* navigate to first question of survey */}
      <Link
        to={`/quiz/${data[0].id}`}
        className="btn"
      >Поехали</Link>
    </div>
  )
}

export default HomePage
