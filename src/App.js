import { useState } from 'react';
import './App.css';
// import AnimatedBackground from './components/AnimatedBackground';

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
      {/* <div><AnimatedBackground /></div> */}
      {/* <h1>TIPOUT CALC</h1> */}

      <div className="top-half">

        <form>
      <h2>tips info:</h2>
          <div className='form-group'>
            <h4>Total tips: </h4>
            <input  type="text" name="total" value={total} placeholder={total} onChange={(e) => setTotal(e.target.value)} />
          </div>
          <div className='form-group'>
            <h4>Total points: </h4>
            <input  type="text" name="points" value={points} placeholder={points} onChange={(e) => setPoints(e.target.value)} />
          </div>
          <div className='form-group'>
            <h4>Hours Host 1: </h4>
            <input  type="text" name="hostOneHours" value={hostOneHours} placeholder={hostOneHours} onChange={(e) => setHostOneHours(e.target.value)} />
          </div>
          <div className='form-group'>
            <h4>Hours Host 2: </h4>
            <input  type="text" name="hostTwoHours" value={hostTwoHours} placeholder={hostTwoHours} onChange={(e) => setHostTwoHours(e.target.value)} />
          </div>
          <div className='form-group'>
            <h4>Hours Host 3: </h4>
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
      <h2>tipout totals:</h2>

        <div className="result-line">
          <h4>Host 1 takes </h4><span className="result">${tipsHostOne.toFixed(0)}</span>
        </div>
        <div className="result-line">
          <h4>Host 2 takes </h4><span className="result">${tipsHostTwo.toFixed(0)}</span>
        </div>
        <div className="result-line">
          <h4>Host 3 takes </h4><span className="result">${tipsHostThree.toFixed(0)}</span>
        </div>
        <br />
        <hr /> <br />
        <div className="result-line">
          <h4>Full point takes: </h4> <span className="result">${full.toFixed(0)}</span>
        </div>
        <div className="result-line">
          <h4>0.5 point takes: </h4> <span className='result'>${p5.toFixed(0)}</span>
        </div>
        <div className="result-line">
          <h4>0.75 point takes: </h4> <span className='result'>${p75.toFixed(0)}</span>
        </div>
        <div className="result-line">
          <h4>0.375 point takes: </h4> <span className='result'>${p375.toFixed(0)}</span>
        </div>
      <div className="small">If you had a great shift and want to buy me a coffee click <a href="https://account.venmo.com/u/Cristian-DiGrandi">HERE</a>. Thanks!!</div>
      </div>
        
    </div>
  );
}

export default App;
