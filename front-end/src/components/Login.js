import React from 'react';
import './styles/Login.css';
import showPass from './images/show.png';
import hidePass from './images/hide.png';

var visiblePass;
var userName;
var userPass;

export class Login extends React.Component{
		
	constructor(props, context){
		super(props, context);
		this.toggleVisible = this.toggleVisible.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		visiblePass = false;
	}
	
	toggleVisible(){
		this.visiblePass = this.visiblePass ? false : true;	
		this.forceUpdate();		
	}
	
	handleLogin(){
		this.props.onLogin(userName,userPass);
	}
	
	render(){
		return(
			<div id="LoginLayout">
				<div id="paneLogin">
					<h1>Iniciar Sesión</h1>
					<form>
						<p>Usuario: </p>
						<input type="text"/>
						<p>Contraseña:</p>
						<input type= { this.visiblePass ? 'text' : 'password' } />
						<img id="toggleVisibility" src={this.visiblePass ? hidePass : showPass } onClick = {this.toggleVisible}/>
						<button onClick={this.handleLogin}> ingresar </button>
					</form>
				</div>
			</div>
		);
	}
	
}


