import { useEffect, useState, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { supabase } from "../../supabase"
// context
import Context from "../assets/Context"
// styles
import "../styles/pages-styles/QuizPage.css"
// components
import ProgressBar from "../components/ProgressBar"

const Options = () => {
  // get id from router
  const { id } = useParams()
  // state for navigate next question
  const [nextPageIndex, setNextPageIndex] = useState(0)
  // data
  const [getData, setGettingData] = useState([])
  // getting all id
  const [getOnlyId, setGettingOnlyId] = useState([])
  // request data
  useEffect(() => {
    const getOptions = async () => {
      if (id !== '/result') {
        const { data } = await supabase.from("Quiz").select("*").eq("id", id)
        const onlyId = await supabase.from("Quiz").select("id")
        // setting to state
        setGettingData(data)
        setGettingOnlyId(onlyId.data)
      }
    }
    getOptions()
    // listen changes on Url, when url changed refetch data
  }, [getData])
  // send results to App.js
  const { StateHooks: { checked, setChecked }, collectAndCountAnswers } = useContext(Context)

  return (
    <section>
      {getData && getData.map((el) => {
        return (
          <form key={el.id} action="" className="">
            <ProgressBar value={nextPageIndex} maxlength={getOnlyId.length} />
            <h2>{nextPageIndex} Вопрос</h2>
            <legend>{el.question}</legend>
            {/* options */}
            {el && el.options.map((answ) => (
              <div key={answ}>
                <input type="radio" name="answer" value={answ} onChange={() => { setChecked(answ.trim()) }} />
                <label htmlFor={answ}>{answ}</label>
              </div>
            ))}
            {/* to next question */}
            <button className={checked === "" ? `inactive` : "active"}
              onClick={() => {
                collectAndCountAnswers(
                  getData,
                  JSON.stringify(el.question),
                  checked,
                  el.category
                )
              }}
            >
              <Link
                className="py-10"
                to={`/quiz/${getOnlyId[nextPageIndex] === undefined ? "result/" : getOnlyId[nextPageIndex].id}`}
                onClick={() => { setNextPageIndex(nextPageIndex + 1) }}
              >
                Далее
              </Link>
            </button>
          </form>
        )
      })}
    </section>
  )
}

export default Options