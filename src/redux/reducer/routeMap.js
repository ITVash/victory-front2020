const initialState = {
	isLoading: null,
	items: [],
	currentID: null,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "ROUTE:IS_LOADING":
			return {
				...state,
				isLoading: payload,
			}
		case "ROUTE:CITIES":
			return {
				...state,
				items: payload,
			}
		case "ROUTE:UPDATE":
			return {
				...state,
				items: state.items.filter(item => {
          if (item._id === payload._id) {
            return  Object.assign(item, payload)
          }
          return item;
        })
			}
		case "ROUTE:SHOWID":
			return {
				...state,
				items: payload,
			}
		case "ROUTE:CURRENTID":
			return {
				...state,
				currentID: payload,
			}
		case "ROUTE:ADD":
			return {
				...state,
				items: [...state.items, payload],
			}

		default:
			return state
	}
}
