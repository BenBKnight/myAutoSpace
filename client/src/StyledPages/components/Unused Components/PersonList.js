import React from "react";
import Person from "./Person";

class PersonList extends React.Component {

  // let personList = props.persons.map(person => {
  //   return (<Person key = {person.id} name = {person.name} occupation = {person.occupation}/>)
  // })
  render() {
    return (
      // <ul>{personList}</ul>
      <ul>
        {/* embedded mapping of list with jsx. Commented out section above is the long way to do it */}
        {
          this.props.persons.map(person => {
            return (<Person key={person.id} name={person.name} occupation={person.occupation} />)
          })
        }
      </ul>
    );
  }
}

export default PersonList;