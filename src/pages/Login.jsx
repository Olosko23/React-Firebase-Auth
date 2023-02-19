import React,{useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email, pass)
  }

  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="max-w-xl mx-auto flex flex-col gap-2 w-3/4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input className="py-2 px-4 hover:border-b-2" type="email" placeholder='Email Address' required 
          onChange={(e) => setEmail(e.target.value)}/>
          <input className="py-2 px-4 hover:border-b-2" type='password' placeholder='Password' minLength={8} required 
          onChange={(e) => setPass(e.target.value)}/>
          <button className="border py-2 px-4 rounded-md" type="submit"><span className="text-lg font-semibold">Sign in</span></button>
        </form>
        <p className="grid place-items-center text-2xl">OR</p>
          <button className="border py-2 px-4 rounded-md">Sign in with Google</button>        
          <button className="border py-2 px-4 rounded-md">Sign in with Twitter</button>        
      </div>
    </div>
  )
}

export default Login