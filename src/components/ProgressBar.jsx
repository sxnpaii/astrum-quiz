
const ProgressBar = ({ value, maxlength }) => {
  return (
    <>
      <input className="w-full" type="range" value={value} max={maxlength} />
      <div className="exp">
        
      </div>
    </>
  )
}

export default ProgressBar
