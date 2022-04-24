import {createStackNavigator} from 'react-navigation';
import About from './About';
import Main from './Main';
import Player from './Player';
import ActionBar from './ActionBar';
import Question from './Question';

const Routes= createStackNavigator( {
Question: {screen: Question},
Main : {screen: Main}, 
About: {screen: About} , 
Player: {screen: Player},
},
{headerMode: 'none'}

);

export default Routes;