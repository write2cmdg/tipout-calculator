import { useState } from "react";
import "./App.css";
import BackgroundAnimation from "./components/BackgroundAnimations";
import CurrentTime from "./components/CurrentTime";

function App() {
  let [total, setTotal] = useState("");
  let [points, setPoints] = useState("3.50");
  let [includeHost, setIncludeHost] = useState(true);

  let handleTotalChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value === "") {
      setTotal("");
      return;
    }
    let formattedValue = (Number(value) / 100).toFixed(2);
    setTotal(formattedValue);
  };

  let handlePointsChange = (e) => {
    let raw = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(raw)) {
      setPoints(raw);
    }
  };

  let totalAmount = Number(total);
  let numericPoints = Number(points);
  let hostsTips = includeHost ? totalAmount * 0.05 : 0;
  let sub = totalAmount - hostsTips;
  let full = numericPoints > 0 ? sub / numericPoints : 0;
  let p5 = full / 2;
  let p75 = p5 * 1.5;
  let p25 = full / 4;

  return (
    <div className="container">
      <div className="form-group">
        <h1 className="toggle">Tipout Calculator</h1>
        <CurrentTime />
      </div>

      <div className="main-container">
        <div className="top-half">
          <div>
            <BackgroundAnimation />
          </div>
          <form>
            <h2>Tips Info:</h2>
            <div className="form-group">
              <h4>Total Tips:</h4>
              <input
                type="text"
                name="total"
                value={total}
                placeholder={"$0.00"}
                onChange={handleTotalChange}
              />
            </div>
            <div className="form-group">
              <h4>Total Points:</h4>
              <input
                type="text"
                name="points"
                value={points}
                placeholder="0.00"
                onChange={handlePointsChange}
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={includeHost}
                  onChange={() => setIncludeHost(!includeHost)}
                />
                Include Host (5%)
              </label>
            </div>
          </form>
        </div>
        <div className="results">
          <h2>Tipout Totals:</h2>
          {includeHost && (
            <div className="result-line">
              <h4>Host:</h4>
              <span className="result">${isNaN(hostsTips) ? "0.00" : hostsTips.toFixed(2)}</span>
            </div>
          )}
          <br />
          <div className="line">
            <hr />
            <br />
          </div>
          <div className="result-line">
            <h4>Full Point:</h4>
            <span className="result">${isNaN(full) ? "0.00" : full.toFixed(2)}</span>
          </div>
          <div className="result-line">
            <h4>0.75 Point:</h4>
            <span className="result">${isNaN(p75) ? "0.00" : p75.toFixed(2)}</span>
          </div>
          <div className="result-line">
            <h4>0.5 Point:</h4>
            <span className="result">${isNaN(p5) ? "0.00" : p5.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <footer>
        <div className="small">
          <a href="mailto:write2cmdg+daddiestipoutcalc@gmail.com">Contact Me</a>
        </div>
      </footer>
    </div>
  );
}

export default App;