import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Bullet from '../components/Bullet';
import { fetchDetail } from '../reducers/details';

type Props = {
  id: string,
  details: Object,
  fetchDetail: Function,
};

class CocktailIngredients extends Component<Props> {

  componentDidMount() {
    if (!this.props.details[this.props.id]) {
      this.props.fetchDetail(this.props.id);
    }
  }
 
  renderIngredient(ingredient, i) {
    return (
      <View key={`${ingredient}-${i}`}style={styles.ingredient}>
        <Bullet text={ingredient} style={styles.ingredientText} />
      </View>
    );
  }

  render() {
    const { id, details } = this.props;
    if (!details[id]) {
      return (<ActivityIndicator size="small" />);
    }
    const ingredients = details[id].ingredients.map(i => i.ingredient);
    const moreIngredientsCount = ingredients.length > 2 ? ingredients.length - 2 : 0;
    return (
      <View>
        {ingredients.slice(0,2).map(this.renderIngredient)}
        {moreIngredientsCount > 0 &&
          <Text style={styles.more}>{`y ${moreIngredientsCount} ingredientes mas`}</Text>
        }
      </View>
    );  

  }
}

const styles = StyleSheet.create({
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
  }
});


const mapStateToProps = (state) => ({
  details: state.details,
});

const mapDispatchToProps = {
  fetchDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailIngredients);
