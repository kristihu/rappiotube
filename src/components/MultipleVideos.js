import React, { Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,

	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: 'black',
		float:'right',

	},
}));

export default function CenteredGrid() {
	
	const classes = useStyles();

	return(
	  <div className="boxi">
		<div className={classes.root}>
		  <Grid container spacing={3}>
			<Grid item className="fff" xs={6}>
			  <Paper className={classes.paper}>    <div id="playerElement1" className="s1"></div></Paper>
			</Grid>
			<Grid item xs={6}>
			  <Paper className={classes.paper}>
				<div id="playerElement2" className="s2"></div></Paper>
			</Grid>
			<Grid item xs={6}>
			  <Paper className={classes.paper}>
				<div id="playerElement3" className="s3"></div></Paper>
			</Grid>
			<Grid item xs={6}>
			  <Paper className={classes.paper}>
				<div id="playerElement4" className="s4"></div></Paper>
			</Grid>

		  </Grid>
		</div>      
	  </div>
	  );
}
