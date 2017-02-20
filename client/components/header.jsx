import React from 'react';
require('../styles/header.scss');

class Header extends React.Component {

    render() {
        var links = this.props.config.map(function(item, index) {
            return <li key={index}>{item.title}</li>
        });
        return (
            <div id="header" className="navbar navbar-default navbar-fixed-top">

                <div className="navbar-header"></div>

            </div>

        );
    }

}

export default Header;
