const Child = (props) => {

    //console.log(props);
    
  return (
    <>
      <div>
        <p>Name: {props.sendname}</p>
        <p>Age: {props.sendnumber}</p>
        <p>Fruits: {props.sendarray.join(",")}</p>
        <p>Places: {props.sendobject.place1}, {props.sendobject.place2}</p>

        <h1>Students List:</h1>
        {props.sendstudents.map((students) => (
          <p key={students.id}>
            Id: {students.id}, Name: {students.name}, Marks: {students.mark}
          </p>
        ))}
      </div>
    </>
  );
};

export default Child;
