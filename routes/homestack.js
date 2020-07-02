import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../components/Home';
import ReviewDetail from '../components/ReviewDetail';
import About from '../components/About';

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetail: {
    screen: ReviewDetail,
  },
  About: {
    screen: About,
  },
};

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);
