import { EXPORT_DETAIL } from 'next/dist/shared/lib/constants'
import Image from 'next/image'
import Link from 'next/link';
const Register =()=> {
  return (
    
    <dev>
      <input placeholder='Enter your Name'/>
      <input placeholder='Enter your ID'/>
      <input placeholder='Enter your Adress'/>
      <input placeholder='Enter your Phone'/>
      <button>Register</button>
      you already have an account please <Link href = '/login'> sign in </Link> insistead
    </dev>
      
  )
}
export default Register
