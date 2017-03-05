// @flow

import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native'

import {Scene, Router, Modal} from 'react-native-router-flux'
import ContainerStyles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'
import TabIcon from '../Widgets/TabIcon'
import {Metrics, Colors} from '../Themes'
import animationStyle from '../Lib/AniamtionStyle'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
import ListviewSearchingExample from '../Containers/ListviewSearchingExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'

/* **************************
 * Documentation: https://github.com/aksonov/react-native-router-flux
 ***************************/
const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: Colors.tabNav,
    borderBottomWidth: 0
  },
  tabBarSelectedItemStyle: {}
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    opacity:1,
    backgroundColor: Colors.white,
    shadowColor: Colors.prdarkimary,
    shadowOffset: null,
    shadowOpacity: 0.3,
    shadowRadius: 5
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : Metrics.navBarHeight;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

let currentSwitchPage = 'text1';

const SwitcherPage = (props) => (
  <View>
    <Text style={{marginTop: 100, textAlign: 'center'}}>current page: {props.text}</Text>
    <Button
      onPress={() => {
        currentSwitchPage = currentSwitchPage === 'text1' ? 'text2' : 'text1';
        Actions.refresh({key: 'switcher'});
      }}
    >
      Switch!
    </Button>
    <Button
      onPress={() => {
        Actions.launch({type: ActionConst.RESET});
      }}
    >
      Exit
    </Button>
  </View>
);
class NavigationRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {page: 'second'};
  }

  render() {
    return (
      <Router getSceneStyle={getSceneStyle} animationStyle={animationStyle}>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper'>
            <Scene
              key="main"
              tabs
              tabBarStyle={styles.tabBarStyle}
              tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
              pressOpacity={1}
            >
              <Scene key="express" initial component={ListviewGridExample} title="表白" icon={TabIcon}
                     iconName="ios-bowtie-outline"
                     renderLeftButton={NavItems.hamburgerButton} navigationBarStyle={ContainerStyles.navBar}
                     titleStyle={ContainerStyles.title} leftButtonIconStyle={ContainerStyles.leftButton}
                     rightButtonTextStyle={ContainerStyles.rightButton}/>

              <Scene key="templates" component={MapviewExample} title="模板" icon={TabIcon}
                     iconName="ios-bookmarks-outline"
                     renderLeftButton={NavItems.hamburgerButton} navigationBarStyle={ContainerStyles.navBar}
                     titleStyle={ContainerStyles.title} leftButtonIconStyle={ContainerStyles.leftButton}
                     rightButtonTextStyle={ContainerStyles.rightButton}/>
              <Scene
                key="interflow"
                title="冒泡"
                icon={TabIcon}
                iconName="ios-megaphone-outline"
                navigationBarStyle={ContainerStyles.navBar} titleStyle={ContainerStyles.title}
                leftButtonIconStyle={ContainerStyles.leftButton} rightButtonTextStyle={ContainerStyles.rightButton}
              >
                <Scene
                  key="interflow1_1"
                  initial
                  component={ThemeScreen}
                  title="冒泡"
                  onRight={() => alert('Right button')}
                  rightTitle="分享"
                  renderLeftButton={NavItems.hamburgerButton}
                />
                <Scene
                  key="interflow1_2"
                  component={LoginScreen}
                  title="登录"
                />
              </Scene>

              <Scene key="recommend" component={AllComponentsScreen} title="推荐" icon={TabIcon}
                     iconName="ios-ionitron-outline"
                     renderLeftButton={NavItems.hamburgerButton} navigationBarStyle={ContainerStyles.navBar}
                     titleStyle={ContainerStyles.title} leftButtonIconStyle={ContainerStyles.leftButton}
                     rightButtonTextStyle={ContainerStyles.rightButton}/>

            </Scene>
            <Scene key='login' component={LoginScreen} title='Login' hideTabBar hideNavBar/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
