import React from 'react'
export class LoginPage extends React.Component{
	state={
		username:"",password:""
	}
	userChange=(u)=>{
		this.setState({
			username:u.target.value
		})
	}
	passChange=(p)=>{
		this.setState({
			password:p.target.value
		})
	}
	buttonClick=()=>{
		console.log(this.state.username,this.state.password)
	}
	render(){
		return(
			<div>
				<input className="fields" type="text" onChange={this.userChange} placeholder="Enter username"/><br/>
				<input className="fields" type="password" onChange={this.passChange} placeholder="Enter password"/><br/>
				<button className="fields" onClick={this.buttonClick}>Submit</button>

				<p className="fields">username: {this.state.username}</p>
				<p className="fields">password: {this.state.password}</p>
			</div>
			)
		}
	}
export default LoginPage