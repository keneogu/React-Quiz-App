import { Button, Typography } from '@mui/material'
import React from 'react'
import { Box } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { handleScoreChange, handleAmountChange } from '../redux/actions';

const FinalScore = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { score } = useSelector(state => state);
	
	const handleClick = () => {
		dispatch(handleScoreChange(0));
		dispatch(handleAmountChange(50));
		navigate("/")
	}
	return (
		<Box mt={30}>
			<Typography variant="h3" fontWeight="bold" mb={3}>Final Score {score}</Typography>
			<Button variant="outline" color="success" onClick={handleClick}>back to settings!</Button>
		</Box>
	)
}

export default FinalScore;
