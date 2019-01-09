import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn : false};
    }

    toggleLogIn = () =>{
        this.setState(previousState =>{
            return {isLoggedIn: !previousState.isLoggedIn};
        });
    }

    render(){
        let display = this.state.isLoggedIn ? 'Some User' : this.props.message;
        return(
            <View style= {styles.headerStyle}>
            <Image style={styles.logoStyle}
            source={require('./img/Deadpool_down.jpg')}/>
            <Text style={styles.headerText}
            onPress = {this.toggleLogIn}>{display}</Text>
            </View>
    );
    }
}

const styles = StyleSheet.create({
    headerStyle:{
        paddingEnd: 10,
        backgroundColor: '#35605a',
        flex:3,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#000000'
    },
    headerText:{
        paddingTop: 50,
        paddingStart: 40,
        textAlign:'right',
        fontSize: 20,
        color: '#ffffff',
        flex:1
    },
    logoStyle:{
        width: undefined,
        height: undefined,
        flex: 2
    }
});