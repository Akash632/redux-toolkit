import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment} from '../redux/slices/bonusSlice'

const Bonus = () => {
    const bonus = useSelector(state=>state.bonus.points)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Bonus : {bonus}</h1>
        <button onClick={()=>dispatch(increment())}>Add bonus</button>
    </div>
  )
}

export default Bonus