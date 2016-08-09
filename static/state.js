/*
state: {
	eventName: '',
	eventDate: '',
	eventID: '',
	eventDescription: '',
	eventAuthor: {
		eventAuthor_username: '',
		eventAuthor_id: '',
		eventAuthor_email: '',
		eventAuthor_firstname: '',
		eventAuthor_lastname: '',
	}

}

*/
import {createStore} from 'redux';
// import data from './state';




function reducer(state, action) {
	switch(action.type){
		case 'ADD_EVENT':
			return {...state, 
				eventName: data.response[0].name,
				eventDate: data.response[0].event_date,
				eventID: data.response[0].id,
				eventDescription: data.response[0].description,
				eventAuthor: {
					eventAuthor_username: data.response[0].created_by.username,
					eventAuthor_id: data.response[0].created_by.id,
					eventAuthor_email: data.response[0].created_by.email,
					eventAuthor_firstname: data.response[0].created_by.firstname,
					eventAuthor_lastname: data.response[0].created_by.lastname,
	}};
		default:
			return state;
	}
}

const store = createStore(reducer, {
	eventName: '',
	eventDate: '',
	eventID: '',
	eventDescription: '',
	eventAuthor: {
		eventAuthor_username: '',
		eventAuthor_id: '',
		eventAuthor_email: '',
		eventAuthor_firstname: '',
		eventAuthor_lastname: '',
	}
})

export default store;