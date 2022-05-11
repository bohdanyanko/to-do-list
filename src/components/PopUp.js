const PopUp = ({ 
  active, 
  resetHandler, 
  children 
}) => {

  return (
    <div className={active ? "popUp active" : "popUp"} onClick={() => {resetHandler()}}>
      <div className="popUp__content" onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </div>)
}

export default PopUp;