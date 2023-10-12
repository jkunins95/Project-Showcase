// Component Hierarchy => App.js

  // Header Component
  // ProjectForm Component
  // ProjectList Component
  // ProjectListItem Component

  // Relative Path

    // App Component => Highest Level in Our Component Hierarchy

  // Component Imports
  // . => /src
  import Header from "./components/Header"
  import ProjectForm from "./components/ProjectForm"
  import ProjectList from "./components/ProjectList"
  // import ProjectListItem from "./components/ProjectListItem"
  import projects from "./projects";


function App() {
  return (
    <div>
      <Header firstName="Jeremy" lastName="Kunins" age={28} />
      <ProjectForm />
      <ProjectList projects={projects}/>
    </div>
  )
}

export default App;