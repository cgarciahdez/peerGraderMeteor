import React, {Component, PropTypes} from "react";
import {Meteor} from "meteor/meteor";

export default class Project extends Component {
	render() {
		if (!this.props.project) {
			return (<div>Loading!</div>);
		}

		return (
			<div>
				<div>{this.props.project.Nombres}</div>
				<div>{this.props.project.Apellidos}</div>
				<a href={this.props.project["Repositorio de github"]}>{this.props.project["Repositorio de github"]}</a>
				<hr/>
			</div>

		);
	}
}


Project.propTypes = {
	project: PropTypes.object.isRequired
}