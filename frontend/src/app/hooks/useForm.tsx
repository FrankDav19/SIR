"use client"; //render since client, is need to use hooks
import { useState } from "react";

// <T> is to use Generics to use the same type
function useForm<T>(initialState: T) {

  const [values, setValues] = useState(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  
};

  return [values, handleInputChange] as const;
}

export default useForm;