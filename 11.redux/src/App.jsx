import { useState } from 'react'
import './App.css'
import { useSelector , useDispatch} from 'react-redux'
import { decrement, increment } from './redux/counterSlice';
import UserList from './UserList';




function App() {

  const dispatch = useDispatch();
  
  
  const {value} = useSelector((store)=> store.counter);
  console.log(value);


  return (
    <div>
      <div>
        <div>Chapter 29</div><hr />
      <div>{value}</div>
      <div>
        <button onClick={()=>{dispatch(increment())}}>Arttır</button>
        <button onClick={()=>{dispatch(decrement())}}>Azalt</button>
      </div>
      </div>

      <br /><br /><br /><br /><br /><hr />
      <div>Chapter 30</div>
      <br /><br />


      <div>
        <UserList/>
      </div>
    </div>
  )
}

export default App
