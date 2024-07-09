// class Test extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       delay: 300,
//       result: "No result",
//     };
//     this.handleScan = this.handleScan.bind(this);
//   }
// }

import React from "react";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

const App = () => {
  const [delay, setDelay] = useState(100);
  const [result, setresult] = useState("No result");
  const [data, setData] = useState("No result");
  const handleScan = (data) => {
    if (data) {
      setresult(data);
    }
  };
  function handleError(err) {
    console.error(err);
  }

  return (
    <div style={{ width: "300px" }}>
      <QrReader
        ViewFinder={Finder}
        scanDelay={600}
        constraints={{
          ConstrainDouble: {
            max: "20px",
          },
        }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info("error", error);
          }
        }}
        style={{ width: "50%" }}
      />
      <p>{data}</p>
    </div>
  );
};

const Finder = () => <h1>hELLO WOLRRR</h1>;
export default App;
