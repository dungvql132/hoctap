import './App.sass'
import React from 'react';
import { ThemeProvider } from "styled-components"
import {theme} from 'src/styles/theme';
import {storeActions} from 'src/store/actions';
import { connect } from 'react-redux'
import {CommonRouter} from 'src/routers';


function App(props) {
  const { themeType, changeTheme } = props;
  return (
    <>
      <ThemeProvider theme={theme[themeType]}>
        <CommonRouter></CommonRouter>
      </ThemeProvider>
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    themeType: state['themeType']
  }
}

const mapDispathtoProps = (dispath) => {
  return {
    changeTheme: (currentTheme) => {
      dispath({
        type: storeActions.CHANGE_THEME,
        payload: currentTheme
      })
    }
  }
}

export default connect(mapStatetoProps, mapDispathtoProps)(App);
