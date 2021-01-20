import React, { useState } from "react";
import "./styles.css";
import logo from "./tenor.gif";
import git from "./git.png";
import link from "./link.png";
import ins from "./ins.png";
import tweet from "./tweet.png";
import back from "./back.png";
export default function App() {
  var [inp1, setinp1] = useState("");
  var [inp2, setinp2] = useState("");
  var [inp3, setinp3] = useState("");
  var [bt1, setbt1] = useState("RESULT");
  var inpfn1 = (event) => {
    var inp1 = event.target.value;
    setinp1(inp1);
  };

  var inpfn2 = (event) => {
    inp2 = event.target.value;
    setinp2(inp2);
  };
  var inpfn3 = (event) => {
    inp3 = event.target.value;
    setinp3(inp3);
  };
  var calc = () => {
    var a = parseInt(inp1, 10);
    var b = parseInt(inp2, 10);
    var c = parseInt(inp3, 10);
    bt1 = a + b + c;
    var out = "";
    if (bt1 === 180) {
      out = "Yaa it is a triangle";
    } else {
      out = " No it is not a triangle";
    }

    setbt1(out);
  };

  function reset() {
    setbt1("RESULT");
    setinp1(0);
    setinp2(0);
    setinp3(0);
  }

  return (
    <div className="App">
      <div className="head">
        <span style={{ color: "rgb(83, 109, 83)" }}>TRI</span>'SHAPE
      </div>
      <pre>
        First Angle{"          "}:{"   "}
        <input
          className="input"
          value={inp1}
          placeholder="0°"
          onChange={inpfn1}
        />
      </pre>
      <pre>
        Second Angle{"     "}:{"   "}
        <input
          className="input"
          value={inp2}
          placeholder="0°"
          onChange={inpfn2}
        />
      </pre>
      <pre>
        Third Angle{"         "}:{"   "}
        <input
          className="input"
          value={inp3}
          placeholder="0°"
          onChange={inpfn3}
        />
      </pre>
      <img
        className="gif"
        style={{ height: "80px" }}
        alt="img error"
        src={logo}
      />
      <br />
      <button className="triosum" onClick={calc}>
        CHECK
      </button>
      <button className="triosum" onClick={reset}>
        RESET
      </button>
      <div className="result">{bt1}</div>
      <footer className="footer">
        <ol className="list">
          <li>
            <a href="https://github.com/AmitThakur11">
              <img className="footimg" alt="unload" src={git} />
            </a>
          </li>
          <li>
            <a>
              <img className="footimg" alt="unload" src={link} />
            </a>
          </li>
          <li>
            <a>
              <img className="footimg" alt="unload" src={ins} />
            </a>
          </li>
          <li>
            <a>
              <img className="footimg" alt="unload" src={tweet} />
            </a>
          </li>
        </ol>
      </footer>
    </div>
  );
}
