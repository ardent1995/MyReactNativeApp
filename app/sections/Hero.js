import React,{Component} from 'react';
import {StyleSheet,Image}  from 'react-native';

export class Hero extends Component{
render(){
    return(
        <Image style={styles.image}
        source={require('./img/katrina_kaif_as_firdaus_in_fitoor-wide.jpg')}/>
    );
};
}

const styles = StyleSheet.create({
    image:{
        width: undefined,
        height: undefined,
        flex:8
    }
});