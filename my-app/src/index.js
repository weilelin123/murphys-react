import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {Menu, Image, Grid, List} from 'semantic-ui-react';

class TopMenu extends React.Component{
    render(){
        return (
            <Menu borderless className="topmenu">
            <Image src="http://luckybelly.com/img/lucky-logo-light.png"/>
            <Menu.Item name="Menus" style={{color:'white'}} position='right'/>
            <Menu.Item name="Info" style={{color:'white'}}/>
        <Menu.Item name="Contact" style={{color:'white'}}/>
        <Menu.Item name="Breaking Bread Hospitality" style={{color:'white'}}/>
        </Menu>
    )
    }
}

class MiddleMenu extends React.Component{
    render(){
        return(
            <Image src="http://luckybelly.com/img/bellybowl.jpg" fluid/>
    )
    }
}

class FooterMenu extends React.Component{
    render(){
        return(
            <Grid className="footer-background">
            <Grid columns={3} centered container>
        <Grid.Column>
        <Image src="http://luckybelly.com/img/lucky-logo-light.png"/>
            </Grid.Column>

            <Grid.Column>
            Links
            <hr/>
            <List>
            <List.Item>Hours</List.Item>
            <List.Item>Menus</List.Item>
            <List.Item>Reservations</List.Item>
            <List.Item>Corkage</List.Item>
            <List.Item>Contact</List.Item>
            </List>
            </Grid.Column>

            <Grid.Column>
            Contact
            <hr/>
            <List>
            <List.Item>808-531-1888</List.Item>
            <List.Item>seat@luckybelly.com</List.Item>
        <List.Item>50 N. Hotel St. Honolulu, HI 96817</List.Item>
        </List>
        </Grid.Column>
        </Grid>
        </Grid>
    )
    }
}




class Luckybelly extends React.Component {
    render() {
        return (
            <div>
            <TopMenu/>
            <MiddleMenu/>
            <FooterMenu/>
            </div>
    );
    }
}

ReactDOM.render(<Luckybelly/>, document.getElementById('root'));