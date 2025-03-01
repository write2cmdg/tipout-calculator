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
  let p25 = full / 4
  let tipsHostOne = hostsTipsPerHour * hostOneHours
  let tipsHostTwo = hostsTipsPerHour * hostTwoHours
  
  return (
    
    <div className="container">

      <div className="form-group">
        <h1 className='toggle' >Tipout calculator</h1>
        <CurrentTime />
      </div>

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
            
      
          </form>
        </div>
        <div className="results">
          <h2>tipout totals:</h2>
          <div className="result-line">
            <h4>Host: </h4><span className="result">{hostsTips.toFixed(2)}</span>
          </div>
          <br />
          <div className="line">
            <hr />
            <br />
          </div>
          <div className="result-line">
            <h4>Full point: </h4> <span className="result">${!full ? '0' : full.toFixed(2)}</span>
          </div>
          <div className="result-line">
            <h4>0.75 point: </h4> <span className='result'>${!p75 ? '0' : p75.toFixed(2)}</span>
          </div>
          <div className="result-line">
            <h4>0.5 point: </h4> <span className='result'>${!p5 ? '0' : p5.toFixed(2)}</span>
          </div>
          <div className="result-line">
            <h4>0.375 point: </h4> <span className='result'>${!p375 ? '0' : p375.toFixed(2)}</span>
          </div>
          <div className="result-line">
            <h4>0.25 point: </h4> <span className='result'>${!p25 ? '0' : p25.toFixed(2)}</span>
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
