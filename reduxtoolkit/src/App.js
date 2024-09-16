import logo from './logo.svg';
import Account from './components/Account';
import Bonus from './components/Bonus';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './redux/slices/accountSlice';
import Admin from './components/Admin';
function App() {
  const amount = useSelector(state=>state.account.amount)
  const bonus = useSelector(state=>state.bonus.points)
  const data = useSelector(state=>state.account.products)
  const pending = useSelector(state=>state.account.pending)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <h1>Amount : {amount}</h1>
      <h2>Bonus : {bonus}</h2>
      <hr/>
      <Account/>
      <hr/>
      <Bonus/>
      <hr/>
      <button onClick={()=>dispatch(getProducts())}>Get data</button>
      {pending ? "Loading" : data && data.map((value)=>(
        <div key={value.id}>
          <img src={value.image} style={{width: "100px"}}/>
          <h4>{value.title}</h4>
          <h5>Rs. {value.price}</h5>
          </div>
      ))}
      <hr/>
      <Admin/>
    </div>
  );
}

export default App;
