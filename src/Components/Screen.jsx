import React from 'react'

import ResultScreen from './ResultScreen'
import ComputationScreen from './ComputationScreen'

const Screen = (props) => 
<div className="calculator__display">
    <ComputationScreen>{props.formula}</ComputationScreen>
    <ResultScreen>{props.currentValue}</ResultScreen>
    
</div>

export default Screen