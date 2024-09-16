import React, { useState } from 'react'
import { decreament, increament, increamentByAmount } from '../redux/actions/amount'
import { useDispatch, useSelector } from 'react-redux'

function Account() {    
    const amount = useSelector(state=>state.account.amount)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Account component</h1>
        <h2>Amount : {amount}</h2>
        <button onClick={()=>dispatch(increament())}>Increment</button>
        <button onClick={()=>dispatch(decreament())}>Decrement</button>
        <input type="text" placeholder='Enter amount' value={value} onChange={(e)=>setValue(+e.target.value)}/>
        <button onClick={()=>dispatch(increamentByAmount(value))}>Increment by {value}</button>
    </div>
  )
}

export default Account