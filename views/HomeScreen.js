import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Bullet from '../components/Bullet';
import CocktailIngredients from '../components/CocktailIngredients';
import { fetchCocktails } from '../reducers/cocktails';

type Props = {
  fetchCocktails: Function,
  cocktails: Object,
};

class HomeScreen extends Component<Props> {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: 'Random Drinks 0.1',
    };
  };

  componentDidMount() {
    this.props.fetchCocktails();
  }

  onCocktailSelect = (id, title) => () => this.props.navigation.navigate('Cocktail', { id, title });

  renderItem = (data) => {
    return (
      <TouchableOpacity style={styles.item} onPress={this.onCocktailSelect(data.item.idDrink, data.item.strDrink)}>
        <View style={styles.itemBody}>
          <Text style={styles.itemTitle}>{data.item.strDrink}</Text>
          <CocktailIngredients id={data.item.idDrink} />
        </View>
        <View style={styles.itemImageContainer}>
          <Image source={{uri: data.item.strDrinkThumb}} style={styles.itemImage} />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.containerSafe}>
        <View style={styles.container}>
          { this.props.cocktails.loading &&
            <ActivityIndicator style={styles.loader} size="large" color="#ffffff" />
          }
          <FlatList
            data={this.props.cocktails.items}
            renderItem={this.renderItem}
            keyExtractor={item => item.idDrink}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: '#4ebcd1',
  },
  container: {
    flex: 1,
    backgroundColor: '#4ebcd1',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    padding: 10,
    borderRadius: 3,
    flexWrap: 'wrap',
  },
  itemBody: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: '600',
    overflow: 'hidden',
    marginBottom: 10,
    color: '#6c6c6c',
  },
  itemImageContainer: {
    alignSelf: 'flex-end',
    width: 140,
    height: 155,
    overflow: 'hidden',
    borderRadius: 4,
  },
  itemImage: {
    width: 155,
    height: 155,
  },
  ingredient: {
    flexDirection: 'row',
  },
  ingredientText: {
    fontSize: 18,
    color: '#6c6c6c',
  },
  more: {
    fontSize: 14,
    color: '#6c6c6c',
    paddingVertical: 5,
  },
  loader: {
    flex: 1,
  },
});


const mapStateToProps = (state) => ({
  cocktails: state.cocktails,
});

const mapDispatchToProps = {
  fetchCocktails,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
