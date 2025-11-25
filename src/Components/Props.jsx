import Child from "./Child"

const Props = (props) => {

    //console.log(props.senddata);
    
  const name = "Janu";
  const age = 22;
  const fruits = ["Apple", "Banana", "Mango"];
  const place = {place1:"Chennai",place2:"Bangalore"}
  const students =[{id:1,name:"Janu",mark:92},{id:2,name:"Janani",mark:96},{id:3,name:"Jana",mark:95}]

  return (
    <>
      <h1>{props.senddata}</h1>
      <Child 
        sendname={name}
        sendnumber={age}
        sendarray={fruits}
        sendobject={place}
        sendstudents = {students}
      />
    </>
  );
}

export default Props;
