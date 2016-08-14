const initialState = {
  ask: 'Please, load the list of events'
}

export default function page(state = initialState, action) {
	switch (action.type) {
		case 'LOAD_LIST':
			return {...state, ask: action.playload}
		default:
			return state;
	}

}