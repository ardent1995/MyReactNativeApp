import React from 'react';
import {StyleSheet,Text,View,TextInput,Alert,Button} from 'react-native';
import {Header} from '../sections/Header';
import {createStackNavigator} from 'react-navigation';

export default class Contact extends React.Component{
    
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {name:'',email:'',message:''};
    }

    render(){
        return(
            // use KeyboardAvoidingView
            <View style={styles.container}>
                <Header message='Tap to log in'/>
                <Text style = {styles.contactText}>Contact Us</Text>

                <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(text) => this.setState({name:text})}
                value={this.state.name}/>
                <TextInput
                style={styles.input} 
                placeholder='Enter your email'
                onChangeText={(text) => this.setState({email:text})}
                value={this.state.email}/>
                <TextInput
                style={styles.multilineInput} 
                placeholder='Enter your message'
                onChangeText={(text) => this.setState({message:text})}
                value={this.state.message}
                multiline={true}
                numberOfLines={4}/>

                <Button onPress={()=>{
                    Alert.alert(this.state.name,this.state.message);
                    this.props.navigation.goBack();
                }}
                title='Submit'
                style={styles.submit}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    contactText:{
        flex:1,
        fontWeight:'bold',
        color:'#000000',
        fontSize: 24
    },
    input:{
        flex:1,
        width:'80%',
        padding:10
    },
    multilineInput:{
        flex:2,
        width:'90%',
        paddingBottom:10
    },
    submit:{

    }
});