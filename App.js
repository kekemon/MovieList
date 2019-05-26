import React from 'react';
import MovieList from './movie-list-page.js'
import MovieDetails from './movie-details-page.js'
import  { createAppContainer,createStackNavigator }  from 'react-navigation';

const AppNavigator = createStackNavigator({
  FirstList: MovieList,
  Details: MovieDetails
});

const App = createAppContainer(AppNavigator);

export default App;