import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link className='link2' to="employee">Çalışanlar Hakkında</Link>
      <Link className='link2' to="company">Şirket Hakkında</Link>
      {/* buradaki to kısımlarının başına / konulmaz konulursa içindeki değeri kök yapar child olarak almaz */}
      <Outlet/>
    </div>
  )
}

export default About