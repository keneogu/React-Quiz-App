import {
	CHANGE_CATEGORY,
	CHANGE_DIFFICULTY,
	CHANGE_TYPE,
	CHANGE_AMOUNT,
	CHANGE_SCORE
} from "./actionsTypes"

export const handleCategoryChange = payload => ({
	type: CHANGE_CATEGORY,
	payload,
});
