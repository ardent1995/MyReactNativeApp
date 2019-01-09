import React,{Component} from 'react';
import {View,Text,Image,FlatList,TouchableWithoutFeedback} from 'react-native';

export class Video extends Component{

    static navigationOptions ={
        header: null
    };
    constructor(props){
        super(props);
        this.state = {listLoaded: false};
    }

    componentDidMount(){
        return fetch(
            'https://www.googleapis.com/youtube/v3/search?part=snippet&q=coming+home&type=video&key=AIzaSyB2hm_APwGHE2ZJMzexNCXOWoAi3cWaisU'
        ).then((response) => response.json())
        .then((responseJson) =>{
            this.setState({
                listLoaded: true,
                videoList: responseJson.items
            });
        }
        ).catch((error) => console.error(error));
    }

    render(){

        const {navigate} = this.props.navigation;

        return(
            <View style={{alignItems:'center'}}>
                {this.state.listLoaded && (
                    <View style={{paddingTop:30}}>
                    <FlatList
                    data={this.state.videoList}
                    renderItem={({item}) =>
                    <TubeItem
                    navigate={navigate}
                    id={item.id.videoId}
                    title={item.snippet.title}
                    imageSrc={item.snippet.thumbnails.high.url}/>
                    }
                    keyExtractor={(item)=> item.id.videoId}/>
                    </View>
                )}
                { !this.state.listLoaded &&(
                    <View style={{paddingTop:30}}>
                        <Text>LOADING</Text>
                    </View>
                )}
            </View>
        );
    }
}

export class TubeItem extends Component{
    onPress= () =>{
        this.props.navigate('VideoDetailsRT',{videoId: this.props.id});
    };

    render(){
        return(<TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{paddingTop:20, alignItems:'center'}}>
        <Image
        style={{width:'100%',height:200}}
        source={{uri:this.props.imageSrc}}/>
        <Text>{this.props.title}</Text>
        </View>
        </TouchableWithoutFeedback>);
    }
}