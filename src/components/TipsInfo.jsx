
  import React from 'react'

  let [total, setTotal] = useState();
  let [points, setPoints] = useState(6.375);
  let [hostOneHours, setHostOneHours] = useState(6);
  let [hostTwoHours, setHostTwoHours] = useState(4);
  let [hostThreeHours, setHostThreeHours] = useState(0);
  
  const TipsInfo = () => {
    return (
        <div>
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
                    <h4>Hours Host 3: </h4>
                    <input type="text" name="hostThreeHours" value={hostThreeHours} placeholder={hostThreeHours} onChange={(e) => setHostThreeHours(e.target.value)} />
                </div>
            </form>
        </div>
    )
  }
  
  export default TipsInfo