'use client';
import Image from 'next/image'
import {useRouter} from 'next/navigation';
const Home=()=> {
  const router = useRouter();
  const handleRouting =(action)=>{
    router.push(action)
  }
  return (
    <div>
    <div className ='Header'>
        
      <button onClick={()=>handleRouting('/login')}>Login</button>
      <button onClick={()=>handleRouting('/register')}>Register</button>
            </div>
          <h1>Enter your Traking Number</h1>
      <input placeholder='Enter your traking number'/>
    </div>
  )
}

export default Home
