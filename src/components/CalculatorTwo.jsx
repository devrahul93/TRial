import { useState } from 'react'
import '../index.css'
import Toggler from './Toggler'

const CalculatorTwo = () => {
  let initialstate = ''
  const [digit, setDigit] = useState(initialstate)

  const ops = ['+', '-', '/', '*', '.']

  const updateDigit = (value) => {
    //for displaying the number on screen
    //for adding the string to another digit
    if (
      // if the last value is operator and the calculation has nothing do not repeat the ops
      (ops.includes(value) && digit === '') ||
      (ops.includes(value) && ops.includes(digit.slice(-1)))
    ) {
      return
    }
    setDigit(digit + value)
  }

  //claulate or equal to
  const calculate = () => {
    setDigit(eval(digit).toString())
  }

  //backSpace or DEL
  const backSpace = () => {
    if (digit == '') {
      return
    }
    const Value = digit.slice(0, -1)
    setDigit(Value)
  }

  const themeToggle = () => {
    const btn = document.querySelector('[data-wrapper]')
    const topText = document.querySelector('[data-top]')
    if (btn.classList.contains(`wrapper`)) {
      btn.classList.remove(`wrapper`)
      btn.classList.add('wrapper1')
    }
    if (btn.classList.contains(`wrapper2`)) {
      btn.classList.remove(`wrapper2`)
      btn.classList.add('wrapper1')
    }
    /////////
    if (topText.classList.contains(`header`)) {
      topText.classList.remove(`header`)
      topText.classList.add('header1')
    }
    if (topText.classList.contains(`header2`)) {
      topText.classList.remove(`header2`)
      topText.classList.add('header1')
    } else {
      return
    }
  }

  const lastTheme = () => {
    const btn = document.querySelector('[data-wrapper]')
    const topText = document.querySelector('[data-top]')

    if (btn.classList.contains(`wrapper`)) {
      btn.classList.remove(`wrapper`)
      btn.classList.add('wrapper2')
    }
    if (btn.classList.contains(`wrapper1`)) {
      btn.classList.remove(`wrapper1`)
      btn.classList.add('wrapper2')
    }

    if (topText.classList.contains(`header`)) {
      topText.classList.remove(`header`)
      topText.classList.add('header2')
    }
    if (topText.classList.contains(`header1`)) {
      topText.classList.remove(`header1`)
      topText.classList.add('header2')
    } else {
      return
    }
  }

  const defaultTheme = () => {
    const btn = document.querySelector('[data-wrapper]')
    const topText = document.querySelector('[data-top]')

    if (btn.classList.contains(`wrapper1`)) {
      btn.classList.remove(`wrapper1`)
      btn.classList.add('wrapper')
    }
    if (btn.classList.contains(`wrapper2`)) {
      btn.classList.remove(`wrapper2`)
      btn.classList.add('wrapper')
    }
    ////////////
    if (topText.classList.contains(`header1`)) {
      topText.classList.remove(`header1`)
      topText.classList.add('header')
    }
    if (topText.classList.contains(`header2`)) {
      topText.classList.remove(`header2`)
      topText.classList.add('header')
    } else {
      return
    }
  }

  return (
    <>
      <div className="wrapper" data-wrapper>
        <div className="container">
          <div className="header" data-top>
            <div>Calculator</div>
            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <Toggler
                addTheme={themeToggle}
                lastTheme={lastTheme}
                defaultTheme={defaultTheme}
              />
              <div style={{ marginRight: '5px' }}>THEME</div>
            </div>
          </div>
          <div className="screen">
            <div className="Resultscreen">{digit || '0'}</div>
          </div>
          <div className="buttons">
            <button
              className="but"
              onClick={() => {
                updateDigit('7')
              }}
            >
              7
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('8')
              }}
            >
              8
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('9')
              }}
            >
              9
            </button>
            <button className="but delete" onClick={backSpace}>
              DEL
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('4')
              }}
            >
              4
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('5')
              }}
            >
              5
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('6')
              }}
            >
              6
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('+')
              }}
            >
              +
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('1')
              }}
            >
              1
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('2')
              }}
            >
              2
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('3')
              }}
            >
              3
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('-')
              }}
            >
              &minus;
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('.')
              }}
            >
              .
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('0')
              }}
            >
              0
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('/')
              }}
            >
              &#8725;
            </button>
            <button
              className="but"
              onClick={() => {
                updateDigit('*')
              }}
            >
              &times;
            </button>
            <button
              className="but but-1 delete"
              onClick={() => setDigit(initialstate)}
            >
              RESET
            </button>
            <button className="but but-2" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalculatorTwo
