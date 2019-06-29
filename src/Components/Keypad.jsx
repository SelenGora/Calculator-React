import React from 'react'

import KeypadRow from './KeypadRow'
import ButtonItem from './ButtonItem'

const keypad = (props) =>
<div className="calculator__computation">
    <KeypadRow>
        <ButtonItem type="operator" onButtonPress={props.onButtonPress}>CE</ButtonItem>
        <ButtonItem type="operator" onButtonPress={props.onButtonPress}>&larr;</ButtonItem>
        <ButtonItem type="operator" onButtonPress={props.onButtonPress}>%</ButtonItem>
        <ButtonItem type="operator" onButtonPress={props.onButtonPress}>/</ButtonItem>
    </KeypadRow>
    <KeypadRow>
        <ButtonItem onButtonPress={props.onButtonPress}>1</ButtonItem>
        <ButtonItem onButtonPress={props.onButtonPress}>2</ButtonItem>
        <ButtonItem onButtonPress={props.onButtonPress}>3</ButtonItem>
        <ButtonItem type="operator" onButtonPress={props.onButtonPress}>*</ButtonItem>
    </KeypadRow>
    <KeypadRow>
        <ButtonItem onButtonPress={props.onButtonPress}>4</ButtonItem>
        <ButtonItem onButtonPress={props.onButtonPress}>5</ButtonItem>
        <ButtonItem onButtonPress={props.onButtonPress}>6</ButtonItem>
        <ButtonItem type="operator" onButtonPress={props.onButtonPress}>-</ButtonItem>
    </KeypadRow>
    <KeypadRow>
        <ButtonItem onButtonPress={props.onButtonPress}>7</ButtonItem>
        <ButtonItem onButtonPress={props.onButtonPress}>8</ButtonItem>
        <ButtonItem onButtonPress={props.onButtonPress}>9</ButtonItem>
        <ButtonItem type="operator" onButtonPress={props.onButtonPress}>+</ButtonItem>
    </KeypadRow>
    <KeypadRow>
        <ButtonItem onButtonPress={props.onButtonPress}>.</ButtonItem>
        <ButtonItem onButtonPress={props.onButtonPress}>0</ButtonItem>
        <ButtonItem type="large operator" onButtonPress={props.onButtonPress}>=</ButtonItem>
    </KeypadRow>
</div>

export default keypad