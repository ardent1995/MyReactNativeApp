/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from './app/views/Home';
import {createStackNavigator} from 'react-navigation';
import Contact from './app/views/Contact';
import { Video } from './app/views/Video';
import { VideoDetails } from './app/views/VideoDetails';
import { Register } from './app/views/Register';

type Props = {};
const MyRoute = createStackNavigator({
  HomeRT: Home,
  ContactRT: Contact,
  LessonRT: Video,
  VideoDetailsRT: VideoDetails,
  RegisterRT: Register
},
{
  initialRouteName: 'HomeRT'
});
export default class App extends Component<Props> {
  render() {
    return (
      <MyRoute/>
    );
  }
}