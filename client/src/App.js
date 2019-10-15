import React, { useState } from "react";
import {Route} from "react-router-dom"



import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

const App = (props) => {
	const [savedList, setSavedList] = useState([]);

	const addToSavedList = movie => {
		setSavedList([...savedList, movie]);
	};

	return (
		<div>
			<SavedList list={savedList} />
			<Route exact path="/" component={MovieList}></Route>
			{/* <Route path="/movies/:id" component={Movie}></Route> */}
			<Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={addToSavedList} />}></Route>
		</div>
	);
};

export default App;
