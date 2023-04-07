import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: ""
  })

  const [response, setResponse] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    validateForm()
  }

  const validateForm = () =>{
    let regex = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/);
    
    if(data.name.trim().length < 5){ //validate name
      setResponse(<p className="form-error">Error: <br /> El nombre debe de contener mas de 5 caracteres</p>)
    }else if(!regex.test(data.email)){ //validate email
      setResponse(<p className="form-error">Error: <br /> Ingrese un email válido</p>)
    }else{ // succes
      console.log('Sending data:');
      console.log(data);
      const text = <h4>Gracias {data.name}, te contactaremos cuanto antes vía mail.</h4>
      setResponse(text)
    }
  }

  return (
    <div className="form-inputs">
      <form onSubmit={handleSubmit}>
        <input onChange={(e) =>{setData({...data, name: e.target.value})}} type="text" name="" id="" placeholder="Name*" required/>
        <input onChange={(e) =>{setData({...data, email: e.target.value})}} type="email" name="" id="" placeholder="Email*" required/>
        <textarea onChange={(e) =>{setData({...data, subject: e.target.value})}} name="" id="" cols="" rows="3" placeholder="Subject... (optional)"></textarea>
        <button>Contact Us</button>
      </form>

      {response && response}

    </div>
  );
};

export default Form;
