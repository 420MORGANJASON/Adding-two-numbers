import React, { useState } from "react";

function Form() {
  const [number, setNumber] = useState("[]");
  const [number1, setNumber1] = useState("[]");
  const [submittedData, setSubmittedData] = useState([]);
  const [sum, setSum] = useState(0);

  function handlenumberChange(event) {
    setNumber(event.target.value);
  }

  function handlenumber1Change(event) {
    setNumber1(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { number: number, number1: number1 };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    const num1 = parseInt(number);
    const num2 = parseInt(number1);
    setSum(num1 + num2);
    setNumber("");
    setNumber1("");
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.number} {data.number1}
      </div>
    );
  });

  return (
    <div>

        <h1> ADD TWO NUMBERS</h1>
      <form onSubmit={handleSubmit} className="form1">
        <input type="number" onChange={handlenumberChange} value={number} className="inp"/> <br />
        <input type="number" onChange={handlenumber1Change} value={number1} className="inp1"/> <br />
        <button type="submit" className="button">Submit</button>
      </form>
      <h3>Submissions</h3>
      {listOfSubmissions}
       <p>Sum: {sum}</p>
    </div>
  );
}

export default Form;