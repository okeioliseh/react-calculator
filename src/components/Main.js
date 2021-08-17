import React, { Component } from 'react'
import Keypad from './Keypad'
import Result from './Result'
import './main.css'

class Main extends Component{
	constructor(){
		super();
		this.state = {
			operation : "",
			result : ""
		}
	}

	calculate = () =>{
		var operation = this.state.operation
		try {
			var result = eval(operation)
			this.setState({
				result : result
			})
		}catch(error){
			this.setState({
				result : "error , try again"
			})
		}
	}
	clear = () =>{
		this.setState({
			operation : "",
			result : ""
		})
	}
	addResult = (val) =>{
		if(val === "="){
			this.calculate()

		}else if(val === "Clear"){
			this.clear()

		}else{
			this.setState({
				operation : this.state.operation + val
			})
		}
	}
	render(){
		return(
			<center>
				<h2>
					React Calculator
				</h2>
				<br/>
				<div className = "calculator">
					<Result operation = {this.state.operation} result = {this.state.result}/>
					<Keypad click = {this.addResult}/>
				</div>
			</center>
		)
	}
}

export default Main