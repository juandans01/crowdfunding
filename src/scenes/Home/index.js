import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import Crow from '../../assets/crow.svg'
import Header from '../../components/Header'
import { Wrapper, Welcome, FeatureWrapper, Card, FeaturePicture, Info, Title, Description, Funded, Divider, Picture, CardTitle, FundedBar, FundedProgress } from './components/Styled'
class Home extends Component { 

  constructor(props) {
    super(props)
    this.state = {
      featuredProjects: []
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.projects && this.props.projects) {
      this.fillFeaturedProjects()
    }
  }

  componentDidMount() {
    if (this.props.projects) {
      this.fillFeaturedProjects()
    }
  }

  fillFeaturedProjects = () => {    
    let featured = this.props.projects.filter(project => project.featured)
    this.setState({
      featuredProjects: featured
    })
  }

  goToProject = (projectId) => {
    this.props.history.push('/details/' + projectId)
    return false
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <Welcome>
          <img src={Crow} alt=""/>
          <div>
            The Crow Crowdfunding
          </div>
        </Welcome>
        <FeatureWrapper>
          <Title>
            Featured project
          </Title>
          { this.state.featuredProjects.map((project) => (
            <Card key={project.id} onClick={() => {this.goToProject(project.id)}}>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-md-2-5">
                  <FeaturePicture picture={project.picture} />                  
                </div>
                <div className="pure-u-1 pure-u-md-3-5">
                  <Info>
                    <CardTitle>{project.title}</CardTitle>
                    <div>Expires {moment().to(project.finish_at)}</div>
                    <FundedBar>
                      <FundedProgress progress={Math.round(project.made * 100 / project.objective)}/>
                    </FundedBar>
                    <Funded>{Math.round(project.made * 100 / project.objective)}%</Funded>
                    <Description>{project.description}</Description>
                  </Info>
                </div>
              </div>
            </Card>
          ))}
        </FeatureWrapper>
        <Divider />
        <Title>
          Discover
        </Title>
        { this.props.projects && this.props.projects.map((project) => (
          <div key={project.id} className="pure-u-1 pure-u-md-1-3">
            <Card onClick={() => {this.goToProject(project.id)}}>
              <Picture picture={project.picture} />
              <Info>
                {project.title}
                <Description>{project.description}</Description>
              </Info>     
            </Card>
          </div>          
        ))}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.data
  }
}
export default withRouter(connect(mapStateToProps, null)(Home))  