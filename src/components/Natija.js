import React from 'react'
import useStore from '../Store';

function Natija() {
  const { name, address, select } = useStore()
  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>
      <p>{select}</p>
    </div>
  )
}

export default Natija