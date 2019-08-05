import React from 'react'

import Screen from './Screen'
import Keypad from './Keypad'


// VARS:
const isOperator = /[x/+‑]/;
const endsWithOperator = /[x+‑/]$/;

class Calculator extends React.Component {

		constructor(props) {
			super(props);

			this.state = {
				currentVal: '0',
				prevVal: '0',
				formula: '',
				currentSign: 'pos',
				lastClicked: ''
			}
			
			this.maxDigitWarning = this.maxDigitWarning.bind(this);
			this.handleOperators = this.handleOperators.bind(this);
			this.handleEvaluate = this.handleEvaluate.bind(this);
			this.initialize = this.initialize.bind(this);
			this.handleDecimal = this.handleDecimal.bind(this);
			this.handleNumbers = this.handleNumbers.bind(this);
		}

		maxDigitWarning = ()  => {
			this.setState({
				currentVal: 'Digit Limit Met',
				prevVal: this.state.currentVal
			});
			setTimeout(() => this.setState({currentVal: this.state.prevVal}), 1000);
		}

		handleEvaluate = () => {
			if (!this.state.currentVal.includes('Limit')) {
				let expression = this.state.formula;
				
				if (endsWithOperator.test(expression)) expression = expression.slice(0, -1);
				expression = expression.replace(/x/g, "*").replace(/‑/g, "-");
				let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
				this.setState({
				currentVal: answer.toString(),
				formula: expression.replace(/\*/g, '⋅').replace(/-/g, '‑') + '=' + answer,
				prevVal: answer,
				evaluated: true
				});
			}
		}

		handleOperators = (event) => { 
			if (!this.state.currentVal.includes('Limit')) {
				this.setState({currentVal: event.target.value, evaluated: false});
				if (this.state.formula.includes('=')) {
					this.setState({
						formula: this.state.prevVal + event.target.value
					}); 
				} else {
					console.log(isOperator.test(this.state.prevVal));
					this.setState({ 
						prevVal: !isOperator.test(this.state.currentVal) ?  this.state.formula :  this.state.prevVal,
						formula: !isOperator.test(this.state.currentVal) ?  this.state.formula += event.target.value :  this.state.prevVal += event.target.value
					});
				}
			}
		}


		handleNumbers = (event) => {
			if (!this.state.currentVal.includes('Limit')) {
				this.setState({evaluated: false})
				if (this.state.currentVal.length > 21) {
				this.maxDigitWarning();
				} else if (this.state.evaluated === true) {
					this.setState({
						currentVal: event.target.value,
						formula: event.target.value != '0' ? event.target.value : '',
					});

				} else {
				this.setState({
					currentVal: 
					this.state.currentVal == '0' || 
					isOperator.test(this.state.currentVal) ? 
					event.target.value : this.state.currentVal + event.target.value,
					formula:  
					this.state.currentVal == '0' && event.target.value == '0' ?
					this.state.formula : 
					/([^.0-9]0)$/.test(this.state.formula) ? 
					this.state.formula.slice(0, -1) + event.target.value :
					this.state.formula + event.target.value,
				});
				}
			}
		}

		handleDecimal = () => {
			if (this.state.evaluated === true) {
				this.setState({
				currentVal: '0.',
				formula: '0.',
				evaluated: false});
			} else if (!this.state.currentVal.includes('.') &&
				!this.state.currentVal.includes('Limit')) {
				this.setState({evaluated: false})
				if (this.state.currentVal.length > 21) {
				this.maxDigitWarning();
				} else if (endsWithOperator.test(this.state.formula) || 
				this.state.currentVal == '0' && this.state.formula === '') {
				this.setState({
					currentVal: '0.',
					formula: this.state.formula + '0.'
				});         
				} else {
				this.setState({
					currentVal: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
					formula: this.state.formula + '.',
				});
				}
			}
		}

		initialize = () => {
			this.setState({
				currentVal: '0',
				prevVal: '0',
				formula: '',
				currentSign: 'pos',
				lastClicked: ''
			});
		}



    render() {
        return (
        <div className="calculator">
            <Screen formula={this.state.formula.replace(/x/g, '⋅')} currentValue={this.state.currentVal} />
			<Keypad 
				evaluate={this.handleEvaluate}
				operators={this.handleOperators}
				initialize={this.initialize} 
				decimal={this.handleDecimal}
				numbers={this.handleNumbers} />


        </div>
        );
    }
}
export default Calculator