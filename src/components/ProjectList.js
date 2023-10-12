// Take "projects" and create a ProjectListItem Component for each

// . => /src/components
import ProjectListItem from "./ProjectListItem";

function ProjectList({projects}) {
  // console.log(projects);

  // projects => Array of Objects
  // .map => returns a new array - can take that array and reference it a little before

  const ProjectListItems = projects.map(project => {
    return <ProjectListItem key={project.id} project={project} />
  });

  return (
    <>
      <h1>ProjectList Component</h1>
      <ul>{ProjectListItems}</ul>
    </>
  )
}

export default ProjectList;