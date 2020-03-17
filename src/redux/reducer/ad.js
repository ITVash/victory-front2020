const initialState = {
	isLoading: null,
	items: [],
	currentID: null
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "AD:ADD":
			return {
				...state,
        items: [
          ...state.items,
          payload
        ],
			}
		case "AD:CURRENTID":
			return {
				...state,
				currentID: payload
			}
		case "AD:IS_LOADING":
			return {
				...state,
				isLoading: payload,
			}
		case "AD:SHOW":
			return {
				...state,
				items: payload,
			}
		case "AD:UPDATE":
			return {
				...state,
        items: state.items.filter(item => {
          if (item._id === payload._id) {
            return Object.assign(item, payload)
          }
          return item
        }),
			}
		case "AD:DELETE":
			return {
				...state,
				items: state.items.filter(item => item._id !== payload),
			}

		default:
			return state
	}
}
