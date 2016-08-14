import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
	render() {
		const {page} = this.props
		const {loadList} = this.props.pageActions
		return <div>
			<Page ask={page.ask} loadList={loadList}/>
		</div>
	}
}

function mapStateToProps (state) {
	return {
		page: state.page
	}
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


// componentWillMount = () =>{
// fetch('http://api.itboost.org/app_dev.php/api/community.getAll')
// .then(data=>{
// 	data.json()
// .then(allEvents=>{
// 		console.log(allEvents.response.items);
// 	})
// })
// }