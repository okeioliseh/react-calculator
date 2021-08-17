import React from 'react'

const Result = (props) =>{
	return(
		<div className = "result">
			<i>{props.operation} </i>
			<br/>
			<b><mark>{props.result}</mark></b>
		</div>
	)
}

export default Result