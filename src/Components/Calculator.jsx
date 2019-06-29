import React from 'react'

import Screen from './Screen'
import Keypad from './Keypad'


class Calculator extends React.Component {
		state = {
			computation : '',
			result : 0
		}

		/*eslint no-eval: 0*/
		onButtonPress = event  => {
			let computation = this.state.computation;
			const pressedButton = event.target.innerHTML;
			
			if (pressedButton === 'CE') return this.clear();
			else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') computation += pressedButton;
			else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) computation += ' ' + pressedButton + ' ';
			else if (pressedButton === '=') {
				try {
					const evalResult = eval(computation);
					const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
					this.setState({result});
				} catch (error) {
					alert('Invalid Operation');
				}
			}
			else {
				computation = computation.trim();
				computation = computation.substr(0, computation.length - 1);
			}
			this.setState({computation: computation});

		}

		clear() {
			this.setState({computation: '', result: 0});
		}

    render() {
        return (
        <div className="calculator">
            <Screen computation={this.state.computation} result={this.state.result} />
            <Keypad onButtonPress={this.onButtonPress} />
        </div>
        );
    }
}
export default Calculator