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

	const createVideo = (id, name) => {

		const script = document.createElement("script");
		const Wowza = document.createElement("script");

		const WowzaPlayerScripts = document.getElementById("WowzaPlayerScripts");

		script.src = "//player.wowza.com/player/latest/wowzaplayer.min.js"; //luo uusi <script> 

		script.async = true;

		Wowza.innerHTML = 'WowzaPlayer.create("playerElement'+id+'", { "license": "PLAY1-ejrM8-zjEKd-6A4J7-9JJnM-7kju6", "title": "'+name+'", "description": "", "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Fmobile%2Fasdasd%2Fplaylist.m3u8", "autoPlay": false, "volume": "75", "mute": false, "loop": false, "audioOnly": false, "uiShowQuickRewind": true,"uiQuickRewindSeconds": "30" } );';

		document.body.appendChild(script);
		document.body.appendChild(Wowza);

		console.log(script);

		eval(Wowza); //execute javascript koodi

		console.log(Wowza.title)

	};

	let videoNames = ["video1", "video2", "video3", "video4"];

	for(let i=1; i<5; i++){
		let promise = new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(createVideo(i, videoNames[i-1]));
			}, 300);
		});
	};


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
