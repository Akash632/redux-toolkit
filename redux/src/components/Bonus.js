import React, { useState } from 'react'
import { increament, increamentByAmount } from '../redux/actions/amount'
import { useDispatch, useSelector } from 'react-redux'

function Bonus() {
    const bonus = useSelector(state=>state.bonus.points)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Bonus component</h1>
        <h2>Total points: {bonus}</h2>
        <button onClick={()=>dispatch(increament())}>Increment</button>
    </div>
  )
}

export default Bonus


{/* <h2>Total points: {store.getState().bonus.points}</h2> - when we write something like this. It won't be updated. because react renders with its state change not its store change.*/}

// To solve this we got react-redux


//useMemo error - This is because redux toolkit is used now and redux is deprecated. Delete node modules and reinstall using this command npm install --legacy-peer-deps.