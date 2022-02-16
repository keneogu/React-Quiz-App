import { CHANGE_AMOUNT, CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_SCORE, CHANGE_TYPE } from "./actionsTypes";

const initialState = {
	question_category: "",
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case CHANGE_CATEGORY:
			return {
				...state,
				question_category: action.payload,
			}
		default:
			return state;
	}
}

export default reducer;
