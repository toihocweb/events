import { Button, Menu, Container } from "semantic-ui-react";
import { NavLink, withRouter } from 'react-router-dom';
import React, { Component } from 'react'
import SignedInMenu from '../Menu/SignedInMenu';
import SignedOutMenu from '../Menu/SignedOutMenu';
import {Link} from 'react-router-dom'


export class NavBar extends Component {

  state = {
    authenticated: false
  }

  handleLogin = () => {
    this.setState({
      authenticated: true
    })
  }

  handleSignOut = () => {
    this.setState({
      authenticated: false
    })
    this.props.history.push('/');
  }

  render() {
    const { authenticated } = this.state
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item header as= {Link} to='/'>
              <img  src="/assets/logo.png" alt="logo" />
              Welcome
            </Menu.Item>
            <Menu.Item name="Events" as={NavLink} to='/events' />
            {authenticated && <Menu.Item name="People" as={NavLink} to='/people' />}
            {authenticated &&
              <Menu.Item>
                <Button floated="right" positive inverted content="Create Event"   as = {Link} to = {`/createEvent`}/>
              </Menu.Item>
            }
            {authenticated ? <SignedInMenu signOut={this.handleSignOut} /> : <SignedOutMenu signIn={this.handleLogin} />}
          </Container>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar)

