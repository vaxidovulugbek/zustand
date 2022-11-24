import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import useStore from '../Store';
function Name() {
  const { name , NameHendler, SelectHendler} = useStore()
  const [demooresume, setresume] = useState([1,2,3,4])
  return (
    <div>
      <input onChange={(e) => NameHendler(e.target.value)} type="text" placeholder='Name'/>
      <select onChange={(e) => SelectHendler(e.target.value)}>
        <option value="one" key="one">One</option>
        <option value="two" key="two">Two</option>
        <option value="three" key="three">Three</option>
      </select>
      <NavLink to="/Address">Next</NavLink>
      <button onClick={console.log(name)}>show</button>

    </div>
  )
}

export default Name