import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleCategoryChange, handleDiffcultyChange } from '../redux/actions';

const SelectField = props => {
	const { label, options} = props;
	const dispatch = useDispatch();
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
		switch (label) {
			case "Category":
				dispatch(handleCategoryChange(e.target.value));
				break;
			case "Difficulty":
				dispatch(handleDiffcultyChange(e.target.value));
				break;
			default:
				return;
		}
	}

	return (
		<Box mt={3} width="100%">
			<FormControl fullWidth>
				<InputLabel>{label}</InputLabel>
				<Select value={value} label={label} onChange={handleChange}>
					{options.map(({ id, name }) => (
						<MenuItem value={id} key={id}>{name}</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default SelectField;
