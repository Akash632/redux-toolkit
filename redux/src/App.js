import { useState } from "react";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserFulfilled } from "./redux/actions/amount";

function App() {

  const amount = useSelector(state=>state.account.amount)
  const bonus = useSelector(state=>state.bonus.points)
  const account = useSelector(state=>state.account)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>App</h1>
      {account.pending ? <p>Loading...</p> : <h2>Account : {amount}</h2>}
      <h2>Bonus : {bonus}</h2>
      <button onClick={()=>dispatch(getUser(1))}>Get amount</button>
      <hr/>
      <Account/>
      <hr/>
      <Bonus/>
      <hr/>
    </div>
  );
}

export default App;
