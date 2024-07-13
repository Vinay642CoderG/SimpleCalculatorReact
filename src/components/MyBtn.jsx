

const MyBtn = ({val="test", btnType=1, cls=''}) => {
  return (
    <>
    <button value={val} className={`myBtn${btnType}  ${cls}`}>{val}</button>
    </>
  )
}

export default MyBtn
