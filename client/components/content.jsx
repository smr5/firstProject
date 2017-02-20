import React from 'react';
require('../styles/content.scss');
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Content = () => (
    <Card>
        <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="images/jsa-128.jpg"/>
        <CardMedia overlay={< CardTitle title = "Overlay title" subtitle = "Overlay subtitle" />}>
            <img src="https://lc-www-live-s.legocdn.com/r/www/r/starwars/-/media/franchises/starwars2015/misc/tfa_cta_744x421.jpg?l.r2=-521045527"/>
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle"/>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
        </CardActions>
    </Card>
);

export default Content;
