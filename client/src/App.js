import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  function addToSavedList(movie) {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route to="/" component={MovieList} />
      <Route to={`/movies/:id`} component={MovieList} />
      <SavedList list={savedList} />
    </div>
  );
};

export default App;
