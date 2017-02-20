import React from 'react';
// Stylesheets
//require('../styles/leftbar.scss');

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Leftbar extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div id="sidebar-wrapper" className="col-md-1">

                <Menu>
                    <MenuItem primaryText="Home"/>
                    <MenuItem primaryText="About us"/>
                    <MenuItem primaryText="Contact us"/>
                </Menu>

            </div>
        );
    }
}

export default Leftbar;
