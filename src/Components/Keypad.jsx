import React from 'react'

import KeypadRow from './KeypadRow'

const keypad = (props) =>
<div className="calculator__computation">
    <KeypadRow>
        <button id="clear" value='AC' className="calculator__keypad operator" onClick={props.initialize}>AC</button>
        <button id="c" value='c' className="calculator__keypad operator" onClick={props.initialize}>&larr;</button>
        <button id="percent" className="calculator__keypad operator"></button>
        <button id="divide" value='/' className="calculator__keypad operator" onClick={props.operators}>/</button>    
    </KeypadRow>
    
    <KeypadRow>
        <button id="one" value="1" className="calculator__keypad" onClick={props.numbers}>1</button>
        <button id="two" value="2" className="calculator__keypad" onClick={props.numbers}>2</button>
        <button id="three" value="3" className="calculator__keypad" onClick={props.numbers}>3</button>
        <button id="multiply" value="x" className="calculator__keypad operator" onClick={props.operators}>x</button>
    </KeypadRow>
    <KeypadRow>
        <button id="four" value='4'className="calculator__keypad" onClick={props.numbers}>4</button>
        <button id="five" value='5'className="calculator__keypad" onClick={props.numbers}>5</button>
        <button id="six" value='6'className="calculator__keypad" onClick={props.numbers}>6</button>
        <button id="subtract" value='-' className="calculator__keypad operator" onClick={props.operators}>-</button>
    </KeypadRow>
    <KeypadRow>
        <button id="seven" value='7' className="calculator__keypad" onClick={props.numbers}>7</button>
        <button id="eight" value='8' className="calculator__keypad" onClick={props.numbers}>8</button>
        <button id="nine" value='9' className="calculator__keypad" onClick={props.numbers}>9</button>
        <button id="add" value='+' className="calculator__keypad operator" onClick={props.operators}>+</button>
    </KeypadRow>
    <KeypadRow>
        <button id="decimal" value='.' className="calculator__keypad" onClick={props.decimal}>.</button>
        <button id="zero" value='0' className="calculator__keypad" onClick={props.numbers}>0</button>
        <button id="equals" value='=' className="calculator__keypad operator large" onClick={props.evaluate}>=</button>
    </KeypadRow>
</div>

export default keypad