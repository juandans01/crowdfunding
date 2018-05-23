export const UPDATE_PROJECTS = 'UPDATE_PROJECTS'

export function updateProjects (projects) {
  return {
    type: UPDATE_PROJECTS,
    projects
  }
}
