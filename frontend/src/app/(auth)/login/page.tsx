"use client"; //render since client, is need to use hooks
import { useRouter } from 'next/navigation';
import useForm from '../../hooks/useForm';
import Link from 'next/link';

function LoginPage() {

  const initialValues = {
    email: "",
    password: ""
  };
  
  const router = useRouter();
  const [formValues, handleInputChange] = useForm(initialValues);

  //unstructure form values
  const { email, password } = formValues;
  
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log(formValues);
    router.push('/dashboard')
  }

  return (
    <>
      <h1>LoginPage</h1>

      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input  
          className='' 
          name='email' 
          placeholder='email' 
          type="text"
          value={email}
          onChange={handleInputChange}
        />
        <br />
        <label>password</label>
        <input  
          className='' 
          name='password' 
          placeholder='password' 
          type="password"
          value={password}
          onChange={handleInputChange}
        />

        <button type="submit"> Continuar </button>
      </form>
      <br />
      <Link href="/contact" style={{color: 'blue'}}>Contact</Link>
      <br />      
    </>
  )
}

export default LoginPage