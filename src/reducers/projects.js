import { UPDATE_PROJECTS } from '../actions/projects'

export default function auth (state = {
  data: null
}, action) {
  switch (action.type) {
    case UPDATE_PROJECTS:
      return {
        data: action.projects
      }
    default:
      return state
  }
}
