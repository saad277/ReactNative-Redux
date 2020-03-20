
import { connect } from 'react-redux'

import { addFood, thunk } from '../Redux/actions'

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';



class FoodForm extends Component {

  state = {

    food: ""
  }

  render() {

    

    return (

      <View style={styles.container}>
        <Text style={styles.title}>Redux</Text>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => this.setState({ food: value })}
          style={styles.foodInput}
        />
        <Button
          title="Submit"
          color="black"
          onPress={() => this.props.addFood(this.state.food)}
        />
        <Button
          title="Go To Food List"
          onPress={() => this.props.navigation.navigate("FoodList")}
        />
        <Button
          title="Thunk"
          color="green"
          onPress={() => this.props.thunk()}
        />

      </View>
    )


  }



}


const styles = StyleSheet.create({

  container: {

    flex: 1,
    margin: 16,
    alignItems: "center",
    justifyContent: "center"

  },

  title: {
    fontSize: 64,
    marginBottom: 48

  },
  foodInput: {

    fontSize: 32,
    marginBottom: 32,
    borderWidth: 1,
    padding: 8,
    width: "80%",
    borderRadius: 10,
  }

})

const mapDispatchToProps = (dispatch) => {

  return {

    addFood: (food) => dispatch(addFood(food)),
    thunk: () => dispatch(thunk())

  }
}




export default connect(null, mapDispatchToProps)(FoodForm);
