import '../index.css'

const Toggler = ({ addTheme, defaultTheme, lastTheme }) => {
  return (
    <>
      <div className="switch-toggle switch-3 switch-candy">
        <input
          id="on"
          name="state-d"
          type="radio"
          defaultChecked="checked"
          onClick={defaultTheme}
        />
        <label htmlFor="on" className="one"></label>

        <input id="na" name="state-d" type="radio" onClick={addTheme} />
        <label htmlFor="na" className="two"></label>

        <input id="off" name="state-d" type="radio" onClick={lastTheme} />
        <label htmlFor="off" className="three"></label>
      </div>
    </>
  )
}

export default Toggler
