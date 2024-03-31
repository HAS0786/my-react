import React, { useState } from "react";

const styling = { padding: "5px", margin: "10px" };
const styleinput = { padding: "5px", marginLeft: "10px", borderRadius: "10px" };

export default function Form() {

  // making UseStates:
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [hidden, setHiddent] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [dateofBirth, setDate] = useState('');
//   this useState is make to show the data on Screen:
  const [submittedData, setSubmittedData] = useState(null);

// make functions
  const firstnamehandle = e => setfirstname(e.target.value); // first name
  const lastnamehandle = e => setlastname(e.target.value); // last name
  const passwordHandler = e => setPassword(e.target.value); // password
  const emailHandler = e => setEmail(e.target.value); // email
  const datehandler = e => setDate(e.target.value); // date
  const checkboxhandler = e => setCheckbox(e.target.checked); // checkbox

  //   show on Console
  const submit = e => {
    e.preventDefault();
    console.log("First-Name :", firstname);
    console.log("Last-Name :", lastname);
    console.log("Email :", email);
    console.log("Password :", password);
    console.log("Date-of-Birth :", dateofBirth);
    console.log("Checkbox:", checkbox);
    setSubmittedData({ firstname, lastname, email, password, dateofBirth, checkbox });
  };

//   return values
  return (
    <div
      style={{
        background: "Black",
        color: "White",
        padding: "10px",
        margin: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
        {/* form start */}
      <form
        onSubmit={submit}
        style={{
          border: "5px solid white",
          padding: "10px",
          borderRadius: "10px"
        }}
      >
       
        <div style={{background: "grey", textAlign: "center", borderRadius: "10px" }}>
          <h1>Form</h1>
        </div>
        <div style={styling}>
          Enter the First-Name:
          <input
            style={styleinput}
            value={firstname}
            type="text"
            placeholder="Enter the First Name"
            onChange={firstnamehandle}
          />
        </div>
        <div style={styling}>
          Enter the Last-Name:
          <input
            style={styleinput}
            value={lastname}
            type="text"
            placeholder="Enter the Last-Name"
            onChange={lastnamehandle}
          />
        </div>
        <div style={styling}>
          Enter the Password:
          <input
            style={styleinput}
            value={password}
            type={hidden ? "password" : "text"}
            placeholder="Enter the Password"
            onChange={passwordHandler}
          />
          <button type="button" onClick={() => setHiddent(!hidden)}>Show Password</button>
        </div>
        <div style={styling}>
          Enter the Email:
          <input
            style={styleinput}
            value={email}
            type="email"
            placeholder="Enter the Email"
            required
            onChange={emailHandler}
          />
        </div>
        <div>
          Enter the Date:
          <input
            style={styleinput}
            value={dateofBirth}
            type="date"
            name="Date"
            onChange={datehandler}
          />
        </div>
        <div style={styling}>
          Remember me
          <input
            style={styleinput}
            checked={checkbox}
            type="checkbox"
            onChange={checkboxhandler}
          />
        </div>
        <input style={styling} type="submit" value="Submit Form" />
      </form>
      {/* submitted Data show on Screen */}
      {submittedData && (
        <div style={{ background: "lightgray", color:"black", padding: "10px", margin: "20px", borderRadius: "10px" }}>
          <h2>Submitted Form Data:</h2>
          <p>First Name: {submittedData.firstname}</p>
          <p>Last Name: {submittedData.lastname}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Date of Birth: {submittedData.dateofBirth}</p>
          <p>Checkbox: {submittedData.checkbox ? "Checked" : "Unchecked"}</p>
        </div>
      )}
    </div>
  );
}
