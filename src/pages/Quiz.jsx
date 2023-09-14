
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { supabase } from "../../supabase"

const Options = () => {
  // get id from router
  const { id } = useParams()
  // state for navigate next question
  const [count, setCount] = useState(0)
  // data
  const [getData, setGettingData] = useState([])
  // getting all id
  const [getOnlyId, setGettingOnlyId] = useState([])
  // request data
  useEffect(() => {
    const getOptions = async () => {
      const { data } = await supabase.from("Quiz").select("*").eq("id", id)
      const ver1 = await supabase.from("Quiz").select("id")
      // setting to state
      setGettingData(data)
      setGettingOnlyId(ver1.data)
    }
    getOptions()
    // listen changes on Url, when url changed refetch data
  }, [getData])



  return (
    <section>
      {getData.map((el) => {
        return (
          <form key={el.id} action="" className="Form text-left text-white">
            <legend>{el.question}</legend>
            {/* options */}
            {el.options.map((answ) => (
              <div key={answ.id}>
                <input type="checkbox" id={answ} value={answ} />
                <label htmlFor={answ}>{answ}</label>
              </div>
            ))}
            {/* to next question */}
            <Link
              to={`/quiz/${getOnlyId[count].id}`}
              onClick={() => { setCount(count + 1) }}
            >
              Далее
            </Link>
          </form>
        )
      })}

    </section>
  )
}

export default Options