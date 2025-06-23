import React from 'react'

function Container({children}) {
    //burdakı children olarak distract ettiğimiz product komponenti
  return (
    
    <div>
        <div>Container componenti çalıştı</div>
        {children}
    </div>
  )
}

export default Container