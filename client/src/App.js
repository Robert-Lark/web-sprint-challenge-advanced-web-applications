import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./Styles/Styles";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";



function App() {


  const classes = useStyles();
	return (
		<Router>
			<Grid container className={classes.container}>
				<Grid item className={classes.header}>
					<Switch>
						<PrivateRoute exact path="/protected" component={BubblePage} />
						<Route path="/" component={Login} />
					</Switch>
				</Grid>
			</Grid>
		</Router>
	);
}

export default App;
