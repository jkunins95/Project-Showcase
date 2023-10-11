

function Header({ firstName, lastName, age }) {
  // console.log(props);

  // const firstName = props.firstName
  // const lastName = props.lastName
  // const age = props.age
  // const { firstName, lastName, age } = props;

  return (
    <>
      <h1>Welcome {firstName}, to the Showcase App!</h1>
      <p>Your last name is {lastName} and you are {age} years old!</p>
    </>
  );
};

export default Header;