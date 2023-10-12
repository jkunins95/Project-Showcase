function ProjectListItem({project}) {

  // Object Destructuring
  // project => JS Object
  // Does ordering matter? - No
  const { name, about, phase, link, image } = project;

  return (
    <li>
      <br />
      <h2>ProjectListItem Component</h2>
      <p>Title: {name}</p>
      <p>About: {about}</p>
      <a href={link}>Project Link</a>
      {/* <img src={image} /> */}
    </li>
  )
};

export default ProjectListItem;

// Before Object Destructuring - very tedious
// function ProjectListItem(props) {
//   return (
//     <li>
//       <br />
//       <h2>ProjectListItem Component</h2>
//       <p>{props.project.name}</p>
//       <p>{props.project.about}</p>
//       <p>{props.project.link}</p>
//     </li>
//   )
// }