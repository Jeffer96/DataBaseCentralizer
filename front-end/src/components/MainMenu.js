import React from 'react';
import './styles/MainMenu.css';

export class MainMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentUser : ''
		};
	}
	
	render(){
		return (
				<div id="MainMenuLayout">
				</div>
		);
	}
}