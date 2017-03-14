import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";

import Project from "./Project.jsx";
import MostVotedProject from "./MostVotedProject.jsx";

import {Projects} from "../../api/Projects.js";

export class App extends Component {

	renderProjects() {
		return this.props.projects.map( (project) => {
			return <Project key= {project._id} project={project}> </Project>;
		});
	}

	renderMostVoted() {
		return this.props.mostVoted.map((project) => {
			return <MostVotedProject key={project._id} project={project}> </MostVotedProject>;
		});
	}

	render() {
		return(
			<div>
				<h1>PeerGrader</h1>
				<div className="row">
					<div className="col-xs-8 col-md-8">
						<h2>Projects:</h2>
						{this.renderProjects()}
					</div>
					<div className="col-xs-4 col-md-4">
						<h2>Overall most voted</h2>
						<div>{this.renderMostVoted()}</div>
						<h2>Your favorites:</h2>
						<div>Your faves</div>
					</div>

				</div>


			</div>
			);
	}
}


App.propTypes = {
	projects : PropTypes.array.isRequired,
	mostVoted : PropTypes.array.isRequired
}


export default AppContainer = createContainer(()=>{
	let projects = Projects.find({Proyecto: "Project 2"});
	let mostVoted = Projects.find({Proyecto: "Project 2"}, { sort: { votes: -1 }, limit:10 });
	return {
		projects:projects.fetch(),
		mostVoted:mostVoted.fetch()
	};
}, App);