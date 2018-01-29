import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

const style = {
  margin: 12,
};

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
        <BookDetail/>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div>
              <FlatButton label="Default" />
              <RaisedButton label="Primary" primary={true} style={style} />
             </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
