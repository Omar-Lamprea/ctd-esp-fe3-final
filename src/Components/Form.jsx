import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [data, setData] = useState({
    name: "",
    email: ""
  })

  const [response, setResponse] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    validateForm()
  }

  const validateForm = () =>{
    let regex = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/);
    
    if(data.name.length < 5){ //validate name
      setResponse('El nombre debe de contener mas de 5 caracteres')
    }else if(!regex.test(data.email)){ //validate email
      setResponse('Ingrese un email válido')
    }else{ // succes
      console.log('Sending data:');
      console.log(data);
      const text = `Gracias ${data.name}, te contactaremos cuanto antes vía mail`
      setResponse(text)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) =>{setData({...data, name: e.target.value})}} type="text" name="" id="" placeholder="Nombre completo" required/>
        <input onChange={(e) =>{setData({...data, email: e.target.value})}} type="email" name="" id="" placeholder="Email" required/>
        <button>Contact Us</button>
      </form>

      {response &&
        <p>{response}</p>
      }

    </div>
  );
};

export default Form;
