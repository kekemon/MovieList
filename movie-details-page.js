import React, {Component} from 'react';
import {Alert,ScrollView,FlatList,TouchableOpacity,View,Text} from 'react-native';
import {MovieDetailsView} from './material-utils.js';

const googleApiKey = 'AIzaSyAL094_q2cKToDL1MwL_iIXfhEDPkjxxl4';
const themoviedbApiKey = '789b98a3ee5127684bf2cfe457377895';
export default class MovieDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieData: []
		}
	}
 
	componentDidMount = () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.getLocationDetails(position.coords.latitude,position.coords.longitude)
			},
			(error) => {
				alert(error.message)
			},
			{enableHighAccuracy:true,timeout:30000}
      );
	}
  
	getCountryCode(country) {
		const countryData = require('./customData.json');
		for(let name in countryData) {
			if (name.indexOf(country) !== -1) {
				this.getMovieList(countryData[name]);
			}
		}
	}
  
	getMovieList(countryCode) {
		url='https://api.themoviedb.org/3/discover/movie?api_key=' + themoviedbApiKey + '&language=en-US&region=' + countryCode + '&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
		fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({ movieData: responseJson });
			//console.log(responseJson);
			movideList=this.state.movieData.results[0]
			//console.log(movideList.poster_path);
			this.render()
		});
	}
  
	getLocationDetails(latitude, longitude) {
		location = [];
		url='https://maps.googleapis.com/maps/api/geocode/json?address='+ latitude + ',' +longitude + '&key=' +  googleApiKey
		fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			location = responseJson;
			location.results[0].address_components.forEach(component => {
				if (component.types.indexOf('country') !== -1) {
					this.getCountryCode(component.long_name)
				}
			});
		});
    }
  
	render () {
		return (
			<ScrollView>
				<MovieDetailsView/>
			</ScrollView>	
		);
	}
}
