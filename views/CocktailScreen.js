import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import Bullet from '../components/Bullet';

type Props = {
  id: string,
};

class CocktailScreen extends Component<Props> {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params.title || '',
    };
  };

  renderIngredient(item, i) {
    return (
      <View key={`ingredient-${i}`} style={styles.ingredient}>
        <Text style={styles.ingredientText}>{item.measure} - {item.ingredient}</Text>
      </View>
    );
  }

  renderIngredients = (ingredients) => {
    return (
      <View style={styles.block}>
        {ingredients.map(this.renderIngredient)}
      </View>
    );  
  }

  renderCocktail = (cocktail) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemImageContainer}>
          <Image source={{uri: cocktail.strDrinkThumb}} style={styles.itemImage} />
        </View>
        <View style={styles.itemBody}>
          { this.renderIngredients(cocktail.ingredients)}
          <View style={styles.block}>
            <Bullet text={'How to prepare'} style={styles.ingredientText}/>
          </View>
          <View style={styles.block}>
            <Text style={styles.ingredientText}>{cocktail.strInstructions}</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.containerSafe}>
        <View style={styles.container}>
          <Text style={styles.welcome}>{this.props.cocktail.strDrink}</Text>
          {this.renderCocktail(this.props.cocktail)}
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
    color: '#FFFFFF',
  },
  item: {
    flex: 1,
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
    marginBottom: 10,
    borderRadius: 4,
    height: 270,
  },
  itemImage: {
    width: null,
    height: 270,
    resizeMode: 'cover',
  },
  bullet: {
    flexDirection: 'row',
  },
  ingredientText: {
    fontSize: 16,
    color: '#6c6c6c',
  },
  block: {
    paddingVertical: 10,
  },
});

const mapStateToProps = (state, ownProps) => ({
  cocktail: state.details[ownProps.navigation.getParam('id')],
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailScreen);
