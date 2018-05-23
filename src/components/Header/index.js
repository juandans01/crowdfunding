import React, { Component } from 'react'
import styled, { withTheme } from 'styled-components';
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #a9a9a9; 
`

const Title = styled.div`
  padding: 15px;
  color: ${props => props.theme.applicationColor};
  display: inline-block;
  float: left;
`

const DonateButton = styled.div`
  padding: 15px;
  display: inline-block;
  float: right;
  color: ${props => props.theme.applicationColor};
  cursor: pointer;
`

class Header extends Component {

  render() {
    return (
      <Wrapper>
        <Link to="/"><Title>The Crow Crowdfunding</Title></Link>
        { this.props.donate && (
          <DonateButton>Donate</DonateButton>
        )}
      </Wrapper>
    )
  }
}

export default withTheme(Header)