import React from 'react'


// sadece export ile bir kısmı çagırabılırız 
// export default ile tüm function kısmını cagırırız komple
export const users = [
  {
    username : "enes",
    password : "1"
  },
  {
    username : "ishak",
    password : "2"
  }
]


function Login() {
    //Fragment <> </>
  
    return (
        <div>
            <div>
                <p>Kullanıcı adınız :</p>
                <input type="text" />
            </div>

            <div>
                <p>Şifreniz:</p>
                <input type="text" />
            </div>
            <br />
            <button>Giriş Yap</button>
        </div>
    
    
  )
}

export default Login