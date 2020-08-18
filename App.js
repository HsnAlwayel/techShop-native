import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

//Styles
import { ThemeProvider } from "styled-components";

// Components
import RootNavigator from './components/Navigation';
import { Spinner } from 'native-base';

export default class App extends React.Component {
  state = {
    loading: true
  };


  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="white" />;
    }
    const theme = {
      light: {
        text: "Dark Mode",
        mainColor: "#242424", // main font color
        backgroundColor: "#fefafb", // main background color
        color: "#ff85a2",
      }
    }

    return (
      <ThemeProvider theme={theme.light}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}
