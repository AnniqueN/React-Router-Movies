import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList}/>
    {/*<div>Replace this Div with your Routes</div> */}


    {/* created path to home giving data from Route tag */}
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route
          exact
          path="/movies/:id"
          component={({ match }) => (
            <Movie match={match} addToSavedList={addToSavedList} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;