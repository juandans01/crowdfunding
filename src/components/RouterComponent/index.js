import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { updateProjects } from '../../actions/projects'

import Home from '../../scenes/Home'
import ProjectDetails from '../../scenes/ProjectDetails';

//Represting backend
const mockProjects = [
  {
    id: 1,
    title: "Ready project one",
    picture: "https://picsum.photos/1920/1280",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis diam. Proin iaculis, elit dapibus vehicula mattis, metus libero aliquet lectus, a congue justo felis ac ligula. Etiam a ornare nisi, quis tristique ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris laoreet ultricies malesuada. Praesent et tellus sit amet dui eleifend sodales in at justo",
    objective: 1000, //Dollars
    made: 350,
    finish_at: "2018-06-17 09:30:00",
    created_at: "2018-05-10 13:12:10",
    featured: 1 //boolean indicating if featured
  },
  {
    id: 2,
    title: "Lethal Project",
    picture: "https://picsum.photos/1920/1280",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis diam. Proin iaculis, elit dapibus vehicula mattis, metus libero aliquet lectus, a congue justo felis ac ligula. Etiam a ornare nisi, quis tristique ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris laoreet ultricies malesuada. Praesent et tellus sit amet dui eleifend sodales in at justo",
    objective: 6000, //Dollars
    made: 430,
    finish_at: "2018-07-22 09:30:00",
    created_at: "2018-05-19 09:30:00",
    featured: 0 //boolean indicating if featured
  },
  {
    id: 3,
    title: "Rocket Project",
    picture: "https://picsum.photos/1920/1280",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis diam. Proin iaculis, elit dapibus vehicula mattis, metus libero aliquet lectus, a congue justo felis ac ligula. Etiam a ornare nisi, quis tristique ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris laoreet ultricies malesuada. Praesent et tellus sit amet dui eleifend sodales in at justo",
    objective: 6000, //Dollars
    finish_at: "2018-06-12 09:30:00",
    made: 3567,
    created_at: "2018-05-19 09:30:00",
    featured: 0 //boolean indicating if featured
  },
  {
    id: 4,
    title: "Rocket Project",
    picture: "https://picsum.photos/1920/1280",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu convallis diam. Proin iaculis, elit dapibus vehicula mattis, metus libero aliquet lectus, a congue justo felis ac ligula. Etiam a ornare nisi, quis tristique ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris laoreet ultricies malesuada. Praesent et tellus sit amet dui eleifend sodales in at justo",
    objective: 6000, //Dollars
    finish_at: "2018-06-12 09:30:00",
    made: 3567,
    created_at: "2018-05-19 09:30:00",
    featured: 0 //boolean indicating if featured
  }
]

class RouterComponent extends Component {

  componentDidMount() {
    this.props.updateProjects(mockProjects)
  }
  
  render(){
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>The Crow Crowfunding</title>
          <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous"/>
          <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css" />
        </Helmet>  
        <Switch>
          <Route exact path="/" component={Home}/>          
          <Route exact path="/details/:id" component={ProjectDetails}/>           
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
  updateProjects: (projects) => dispatch(updateProjects(projects))
 } 
}

export default withRouter(connect(null, mapDispatchToProps)(RouterComponent))