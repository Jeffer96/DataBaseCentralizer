import React from 'react';
import './styles/App.css';
import {Login} from './Login';
import {MainMenu} from './MainMenu.js';

class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			isLogged : false,
			currentUser : "",
			profile : ""
		};
	}
	
	handleLogin(un,pwd){
		alert("your name is: "+un+" and your pass is: "+pwd);
	}
    
	render(){
		var ans;
		if (this.state.isLogged){
			ans = <MainMenu />;
		}else{
			ans = <Login onLogin={this.handleLogin}/>;
		}
		return ans
	}
}

export default App;
