import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'

const TextFieldBar = () => {
	const handleChange = () => {};

	return (
		<Box mt={3} width="100%">
			<FormControl fullWidth size="small">
				<TextField 
					onChange={handleChange}
					variant="outlined"
					label="Amount of Questions"
					type="number"
					size="small"
				/>
			</FormControl>
		</Box>
	)
}

export default TextFieldBar
