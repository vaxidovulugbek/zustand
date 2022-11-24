import React from 'react'
import { NavLink } from 'react-router-dom'
import useStore from '../Store';

function Address() {
  const { AddressHendler } = useStore()
  return (
    <div>
      <NavLink to="/">Back</NavLink>
      <input onChange={(e) => AddressHendler(e.target.value)}  type="text" placeholder='Address'/>
      <NavLink to="/Natija">Next</NavLink>
    </div>
  )
}

export default Address