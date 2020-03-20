

import { connect } from 'react-redux'

import { deleteFood } from '../Redux/actions'

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { ListItem, Icon } from 'react-native-elements'


class FoodList extends Component {





    static navigationOptions = {

        title: "Food List",
        headerTintColor: "white",
        headerStyle: {

            backgroundColor: "green",
        },

    }


    render() {

        

        return (

            <FlatList
                style={styles.listContainer}
                data={this.props.food}
                keyExtractor={(item, index) => item.id.toString()}

                renderItem={({ item }) =>
                    <ListItem
                        title={item.name}
                        bottomDivider
                        rightIcon={
                            <Icon

                                name="delete"
                                size={36}
                                onPress={() => {this.props.deleteFood(item.id) }}
                            />


                        }
                    />
                }


            />

        )

    }



}


const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: '#dce2ff',
        padding: 16
    },
    listText: {
        fontSize: 30
    },
});


const mapStateToProps = (state) => {


    return {

        food: state.foods
    }



}

const mapDispatchToProps = (dispatch) => {

    return {

        deleteFood: (id) => dispatch(deleteFood(id))

    }


}




export default connect(mapStateToProps,mapDispatchToProps)(FoodList);