import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './screens/Home/Home';


const AppNavigator = createStackNavigator({
   Home,
  
},{ initialRouteName: 'Home' });

// const AppNavigator = createStackNavigator({
//     Home:{
//         screen:Home
//     },
//     Driver:{
//         screen:Driver
//     },
//     Passenger:{
//         screen:Passenger
//     },
// },{ initialRouteName: 'Home' });


const AppContainer = createAppContainer (AppNavigator);

export default AppContainer;