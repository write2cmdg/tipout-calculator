import { useState } from 'react';
import './App.css';

function App() {
  let [total, setTotal] = useState(0.00);
  let [points, setPoints] = useState(6.375);
  let [hostOneHours, setHostOneHours] = useState(6);
  let [hostTwoHours, setHostTwoHours] = useState(4);
  let [hostThreeHours, setHostThreeHours] = useState(0);

  let hostsTips = total * 0.05
  let sub = total - hostsTips
  let hostsTotalHours = Number(hostOneHours) + Number(hostTwoHours) + Number(hostThreeHours)
  let hostsTipsPerHour = hostsTips / hostsTotalHours
  let full = sub / points
  let p5 = full / 2
  let p75 = p5 * 1.5
  let p375 = p75 / 2
  let tipsHostOne = hostsTipsPerHour * hostOneHours
  let tipsHostTwo = hostsTipsPerHour * hostTwoHours
  let tipsHostThree = hostsTipsPerHour * hostThreeHours
   
  return (
    <div className='main-container'>
      <h2>TIPOUT CALC</h2>

      <div className="top-half">
        <form>
          <div className='form-group'>
            <label>Total tips: </label>
            <input  type="text" name="total" value={total} placeholder={total} onChange={(e) => setTotal(e.target.value)} />
          </div>
          <div className='form-group'>
            <label>Total points: </label>
            <input  type="text" name="points" value={points} placeholder={points} onChange={(e) => setPoints(e.target.value)} />
          </div>
          <div className='form-group'>
            <label>Hours Host 1: </label>
            <input  type="text" name="hostOneHours" value={hostOneHours} placeholder={hostOneHours} onChange={(e) => setHostOneHours(e.target.value)} />
          </div>
          <div className='form-group'>
            <label>Hours Host 2: </label>
            <input  type="text" name="hostTwoHours" value={hostTwoHours} placeholder={hostTwoHours} onChange={(e) => setHostTwoHours(e.target.value)} />
          </div>
          <div className='form-group'>
            <label>Hours Host 3: </label>
            <input type="text" name="hostThreeHours" value={hostThreeHours} placeholder={hostThreeHours} onChange={(e) => setHostThreeHours(e.target.value)} />
          </div>
        
        </form>
        {/* <div className="totals">
          <p>Total hosts' tips: ${hostsTips.toFixed(0)}</p>
          <p>Sub Total: ${sub.toFixed(0)}</p>
          <p>Hosts' total Hours: {hostsTotalHours}</p>
          <p>Hosts' tips per Hours: ${hostsTipsPerHour.toFixed(0)}</p>
        </div> */}
      </div>


      <div className="results">
        <p>Host 1 takes <span className="result">${tipsHostOne.toFixed(0)}</span></p><br />
        <p>Host 2 takes <span className="result">${tipsHostTwo.toFixed(0)}</span></p><br />
        <p>Host 3 takes <span className="result">${tipsHostThree.toFixed(0)}</span></p><br />
        <hr /> <br />
        <p>Full point takes: <span className="result">${full.toFixed(0)}</span></p><br />
        <p>0.5 point takes: <span className='result'>${p5.toFixed(0)}</span></p><br />
        <p>0.75 point takes: <span className='result'>${p75.toFixed(0)}</span></p><br />
        <p>0.375 point takes: <span className='result'>${p375.toFixed(0)}</span></p>
      </div>



    </div>
  );
}

export default App;
