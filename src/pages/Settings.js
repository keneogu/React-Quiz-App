import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React from 'react'
import SelectField from "../components/SelectField";
import TextFieldBar from "../components/TextFieldBar";
import useAxios from "../common/useAxios";


const Settings = () => {
	const {response,error,loading} = useAxios({url: "/api_category.php"})
	
	if(loading) {
		return (
			<Box mt={20}>
				<CircularProgress />
			</Box>
		)
	}

	if (error) {
		return (
			<Typography variant="h6" mt={20} color="red">
				Something went wrong
			</Typography>
		)
	}

	const difficultyOptions = [
		{id: "easy", name: "Easy"},
		{id: "medium", name: "Medium"},
		{id: "hard", name: "Hard"},
	]

	const typeOptions = [
		{id: "multiple", name: "Multiple Choice"},
		{id: "boolean", name: "True/False"},
	]

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<SelectField options={response.trivia_categories} label="Category" />
			<SelectField options={difficultyOptions} label="Difficulty" />
			<SelectField options={typeOptions} label="Type" />
			<TextFieldBar />
			<Box mt={3} width="100%">
				<Button fullWidth variant="contained" type="submit">
					Get Started
				</Button>
			</Box>
		</form>
	)
}

export default Settings
