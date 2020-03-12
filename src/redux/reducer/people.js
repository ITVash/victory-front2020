const initialState = {
	isLoading: null,
	items: [],
	currentID: null,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "PEOPLE:IS_LOADING":
			return {
				...state,
				isLoading: payload,
			}
		case "PEOPLE:PEOPLE":
			return {
				...state,
				items: payload,
			}
		case "PEOPLE:UPDATE":
			return {
				...state,
				items: state.items.filter(item => {
          if (item._id === payload._id) {
            return  Object.assign(item, payload)
          }
          return item;
        })
			}
		case "PEOPLE:SHOWID":
			return {
				...state,
				items: payload,
			}
		case "PEOPLE:CURRENTID":
			return {
				...state,
				currentID: payload,
			}
		case "PEOPLE:ADD":
			return {
				...state,
				items: [...state.items, payload],
			}

		default:
			return state
	}
}
