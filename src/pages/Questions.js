import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import useAxios from "../common/useAxios";

const Questions = () => {

	let apiUrl = `/api.php?amount=10`;

	const { response, loading } = useAxios({ url: apiUrl });
	
	 return (
		<Box>
			<Typography variant="h4">Question 1</Typography>
			<Typography variant="h4" mt={5}>Question 2</Typography>
			<Box mt={2}>
				<Button variant="contained">Answer 1</Button>
			</Box>
			<Box mt={2}>
				<Button variant="contained">Answer 1</Button>
			</Box>
			<Box mt={5}>
				<Button>Score: 3 /6</Button>
			</Box>
		</Box>
	)
}

export default Questions
