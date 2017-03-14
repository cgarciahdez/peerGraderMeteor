import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";

import Project from "./Project.jsx";

import {Projects} from "../../api/Projects.js";

export class App extends Component {

	renderProjects() {
		return this.props.projects.map( (project,i) => {
			return <Project key= {i} project={project}> </Project>;
		});
	}

	render() {
		return(
			<div>
				<h1>PeerGrader</h1>
				<h2>Projects:</h2>
				{this.renderProjects()}
				<h2>Your favorites:</h2>
				<div>Your faves</div>
				<h2>Overall most voted</h2>
				<div>Most voted</div>
			</div>
			);
	}
}


App.propTypes = {
	projects : PropTypes.array.isRequired
}


export default AppContainer = createContainer(()=>{
	let projects = Projects.find({Proyecto: "Project 2"});
	return {
		projects:projects.fetch()
	};
}, App);