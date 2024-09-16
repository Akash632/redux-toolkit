import React from 'react'
import { useAddAccountMutation, useGetAccountsQuery } from '../redux/slices/adminSlice'

function Admin() {
  const {data, err, isLoading} = useGetAccountsQuery()
  const [addAccount, response] = useAddAccountMutation()  //calling the api
  console.log(response);
  return (
    <div>
        <h1>Admin component</h1>
        {data && data.map((value)=>(
          <div key={value.id}>
            <p>{value.amount}</p>
            </div>
        ))}
        <button onClick={()=>addAccount({amount: 100, id:6})}>Add account</button>
    </div>
  )
}

export default Admin