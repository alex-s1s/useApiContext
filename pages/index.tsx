import type { NextPage } from 'next'
import Form from './components/Form'
import { CustomerContextProvider } from './hooks/context/formContext';
import React from 'react';
const Home: NextPage = () => {

  return (
    <CustomerContextProvider>
      <Form />
    </CustomerContextProvider>
  )
}

export default Home
