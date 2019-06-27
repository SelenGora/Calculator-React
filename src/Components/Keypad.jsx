import React from 'react'

import KeypadRow from './KeypadRow'
import ButtonItem from './ButtonItem'

const keypad = () =>
<div>
    <KeypadRow>
        <ButtonItem>1</ButtonItem>
        <ButtonItem>2</ButtonItem>
        <ButtonItem>3</ButtonItem>
        <ButtonItem>/</ButtonItem>
    </KeypadRow>
    <KeypadRow>
        <ButtonItem>4</ButtonItem>
        <ButtonItem>5</ButtonItem>
        <ButtonItem>6</ButtonItem>
        <ButtonItem>*</ButtonItem>
    </KeypadRow>
    <KeypadRow>
        <ButtonItem>7</ButtonItem>
        <ButtonItem>8</ButtonItem>
        <ButtonItem>9</ButtonItem>
        <ButtonItem>-</ButtonItem>
    </KeypadRow>
    <KeypadRow>
        <ButtonItem>.</ButtonItem>
        <ButtonItem>0</ButtonItem>
        <ButtonItem>=</ButtonItem>
        <ButtonItem>+</ButtonItem>
    </KeypadRow>
</div>

export default keypad