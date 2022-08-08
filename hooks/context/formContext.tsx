import Router from "next/router";
import React, { createContext, useState } from "react";

export const CustomerContext = createContext(null);

type handleType = {
  name: string;
  email: string;
}

export type childreProp= {
  children:  JSX.Element[] | JSX.Element;
}

export const CustomerContextProvider = ({children}: childreProp) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

    const handleSubmit = ({name, email}: handleType) =>{
      console.log("Dados: ", {name, email})
      setName(name)
      setEmail(email)

      if(name != '' && email != ''){
        Router.push("/posts")
    }
  }
 
  return(
    <CustomerContext.Provider
        value={{ name, email, setName, setEmail, submit: handleSubmit}}
    >
      {children}
    </CustomerContext.Provider>
  )
}