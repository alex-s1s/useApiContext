import React, { useContext, useEffect, useState } from 'react'
import Axios from "axios";

import { CustomerContext } from '../../hooks/context/formContext'
import Header from '../Header'
import ListText from '../List'

function Posts() {
  const {name} = useContext<any>(CustomerContext)

  const [data, setdata] = useState()

  useEffect(() =>{
    const getStaticProps = async () => {
      const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
      setdata( res.data.slice(0, 10) )
    };

    getStaticProps()

  }, [name])

  return (
    <div>
      <Header userName={name}/>
      <ListText data={data}/>
    </div>
  )
}

export default Posts


 