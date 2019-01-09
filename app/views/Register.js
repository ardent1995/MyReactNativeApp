import React,{Component} from 'react';
import {TextInput,KeyboardAvoidingView,Button,StyleSheet,Alert,AsyncStorage} from 'react-native';

export class Register extends Component{

    static navigationOptions ={
        header: null
    };

    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:'',
            confirmPassword:''
        };
    }

    submitRegistration = () =>{
        if(this.state.username.trim() ==='' || !this.state.password){
            Alert.alert('Warning','Any field can not be empty');
        }else if(this.state.password !== this.state.confirmPassword){
            Alert.alert('Warning',"Passwords do not match");
        }else{
            AsyncStorage.getItem(this.state.username,(error,result) =>{
                if(result){
                    Alert.alert('Warning',`${this.state.username} already exists`);
                }else{
                    AsyncStorage.setItem(this.state.username,this.state.password,(error,result)=>{
                        Alert.alert("Success", `${this.state.username}'s registration successful`);
                        this.props.navigation.goBack();
                    });
                }
            })
        }
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
                <TextInput
                placeholder='Username'
                onChangeText={(text)=>{this.setState({username:text})}}
                value={this.state.username}
                style={styles.input}/>
                <TextInput
                placeholder='Password'
                onChangeText={(text) => this.setState({password:text})}
                value={this.state.password}
                secureTextEntry={true}
                style={styles.input}/>
                <TextInput
                placeholder='Confirm Password'
                onChangeText={(text) => this.setState({confirmPassword: text})}
                value={this.state.confirmPassword}
                secureTextEntry={true}
                style={styles.input}/>

                <Button
                onPress={this.submitRegistration}
                title='submit'/>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
        container:{
            paddingTop:100
        },
        input:{
            margin:12
        }
});