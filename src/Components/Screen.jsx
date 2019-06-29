import React from 'react'

import ResultScreen from './ResultScreen'
import ComputationScreen from './ComputationScreen'

const Screen = (props) => 
<div className="calculator__display">
    <ResultScreen>{props.result}</ResultScreen>
    <ComputationScreen>{props.computation}</ComputationScreen>
</div>

export default Screen