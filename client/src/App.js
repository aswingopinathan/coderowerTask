import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [helper, setHelper] = useState("");
  const [tableArr1, setTableArr1] = useState([]);
  const [tableArr2, setTableArr2] = useState([]);
  const [tableArr3, setTableArr3] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .get("http://localhost:5000/api/get-countries-tags", config)
      .then((data) => {
        setTableArr1(data.data.bdata.myArray[0]);
        setTableArr2(data.data.bdata.myArray[1]);
        setTableArr3(data.data.bdata.myArray[2]);
        setHelper(data.data.bdata);
      });
  }, []);
  return (
    <div className="App">
      <h1>Country Ranking</h1>
      <table className="tablestyle">
        <tbody>
          <tr>
            <td>{tableArr1[0]}</td>
            <td>{tableArr1[1]}</td>
            <td>{tableArr1[2]}</td>
          </tr>
          <tr>
            <td>{tableArr2[0]}</td>
            <td>{tableArr2[1]}</td>
            <td>{tableArr2[2]}</td>
          </tr>
          <tr>
            <td>{tableArr3[0]}</td>
            <td>{tableArr3[1]}</td>
            <td>{tableArr3[2]}</td>
          </tr>
        </tbody>
      </table>
      {helper.country1 ? (
        <h3>
          Ranks: {helper.country1} : {helper.rank1}
        </h3>
      ) : (
        ""
      )}
      {helper.country2 ? (
        <h3>
          Ranks: {helper.country2} : {helper.rank2}
        </h3>
      ) : (
        ""
      )}
      {helper.country3 ? (
        <h3>
          Ranks: {helper.country3} : {helper.rank3}
        </h3>
      ) : (
        ""
      )}
      {helper.k === 0 ? <h3>Ranks: </h3> : ""}
    </div>
  );
}

export default App;
