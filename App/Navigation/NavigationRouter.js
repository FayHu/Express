  // @flow

  import React, { Component } from 'react'
  import {
    StyleSheet,
    Text,
    View
  } from 'react-native'
  import { Scene, Router } from 'react-native-router-flux'
  import ContainerStyles from './Styles/NavigationContainerStyle'
  import NavigationDrawer from './NavigationDrawer'
  import NavItems from './NavItems'
  import CustomNavBar from '../Navigation/CustomNavBar'
  import TabIcon from '../Widgets/TabIcon'
  import Tabs from 'react-native-tabs';
  import {Metrics} from '../Themes'

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
    container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarStyle: {
      backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
      
    },
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
      backgroundColor: '#fff',
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
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
      <Text style={{ marginTop: 100, textAlign: 'center' }}>current page: {props.text}</Text>
      <Button
        onPress={() => {
          currentSwitchPage = currentSwitchPage === 'text1' ? 'text2' : 'text1';
          Actions.refresh({ key: 'switcher' });
        }}
      >
        Switch!
      </Button>
      <Button
        onPress={() => {
          Actions.launch({ type: ActionConst.RESET });
        }}
      >
        Exit
      </Button>
    </View>
  );
  class NavigationRouter extends Component {
    constructor(props){
      super(props);
      this.state = {page:'second'};
    }
    render () {
      var self = this;
      return (
        <Router getSceneStyle={getSceneStyle} >
          <Scene key='drawer' component={NavigationDrawer} open={false} >
            <Scene key='drawerChildrenWrapper' >
                  <Scene
                    key="main"
                    tabs
                    tabBarStyle={styles.tabBarStyle}
                    tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                  >
                    <Scene key="express" initial component={ListviewGridExample} title="表白" icon={TabIcon} iconName="heart-o"
                      renderLeftButton={NavItems.hamburgerButton} navigationBarStyle={ContainerStyles.navBar} titleStyle={ContainerStyles.title} leftButtonIconStyle={ContainerStyles.leftButton} rightButtonTextStyle={ContainerStyles.rightButton} />

                    <Scene key="templates" component={MapviewExample} title="模板"  icon={TabIcon} iconName="superpowers"
                      renderLeftButton={NavItems.hamburgerButton} navigationBarStyle={ContainerStyles.navBar} titleStyle={ContainerStyles.title} leftButtonIconStyle={ContainerStyles.leftButton} rightButtonTextStyle={ContainerStyles.rightButton} />

                    <Scene key="interflow" component={ThemeScreen} title="冒泡"  icon={TabIcon} iconName="comments"
                      renderLeftButton={NavItems.hamburgerButton} navigationBarStyle={ContainerStyles.navBar} titleStyle={ContainerStyles.title} leftButtonIconStyle={ContainerStyles.leftButton} rightButtonTextStyle={ContainerStyles.rightButton}/>

                    <Scene key="recommend" component={AllComponentsScreen} title="推荐"  icon={TabIcon} iconName="pagelines"
                      renderLeftButton={NavItems.hamburgerButton} navigationBarStyle={ContainerStyles.navBar} titleStyle={ContainerStyles.title} leftButtonIconStyle={ContainerStyles.leftButton} rightButtonTextStyle={ContainerStyles.rightButton} />

                  </Scene>
                  <Scene key='login' component={LoginScreen} title='Login'  hideNavBar hideTabBar />
                </Scene>

          </Scene>
        </Router>
      )
    }
  }

  export default NavigationRouter
