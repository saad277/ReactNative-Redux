

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import FoodForm from './Components/foodForm'
import FoodList from './Components/foodList'



const stackNavigator = createStackNavigator({

  FoodForm: FoodForm,
  FoodList: FoodList


})




export default createAppContainer(stackNavigator);


