import React,{Component} from 'react';
import {TextInput,Button,KeyboardAvoidingView,StyleSheet,Alert,AsyncStorage} from 'react-native';

export class LogIn extends Component{

    static navigationOptions= {
        header: null
    };

    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:''
        };
    }

    logIn = () =>{
        if(this.state.username.trim() === '' || !this.state.password ){
            Alert.alert('Warning','Enter valid username and password');
        }else{
            
        }
    };

    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
                <TextInput
                placeholder='Username'
                onChangeText={(text) => this.setState({username:text})}
                style={styles.input}/>

                <TextInput
                placeholder='Password'
                onChangeText={(text) => this.setState({password:text})}
                secureTextEntry={true}
                style={styles.input}/>

                <Button
                title='Log In'
                onPress={this.logIn}
                style={styles.button}/>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 100
    },
    input:{
        margin:12
    },
    button:{
        
    }
});