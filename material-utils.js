import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

class Card extends Component {
  render() {
    const newStyles = this.props.styles || {};
    return (
      <View style={[styles.container, styles.card, newStyles.card]}>
        {this.props.children}
      </View>
    );
  }
}

class CardImage extends Component {
  render () {
    const newStyles = this.props.styles || {};
    return (
      <View style={[styles.cardImage, newStyles.cardImage]}>
        {this.props.children}
      </View>
    );
  }
}

class CardTitle extends Component {
  render () {
    const newStyles = this.props.styles || {};
    return (
      <View style={[styles.cardTitle, newStyles.cardTitle]}>
        {this.props.children}
      </View>
    );
  }
}

class CardContent extends Component {
  render () {
    const newStyles = this.props.styles || {};
    return (
      <View style={[styles.cardContent, newStyles.cardContent]}>
        {this.props.children}
      </View>
    );
  }
}

class MovieListView extends React.PureComponent {
  render () {
    const newStyles = this.props.styles || {};
    return (
      <Card>
            <CardTitle>
              <Text style={{fontSize: 15}}>{this.props.item.title}</Text>
            </CardTitle>
			<CardImage>
              <Image
                style={{width: 300, height: 200}}
                source={{uri: 'http://image.tmdb.org/t/p/w185' + this.props.item.poster_path}}
              />
            </CardImage>
			<CardContent>
              <Text>{"Average Vote: "+this.props.item.vote_average}</Text>
            </CardContent>
         </Card>
    );
  }
}

class MovieDetailsView extends React.PureComponent {
  render () {
    const newStyles = this.props.styles || {};
    return (
      <Card>
            <CardTitle>
              <Text style={{fontSize: 17}}>"Orginal Title"</Text>
            </CardTitle>
			<CardImage>
              <Image
                style={{width: 300, height: 200}}
                source={{uri: 'http://image.tmdb.org/t/p/w185/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg'}}
              />
            </CardImage>
			<CardContent>
              <Text>"overview"</Text>
            </CardContent>
			<CardContent>
              <Text>"tagline"</Text>
            </CardContent>
			<CardContent>
              <Text>"release date"</Text>
            </CardContent>
			<CardContent>
              <Text>"genres"</Text>
            </CardContent>
         </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 5
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 3,
      width: 3,
    },
	marginTop: 10,
    marginBottom: 5
  },
  cardImage: {
    flex: 1,
	resizeMode:'cover'
  },
  cardTitle: {
    flex: 1,
    padding: 10,
  },
  cardContent: {
	flex: 1, 
	alignItems: 'center', 
	fontSize: 20,
	padding: 20,
	backgroundColor: 'transparent'
  }
});

export {MovieListView,MovieDetailsView}