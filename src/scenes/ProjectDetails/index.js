import React, { Component } from 'react'
import { Wrapper, Picture, Content, Raised, FundedBar, FundedProgress, Cost, DonateButton, Description, Donor, Donors, Title } from './components/Styled'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from '../../components/Header'
import moment from 'moment'

const mockDonors = [
  {
    id: 1,
    picture: "https://www.fillmurray.com/40/40",
    name: "John Doe",
    donation: 50
  },
  {
    id: 2,
    picture: "https://www.fillmurray.com/40/40",
    name: "Sarah Connor",
    donation: 50
  },
  {
    id: 3,
    picture: "https://www.fillmurray.com/40/40",
    name: "Peter Venkman",
    donation: 50
  },
  {
    id: 4,
    picture: "https://www.fillmurray.com/40/40",
    name: "Harold Blues",
    donation: 50
  },
]

class ProjectDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      project: {},
      donors: mockDonors
    }
  }

  componentDidMount() {
    if (this.props.projects) {
      this.initProject()
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.projects && this.props.projects) {
      this.initProject()
    }
  }

  initProject = () => {
    let project = this.props.projects.find((obj) => {
      return obj.id == this.props.projectId
    })

    this.setState({
      project: project
    })
  }

  render() {
    return (
      <Wrapper>
        <Header donate/>
        <Content>
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-2-3">
              <Title>{this.state.project.title}</Title>
              <Picture src={this.state.project.picture}/>
              <Description>{this.state.project.description}</Description>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <Raised>
                <Cost>
                  ${this.state.project.made} <span>of ${this.state.project.objective} raised</span>
                </Cost>                
                <FundedBar>
                  <FundedProgress progress={Math.round(this.state.project.made * 100 / this.state.project.objective)}/>
                </FundedBar>
                <div>Expires {moment().to(this.state.project.finish_at)}</div>
                <DonateButton>Donate!</DonateButton>
              </Raised>
              <Donors>
                { this.state.donors.map((donor) => (
                  <Donor key={donor.id}>
                    <img src={donor.picture} alt=""/>
                    <div>
                      <div>
                        ${donor.donation}
                      </div>
                      <span>
                        {donor.name}
                      </span>
                    </div>
                  </Donor>
                ))}
              </Donors>
            </div>
          </div>
        </Content>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    projectId: ownProps.match.params.id,
    projects: state.projects.data
  }
}

export default withRouter(connect(mapStateToProps, null)(ProjectDetails))