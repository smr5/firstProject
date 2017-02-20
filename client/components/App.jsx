import React from 'react';
import Leftbar from './leftbar.jsx';
import Header from './header.jsx';
import Content from './content.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Stylesheets
require('../styles/theme.scss');
require('../styles/App.scss');

//let ThemeManager = MU.Styles.ThemeManager();
//let LeftNav = MU.LeftNav;

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            Navigation: [
                {
                    title: 'home'
                }, {
                    title: 'about'
                }
            ],
            Leftbar: {},
            Footer: {},
            Enabled: false
        }
    }

    render() {

        return (
            <MuiThemeProvider>
                <div id="wrapper" className="main-app-container">
                    <Header config={this.state.Navigation}/>
                    <Leftbar config={this.state.Lefrbat}/>
                    <Content/>

                </div>
            </MuiThemeProvider>
        );
    }
}
export default App;
