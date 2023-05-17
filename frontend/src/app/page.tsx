"use client"; //render since client, is need to use hooks
import { useRouter } from 'next/navigation';
import useForm from './hooks/useForm';
import Link from 'next/link';

function Home() {

  //initialize fields that will have the form
  const initialValues = {
    Entreprise: ""
  };
  
  //useRouter to use navigation
  const router = useRouter();
  const [formValues, handleInputChange] = useForm(initialValues);

  //unstructure form values
  const { Entreprise } = formValues;
  
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log(formValues);
    router.push('/login'); 
  }
  
  return (
    <>    
      <h1>SIR</h1>  
      
      <form onSubmit={handleSubmit}>
        <label>Entreprise</label>
        <input  
          className='' 
          name='Entreprise' 
          placeholder='Enterprise' 
          type="text"
          value={Entreprise}
          onChange={handleInputChange}
        />

        <button type="submit"> Continuar </button>
      </form>

      <Link href="/contact" style={{color: 'blue'}}>Contact</Link>

    </>
  
  )
}

export default Home;


// rfce - create function component with snippets
//auth Entreprise - Login/Register - Dashboard