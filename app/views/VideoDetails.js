import React,{Component} from 'react';
import {View,Text,WebView} from 'react-native';

export class VideoDetails extends Component{
    static navigationOptions ={
        header: null
    };

    render(){
        let videoId = this.props.navigation.getParam('videoId','NO-VIDEO');
        let url = `https://www.youtube.com/watch?v=${videoId}`
        return(
            <WebView
            style={{flex:1}}
            javaScriptEnabled={true}
            source={{uri:url}}
            />
        );
    }
}