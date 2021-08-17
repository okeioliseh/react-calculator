import React from 'react'
import './main.css'

const Keypad = (props) =>{

	const parentMethod = (val) =>{
		props.click(val)
	}

	const btnClick = (event) =>{
		const value = event.target.value
		parentMethod(event.target.value)
	}

	return(
		<>
			<button className = "keypadBtn" value = "1" onClick = {btnClick}> 1 </button>
			<button className = "keypadBtn" value = "2" onClick = {btnClick}> 2 </button>
			<button className = "keypadBtn" value = "3" onClick = {btnClick}> 3 </button>
			<button className = "keypadBtn" value = "4" onClick = {btnClick}> 4 </button>
			<button className = "keypadBtn" value = "5" onClick = {btnClick}> 5 </button>
			<button className = "keypadBtn" value = "6" onClick = {btnClick}> 6 </button>
			<button className = "keypadBtn" value = "7" onClick = {btnClick}> 7 </button>
			<button className = "keypadBtn" value = "8" onClick = {btnClick}> 8 </button>
			<button className = "keypadBtn" value = "9" onClick = {btnClick}> 9 </button>

			<button className = "keypadBtn" value = "+" onClick = {btnClick}> + </button>
			<button className = "keypadBtn" value = "0" onClick = {btnClick}> 0 </button>
			<button className = "keypadBtn" value = "-" onClick = {btnClick}> - </button>

			<button className = "keypadBtn" value = "(" onClick = {btnClick}> ( </button>

			<button className = "keypadBtn" value = "=" onClick = {btnClick}> = </button>

			<button className = "keypadBtn" value = ")" onClick = {btnClick}> ) </button>


			<button className = "keypadBtn" value = "*" onClick = {btnClick}> x </button>

			<button className = "keypadBtn" value = "Clear" onClick = {btnClick}> Clear </button>

			<button className = "keypadBtn" value = " /" onClick = {btnClick}> / </button>
		</>
	)
}

export default Keypad