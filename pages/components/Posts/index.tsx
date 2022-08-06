import React, {useContext} from 'react'

import { CustomerContext } from '../../hooks/context/formContext'

function Main() {

    const {name} = useContext(CustomerContext)

  return (
    <div>{name}</div>
  )
}

export default Main