const initialState = {
	isLoading: null,
	items: [],
	currentID: null,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "NEWS:IS_LOADING":
			return {
				...state,
				isLoading: payload,
			}
		case "NEWS:NEWS":
			return {
				...state,
				items: payload,
			}
		case "NEWS:UPDATE":
			return {
				...state,
				items: state.items.filter(item => {
          if (item._id === payload._id) {
            return  Object.assign(item, payload)
          }
          return item;
        })
			}
		case "NEWS:SHOWID":
			return {
				...state,
				items: payload,
			}
		case "NEWS:CURRENTID":
			return {
				...state,
				currentID: payload,
			}
		case "NEWS:ADD":
			return {
				...state,
				items: [...state.items, payload],
			}

		default:
			return state
	}
}
