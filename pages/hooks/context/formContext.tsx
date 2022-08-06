import React, { createContext, ReactNode, useState } from "react";

export const CustomerContext = createContext();

type handleType = {
  name: string;
  email: string;
}

type childreProp= {
  children:  JSX.Element[] | JSX.Element;
}


export const CustomerContextProvider = ({children}: childreProp) => {
    
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = ({name, email}: handleType) =>{
    console.log("Dados: ", {name, email})
    setName(name)
    setEmail(email)
  }

  return(
    <CustomerContext.Provider
        value={{ name, email, submit: handleSubmit}}
    >
      {children}
    </CustomerContext.Provider>
  )
}