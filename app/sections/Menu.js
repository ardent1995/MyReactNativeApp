import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Alert} from 'react-native';

export class Menu extends Component{
    onPress = () => {
        Alert.alert('You tapped the button!');
    }

    render(){
        return(
            <View style={styles.menuStyle}>
                <View style={styles.menuRow}>
                    <TouchableOpacity onPress = {() => this.props.navigate('LessonRT')}
                    style = {styles.button}>
                        <Text style={styles.buttonText}>LESSONS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.props.navigate('RegisterRT')}
                    style = {styles.button}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuRow}>
                    <TouchableOpacity onPress = {this.onPress}
                    style = {styles.button}>
                        <Text style={styles.buttonText}>BLOG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>this.props.navigate('ContactRT')}
                    style = {styles.button}>
                        <Text style={styles.buttonText}>CONTACT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuRow}>
                    <TouchableOpacity onPress = {this.onPress}
                    style = {styles.button}>
                        <Text style={styles.buttonText}>QUIZ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {this.onPress}
                    style = {styles.button}>
                        <Text style={styles.buttonText}>ABOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
menuStyle:{
    flex: 6
},
menuRow:{
    flex:2,
    flexDirection: 'row',
    backgroundColor: '#35605a',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff'
},
button:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
}
});