// Person.jsx
import React, { useState } from "react";
import Arrayassignment from "./Arrayassignment";

function Person(props) {
 const [arraydata, setArraydata] = useState(props.data);
 const [newName, setNewName] = useState('');
 const [newRollNo, setNewRollNo] = useState('');


  const deleteStudentdata = (index) => {
    setArraydata(arraydata.filter((_, i) => i !== index));
 };

 const addStudentData = () => {
    const newStudent = { name: newName, roll_no: newRollNo };
    setArraydata([...arraydata, newStudent]);
    setNewName('');
    setNewRollNo('');
 };

  return (
    <div style={{background:"Black", color:"white", margin:"30px", padding:"20px"}}>
      <Arrayassignment data={arraydata} onDelete={deleteStudentdata} />
      <div >
      
        <h2>Add New Student</h2>
        <input
        style={{margin:"10px",padding:"5px",borderRadius:"10px"}}
          type="text"
          placeholder="Enter new student's name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
        style={{margin:"10px",padding:"5px",borderRadius:"10px"}}
          type="text"
          placeholder="Enter new student's roll number"
          value={newRollNo}
          onChange={(e) => setNewRollNo(e.target.value)}
        />
      </div>
        <button onClick={addStudentData}>Add Student</button>
    </div>
  );
}

export default Person;
