import React from 'react'

import Screen from './Screen'
import Keypad from './Keypad'


class Calculator extends React.Component {
		state = {
			computation : '',
			result : 0
		}

    render() {
        return (
        <div className="calculator-container">
            <Screen computation={this.state.computation} result={this.state.result} />
            <Keypad />
        </div>
        );
    }
}


export default Calculator