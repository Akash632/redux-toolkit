import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../redux/slices/accountSlice'
const Account = () => {
    const amount = useSelector(state=>state.account.amount)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
  return (
    <div>
        <h1>Account : ${amount}</h1>
        <button onClick={()=>dispatch(increment())}>Increament</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <input type="text" placeholder='enter the amount' onChange={(e)=>setValue(+e.target.value)}/>
        <button onClick={()=>dispatch(incrementByAmount(value))}>Increase by amount</button>
    </div>
  )
}

export default Account