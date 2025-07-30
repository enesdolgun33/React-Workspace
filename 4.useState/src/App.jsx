import { useState } from 'react'
import './App.css'

function App() {

  // String tckn = 1212121212121
  // String firstname = "Enes"

  // useState : hooks

  const [firstname, setFirstname] = useState('Enes');
  const [lastname, setLastname] = useState("Dolgun");
  const [names , setNames] = useState(["Enes","Arda","Yakup","Ali"])
  const [userInfo , setUserInfo] =useState({username : "edolgun",  password : "1907"})
  const [show, setShow] = useState(false)

  const [count, setCount] = useState(0);

  console.log(names)

  const handleChange = () =>{

    setFirstname("İshak")
  }

  const arttir = () =>{
    setCount(count + 1)
  }

  const azalt = () =>{
    if(count > 0){
      setCount(count - 1)
    }
  }

  console.log("component render edildi")

  return (
    <div>
      {/* {firstname} {lastname} */}
      <div>{firstname}</div>
      
      {/* <div><button onClick={()=>{setFirstname("İshak")}}>İsmi Değiştir</button></div> */}
      {/* başka bir örnek */}
      <div><button onClick={handleChange}>İsmi Değiştir</button></div>
      
      <hr />

      <div>
        {names.map((name , index)=>(
          <div key={index}>{name}</div>
        ))}
      </div>
      
      <hr />
      
      <div>
        {userInfo.username} {userInfo.password}
      </div>

      <hr />

      <div>
        {show ? <div>{userInfo.username} {userInfo.password}</div> : <div> bilgileri gösterme</div>}
      </div>

      <hr />
      {/* useState : Bir state'in değerini set metodunu kullanarak değiştirdiğimizde component yeniden render edilir. */}
      
      <div>
        <div>{count}</div>
        <div><button onClick={arttir}>Arttır</button></div><br />
        <div><button onClick={azalt}>Azalt</button></div>

      </div>
        
    </div>



  )
}

export default App
