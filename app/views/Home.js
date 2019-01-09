import React,{Component} from 'react';
import {Platform,View,Text,StyleSheet} from 'react-native';
import {Header} from '../sections/Header';
import {Hero} from '../sections/Hero';
import {Menu} from '../sections/Menu';
import {createStackNavigator} from 'react-navigation';

export default class Home extends Component{
    static navigationOptions ={
        header:null
    };

    render(){

        const {navigate} = this.props.navigation;

        return(
        <View style={styles.container}>
            <Header message='Tap to log in'/>
            <Hero/>
            <Menu navigate={navigate}/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    }
  });
  