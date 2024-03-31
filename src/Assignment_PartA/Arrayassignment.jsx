import React, { useState } from "react";
import Person from "./Person";
import DataofStudent from "./Data";
export default function Arrayassignment(props) {

  //=>> here displayCount is used to display the data of 10 students (by using useState(10) as props have 20 elements so we use only 10 in first display so we use it (10))
  // =>> setDisplayCount is a function that show 2 elements according to previous count which is also a 
  const [displayCount, setDisplayCount] = useState(10);
  // here we make a function handleShowMore that is invoke/call when we click on the button by using the property of (onClick) 
  const handleShowMore = () => {
    // as we set the setDisplayCount as the function is Use state we know useState contain two parameters(variable and Call back_Fucntion (SetDisplayCount is the Call-back function))
    // setDisplayCount contain an anonymous function that accept the parameter(prevCount) which contain the value 10 as usestate is 10 then when it again call its values is increases by 2
    setDisplayCount(prevCount => prevCount + 2);
  };
  return (
    <div style={{background:"Black", color:"white", margin:"10px", padding:"20px"}}>
      {/* main heading */}
        <h1>Assignment 1 Data </h1> 
        {/* Students data display */}
        <h2>Students Data</h2>
        {/* slice is used to show the 0-10 items */}
      {props.data.slice(0, displayCount).map((item, index) => (
        <div key={index}>
          <h3>Student :  {index+1} </h3>
          <p>Name: {item.name}</p>
          <p>Roll No: {item.roll_no}</p>
          <button onClick={()=>props.onDelete(index)}>Delete Data</button>
        </div>
      ))}
      {/* Show More button */}
      <br />
      <button onClick={handleShowMore}>Show More</button>
<hr />
    </div>
  );
}
