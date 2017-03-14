import React, {Component, PropTypes} from "react";
import Meteor from "meteor/meteor";


export default class MostVotedProject extends Component {
	render() {
		return (
			<div>{this.props.project.Nombres} : {this.props.project.votes||0}</div>
		);
	}
}

MostVotedProject.propTypes = {
	project : PropTypes.object.isRequired
};