import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";


import {Projects} from "../../api/Projects.js";

export default class Project extends Component {
	onVote() {
		Projects.update(this.props.project._id, {
			$set: {"votes": (this.props.project.votes||0)+1},
		});
	}


	render() {
		if (!this.props.project) {
			return (<div>Loading!</div>);
		}

		return (
			<div>
				<div>
					<div>{this.props.project.Proyecto || ""}</div>
					<div>{this.props.project.Nombres}</div>
					<div>{this.props.project.Apellidos}</div>
					<a href={this.props.project["Repositorio de github"]}>{this.props.project["Repositorio de github"]}</a>
					<div>Votes: {this.props.project.votes || 0}</div>
					<button onClick={this.onVote.bind(this)}>Vote for this</button>

				</div>
				<br/>

			</div>

		);
	}
}


Project.propTypes = {
	project: PropTypes.object.isRequired
}