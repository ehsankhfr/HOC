import React, { Component } from 'react';

export const AbstractHeader = (props)=>(View)=>
	class HigherOrderHeaderClass extends Component{
		constructor(){
			super();
			this.state = {
				size: props.size
			}
		}

		render(){
			return (
				<View/>
			);
		}
	};