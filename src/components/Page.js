import React, { PropTypes, Component } from 'react'

export default class Page extends Component {

onLoadBtnClick(){
	this.props.loadList();
}
	render() {
		const {ask} = this.props
		return <div>
			<h3>{ask}</h3>
			<button onClick={::this.onLoadBtnClick}>Load List</button>
		</div>
	}
}

Page.propTypes = {
	ask: PropTypes.string.isRequired,
	loadList: PropTypes.func.isRequired
}