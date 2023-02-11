import { useState } from 'react';
import './App.css';
import BackgroundAnimation from './components/BackgroundAnimations';
import CurrentTime from './components/CurrentTime';

function App() {
  let [total, setTotal] = useState();
  let [points, setPoints] = useState(6.375);
  let [hostOneHours, setHostOneHours] = useState(6);
  let [hostTwoHours, setHostTwoHours] = useState(4);
  let [isBar, setIsBar] = useState(0);


  let hostsTips = total * 0.05
  let barTips = total * isBar

  let sub = total - (hostsTips + barTips)
  let hostsTotalHours = Number(hostOneHours) + Number(hostTwoHours)
  let hostsTipsPerHour = hostsTips / hostsTotalHours
  let full = sub / points
  let p5 = full / 2
  let p75 = p5 * 1.5
  let p375 = p75 / 2
  let p25 = p75 / 4
  let tipsHostOne = hostsTipsPerHour * hostOneHours
  let tipsHostTwo = hostsTipsPerHour * hostTwoHours
  
  return (
    
    <div className="container">
          <div><CurrentTime /></div>
      <h1 className='toggle' >Daddies tipout calculator</h1>
      <div className='main-container'>
        <div className="top-half">
          <div> <BackgroundAnimation /></div>
          <form>
            <h2>tips info:</h2>
            <div className='form-group'>
              <h4>Total tips: </h4>
              <input  type="text" name="total" value={total} placeholder={'$0.00'} onChange={(e) => setTotal(e.target.value)} />
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
              <h4>Bar </h4>
              <input type="radio" name="bar" value={0.03} onChange={(e) => setIsBar(e.target.value)} />Yes
              <input type="radio" name="bar" value={0} onChange={(e) => setIsBar(e.target.value)} />No
            </div>
      
          </form>
        </div>
        <div className="results">
          <h2>tipout totals:</h2>
          <div className="result-line">
            <h4>Host 1 takes </h4><span className="result">${!tipsHostOne ? '0' : tipsHostOne.toFixed(0)}</span>
          </div>
          <div className="result-line">
            <h4>Host 2 takes </h4><span className="result">${!tipsHostTwo ? '0' : tipsHostTwo.toFixed(0)}</span>
          </div>
          <div className="result-line">
            <h4>Bar </h4><span className="result">${!barTips ? '0' : barTips.toFixed(0)}</span>
          </div>
          <br />
          <div className="line">
            <hr />
            <br />
          </div>
          <div className="result-line">
            <h4>Full point takes: </h4> <span className="result">${!full ? '0' : full.toFixed(0)}</span>
          </div>
          <div className="result-line">
            <h4>0.75 point takes: </h4> <span className='result'>${!p75 ? '0' : p75.toFixed(0)}</span>
          </div>
          <div className="result-line">
            <h4>0.5 point takes: </h4> <span className='result'>${!p5 ? '0' : p5.toFixed(0)}</span>
          </div>
          <div className="result-line">
            <h4>0.375 point takes: </h4> <span className='result'>${!p375 ? '0' : p375.toFixed(0)}</span>
          </div>
          <div className="result-line">
            <h4>0.25 point takes: </h4> <span className='result'>${!p25 ? '0' : p25.toFixed(0)}</span>
          </div>
        </div>
      </div>
      <footer>
        <div className="small">
          <a href="mailto:write2cmdg+daddiestipoutcalc@gmail.com">Contact Me</a>
        </div>
        <div className="small">If you had a great shift and want to buy me a coffee click <a href="https://account.venmo.com/u/Cristian-DiGrandi">HERE</a>. Thanks!!</div>
      </footer>
      
    </div>
  );
}

export default App;
